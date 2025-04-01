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
// import ChatInterfacenew from "./chatbot"
import ChatInterface from "./chat-interface"

export default function ChatButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Chat with xBeyond Agent</DialogTitle>
        </DialogHeader>
        {/* <ChatInterface /> */}
        <ChatInterface />
      </DialogContent>
    </Dialog>
  )
}

