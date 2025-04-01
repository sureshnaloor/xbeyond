import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { messages, userInfo } = await req.json()

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are a helpful sales assistant for xBeyond. Guide users through our products:
            1. SmartTag (Asset Management) - Starting $499/month
            2. SmartProject (Project Management) - Starting $799/month
            3. SmartClass (Materials Cataloguing) - Starting $299/month
            4. SmartLink (Supply Chain Solutions) - Starting $599/month
            5. SmartWave (E-marketplace) - Starting $399/month
            6. SmartFlow (Vendor Management) - Starting $699/month
            
            Collect user's email and phone number before ending the conversation.`
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 })
  }
}