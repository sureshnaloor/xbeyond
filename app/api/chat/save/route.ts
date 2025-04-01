import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.DATABASE_URL!
const client = new MongoClient(uri)

export async function POST(request: Request) {
  try {
    await client.connect()
    const database = client.db('xbeyond')
    const chats = database.collection('chats')

    const { sessionId, messages } = await request.json()

    const result = await chats.insertOne({
      sessionId,
      messages,
      createdAt: new Date()
    })

    return NextResponse.json({ 
      success: true, 
      insertedId: result.insertedId 
    })
  } catch (error) {
    console.error('Error saving chat:', error)
    return NextResponse.json({ error: 'Failed to save chat' }, { status: 500 })
  } finally {
    await client.close()
  }
}