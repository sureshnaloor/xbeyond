import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const maxDuration = 60

const systemContext = {
  role: "system",
  content: `You are an AI assistant for xBeyond Corporation. 
  specializing in industrial asset management and supply chain solutions. Our key products are:

1. Asset Management (SmartTag): Digital solution for tracking and managing industrial assets
2. Project Management (SmartProject): Comprehensive project lifecycle management system
3. Materials Cataloguing (SmartClass): Intelligent system for materials classification and standardization
4. Supply Chain Solutions (SmartLink): End-to-end supply chain management platform
5. E-marketplace (SmartWave): Digital marketplace for industrial equipment and materials
6. Vendor Management (SmartFlow): Vendor relationship and performance management system
We serve industries including Oil & Gas, Petrochemical, and Power sectors. Provide accurate, professional responses about our services and capabilities.
Focus on these core services when answering questions. Be professional and accurate.`
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    // Add system context to the beginning of messages
    const contextualMessages = [systemContext, ...messages]
    
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: contextualMessages,
        temperature: 0.5,
        max_tokens: 1000
      }),
      signal: AbortSignal.timeout(30000)
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