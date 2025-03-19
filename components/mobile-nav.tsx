"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
                <div className="font-bold text-xl">EnergyTech</div>
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
                        About Us
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
                      <Link href="/services/oil-gas" className="py-2 px-4 hover:bg-accent rounded-md">
                        Oil & Gas
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/petrochemicals" className="py-2 px-4 hover:bg-accent rounded-md">
                        Petrochemicals
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/manpower" className="py-2 px-4 hover:bg-accent rounded-md">
                        Manpower Services
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/industrial" className="py-2 px-4 hover:bg-accent rounded-md">
                        Industrial Support
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/energy-projects" className="py-2 px-4 hover:bg-accent rounded-md">
                        Energy Projects
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services/substations" className="py-2 px-4 hover:bg-accent rounded-md">
                        Substation Construction
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
                <Link href="/news" className="flex w-full py-2 hover:bg-accent rounded-md">
                  News
                </Link>
              </SheetClose>
            </div>
            <div className="px-4 py-2">
              <SheetClose asChild>
                <Link href="/contact" className="flex w-full py-2 hover:bg-accent rounded-md">
                  Contact
                </Link>
              </SheetClose>
            </div>
          </div>
          <div className="border-t p-4">
            <SheetClose asChild>
              <Button className="w-full">Contact Us</Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

