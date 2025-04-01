"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Logo from "@/components/logo"
import ChatButton from "@/components/chat-button"

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="px-4 py-6 border-b">
            <Link href="/" className="flex items-center" passHref>
              <SheetClose asChild>
                <div className="flex items-center">
                  <Logo />
                  <span className="ml-2 font-bold text-xl">xBeyond</span>
                </div>
              </SheetClose>
            </Link>
            <SheetClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
          <div className="flex-1 overflow-auto py-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="px-4">About</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    <SheetClose asChild>
                      <Link href="/about" className="py-2 px-4 hover:bg-accent rounded-md">
                        About xBeyond
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about/history" className="py-2 px-4 hover:bg-accent rounded-md">
                        Our History
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about/leadership" className="py-2 px-4 hover:bg-accent rounded-md">
                        Leadership Team
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about/values" className="py-2 px-4 hover:bg-accent rounded-md">
                        Core Values
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about/certifications" className="py-2 px-4 hover:bg-accent rounded-md">
                        Certifications
                      </Link>
                    </SheetClose>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="services">
                <AccordionTrigger className="px-4">Services</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    <SheetClose asChild>
                      <Link href="/services/smarttag" className="py-2 px-4 hover:bg-accent rounded-md">
                        Asset Management
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/smartproject" className="py-2 px-4 hover:bg-accent rounded-md">
                        Project Management
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/smartclass" className="py-2 px-4 hover:bg-accent rounded-md">
                        Materials Cataloguing
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/smartlink" className="py-2 px-4 hover:bg-accent rounded-md">
                        Supply Chain Solutions
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/smartwave" className="py-2 px-4 hover:bg-accent rounded-md">
                        E-marketplace
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/smartflow" className="py-2 px-4 hover:bg-accent rounded-md">
                        Vendor Management
                      </Link>
                    </SheetClose>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="projects">
                <AccordionTrigger className="px-4">Projects</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    <SheetClose asChild>
                      <Link href="/projects/oil-gas" className="py-2 px-4 hover:bg-accent rounded-md">
                        Oil & Gas Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/projects/petrochemical" className="py-2 px-4 hover:bg-accent rounded-md">
                        Petrochemical Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/projects/power" className="py-2 px-4 hover:bg-accent rounded-md">
                        Power Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/projects/case-studies" className="py-2 px-4 hover:bg-accent rounded-md">
                        Case Studies
                      </Link>
                    </SheetClose>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="px-4 py-2">
              <SheetClose asChild>
                <Link href="/careers" className="flex w-full py-2 hover:bg-accent rounded-md">
                  Careers
                </Link>
              </SheetClose>
            </div>
            <div className="px-4 py-2">
              <SheetClose asChild>
                <Link href="/whyxbeyond" className="flex w-full py-2 hover:bg-accent rounded-md">
                  Why xBeyond
                </Link>
              </SheetClose>
            </div>
          </div>
          <div className="border-t p-4 space-y-2">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </SheetClose>
            <div className="w-full">
              <ChatButton variant="default" className="w-full justify-start" />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

