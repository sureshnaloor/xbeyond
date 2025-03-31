"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import Logo from "@/components/logo"

export default function MainNav({ className }: { className?: string }) {
  const pathname = usePathname()
  
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-5 gap-3 p-6 md:w-[600px]">
              <li className="col-span-2">
                <NavigationMenuLink asChild>
                  <Link href="/about" className="block select-none rounded-md p-6 no-underline outline-none bg-slate-900 text-white hover:bg-slate-800">
                    <div className="flex items-center mb-2">
                      <div className="w-12 h-12 mr-4">
                        <Logo />
                      </div>
                      <div>
                        <h2 className="text-xl font-medium mb-1 text-white">About xBeyond</h2>
                        <p className="text-sm leading-tight text-slate-300">
                          Learn about our mission and vision in transforming construction procurement
                        </p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <div className="col-span-3 space-y-3">
                <ListItem href="/about/history" title="Our History">
                  The journey that made us industry leaders
                </ListItem>
                <ListItem href="/about/leadership" title="Leadership Team">
                  Meet the experts guiding our vision
                </ListItem>
                <ListItem href="/about/values" title="Core Values">
                  The principles that drive our operations
                </ListItem>
                <ListItem href="/about/certifications" title="Certifications">
                  Industry standards we adhere to
                </ListItem>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/services/smarttag" title="Asset Management">
               Asset Management services
              </ListItem>
              <ListItem href="/services/smartproject" title="Project Management">
                Project Management solutions
              </ListItem>
              <ListItem href="/services/smartclass" title="Materials cataloguing and classificatin Services">
                Materials and services classification and cataloguing solutions
              </ListItem>
              <ListItem href="/services/smartlink" title="Supply Chain solutions">
                Complete supply chain, procurement, warehousing, logistics, and operations solutions.
              </ListItem>
              <ListItem href="/services/smartwave" title="E-marketplace">
                E-marketplace connecting material and service providers to EPC companies.
              </ListItem>
              <ListItem href="/services/smartflow" title="Vendor Management solutions">
                Vendor prequalification, onboarding, evaluation and management solutions.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/projects/oil-gas" title="Oil & Gas Projects">
                Offshore and onshore facilities
              </ListItem>
              <ListItem href="/projects/petrochemical" title="Petrochemical Projects">
                Processing plants and refineries
              </ListItem>
              <ListItem href="/projects/power" title="Power Projects">
                Substations and transmission systems
              </ListItem>
              <ListItem href="/projects/case-studies" title="Case Studies">
                Detailed analysis of our successful projects
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/careers" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/careers"}>
              Careers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/whyxbeyond" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/news"}>
              Why xBeyond
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

