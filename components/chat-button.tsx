"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageCircle } from "lucide-react"
import ChatInterface from "./chat-interface"

export default function ChatButton({ className, variant = "ghost" }: { className?: string, variant?: "ghost" | "default" }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          <MessageCircle className="h-5 w-5" />
          <span className="ml-2">Chat with Us</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh] sm:h-[600px] mb-4 sm:mb-0">
        <DialogHeader>
          <DialogTitle>Chat with xBeyond Assistant</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </DialogContent>
    </Dialog>
  )
}

