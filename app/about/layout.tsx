import MainNav from "@/components/main-nav"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import ChatButton from "@/components/chat-button"
import Link from "next/link"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Logo />
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <ChatButton />
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t bg-slate-900 text-white">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          {/* ... footer content same as services layout ... */}
        </div>
      </footer>
    </div>
  )
}