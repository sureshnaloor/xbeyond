"use client"

import * as React from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
}

export default function ChatButton() {
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1",
      content: "Hello! How can I help you with your energy project needs today?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = React.useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate agent response after a short delay
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message. One of our representatives will get back to you shortly.",
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentMessage])
    }, 1000)
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Open chat</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:max-w-[425px] p-0 flex flex-col h-full">
        <SheetHeader className="px-4 py-3 border-b">
          <SheetTitle className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Chat with Us
          </SheetTitle>
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {message.sender === "agent" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Agent" />
                      <AvatarFallback>ET</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-3 py-2 text-sm ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <SheetFooter className="p-4 border-t">
          <div className="flex w-full items-center space-x-2">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage()
                }
              }}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

