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

export default function MainNav({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <NavigationMenu className={cn("hidden md:flex", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">About xBeyond</div>
                    <p className="text-sm leading-tight text-white/90">
                      Learn about our company history, mission, and values.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
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

