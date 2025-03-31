import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const position = formData.get('position')
    const coverLetter = formData.get('coverLetter')
    const resumeFile = formData.get('resume') as File

    if (!resumeFile) {
      return NextResponse.json(
        { error: 'Resume file is required' },
        { status: 400 }
      )
    }

    // Create unique filename
    const timestamp = Date.now()
    const filename = `${timestamp}-${resumeFile.name}`
    const uploadsDir = path.join(process.cwd(), 'public/uploads')
    const filePath = path.join(uploadsDir, filename)

    // Convert file to buffer
    const bytes = await resumeFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Save file
    await writeFile(filePath, buffer)

    // Save application data (you can replace this with your database logic)
    const applicationData = {
      firstName,
      lastName,
      email,
      phone,
      position,
      coverLetter,
      resumePath: `/uploads/${filename}`,
      appliedAt: new Date().toISOString()
    }

    // Here you would typically save applicationData to your database
    console.log('Application received:', applicationData)

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