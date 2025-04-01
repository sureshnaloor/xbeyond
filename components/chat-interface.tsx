"use client"

import { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar } from '@/components/ui/avatar'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

function formatMessage(content: string) {
  return content
    .split('\n')
    .map((line, index) => {
      // Handle numbered lists
      if (/^\d+\./.test(line)) {
        return <li key={index} className="ml-4">{line}</li>
      }
      // Handle bullet points
      if (line.startsWith('•') || line.startsWith('-')) {
        return <li key={index} className="ml-4">{line}</li>
      }
      // Handle empty lines
      if (line.trim() === '') {
        return <br key={index} />
      }
      // Regular text
      return <p key={index} className="mb-0.5">{line}</p>
    })
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => uuidv4())
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Save chat to MongoDB whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      fetch('/api/chat/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          messages,
        }),
      }).catch(error => console.error('Error saving chat:', error))
    }
  }, [messages, sessionId])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input }
setMessages((prev: Message[]) => [...prev, userMessage as Message])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })

      const data = await response.json()
      if (data.choices?.[0]?.message) {
        setMessages(prev => [...prev, data.choices[0].message])
      }
    } catch (error) {
      console.error('Chat error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto border rounded-lg">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 mb-6 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <Avatar className={`h-8 w-8 font-bold pt-1 text-[12px] pl-1 ${
              message.role === 'user' ? 'bg-primary/60' : 'bg-secondary'
            }`}>
              {message.role === 'user' ? 'You' : 'Bot'}
            </Avatar>
            <div
              className={`rounded-lg p-4 max-w-[85%] ${
                message.role === 'user'
                  ? 'bg-primary/50 text-primary-foreground'
                  : 'bg-secondary/30 text-foreground'
              }`}
            >
              <div className="prose prose-sm dark:prose-invert">
                {formatMessage(message.content)}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-muted-foreground p-4">
            <div className="animate-pulse flex gap-1">
              <span className="w-2 h-2 bg-current rounded-full animate-bounce" />
              <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            Ask
          </Button>
        </div>
      </form>
    </div>
  )
}