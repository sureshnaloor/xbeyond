import { NextResponse } from 'next/server'

export const runtime = 'edge' // Use Edge runtime for better performance
export const maxDuration = 60 // Extend timeout to 60 seconds

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.7,
        max_tokens: 500
      }),
      signal: AbortSignal.timeout(30000) // 30 second timeout
    })

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status}`)
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to process chat' },
      { status: 500 }
    )
  }
}