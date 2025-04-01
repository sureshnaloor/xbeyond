// First install prisma client: npm install @prisma/client
// Then generate prisma client: npx prisma generate
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
// @ts-ignore
import B2 from 'backblaze-b2'

// PrismaClient initialization for production
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// Initialize Backblaze
const b2 = new B2({
  applicationKeyId: process.env.B2_APPLICATION_KEY_ID!,
  applicationKey: process.env.B2_APPLICATION_KEY!
})

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const coverLetter = formData.get('coverLetter') as string
    const resumeFile = formData.get('resume') as File

    if (!resumeFile) {
      return NextResponse.json(
        { error: 'Resume file is required' },
        { status: 400 }
      )
    }

    // Upload file to Backblaze
    await b2.authorize()

    // Get upload URL
    const { data: { uploadUrl, authorizationToken } } = await b2.getUploadUrl({
      bucketId: process.env.B2_BUCKET_ID!
    })

    // Create unique filename
    const timestamp = Date.now()
    const filename = `resumes/${timestamp}-${resumeFile.name}`

    // Convert file to buffer
    const bytes = await resumeFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Backblaze
    const { data: fileInfo } = await b2.uploadFile({
      uploadUrl: uploadUrl,
      uploadAuthToken: authorizationToken,
      fileName: filename,
      data: buffer,
      contentLength: buffer.length,
      contentType: resumeFile.type
    })

    // Generate public URL
    const fileUrl = `${process.env.B2_PUBLIC_URL}/file/${process.env.B2_BUCKET_NAME}/${filename}`

    // Save to MongoDB via Prisma
    const application = await prisma.jobApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        position,
        coverLetter,
        resumeUrl: fileUrl
      }
    })

    return NextResponse.json(
      { message: 'Your application is submitted successfully, you will hear back from us if found suitable' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}