import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your MongoDB URI to .env')
}

const client = new MongoClient(process.env.DATABASE_URL)

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Connect to MongoDB
    await client.connect()
    const db = client.db('xbeyond')
    const collection = db.collection('contact')

    // Store contact form data
    const contactData = {
      ...data,
      createdAt: new Date(),
      status: 'new'
    }
    
    await collection.insertOne(contactData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  } finally {
    await client.close()
  }
}