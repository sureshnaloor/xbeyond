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
                    <div className="mt-4 mb-2 text-lg font-medium text-white">About EnergyTech</div>
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
              <ListItem href="/services/oil-gas" title="Oil & Gas">
                Exploration, production, and distribution services
              </ListItem>
              <ListItem href="/services/petrochemicals" title="Petrochemicals">
                Manufacturing and processing solutions
              </ListItem>
              <ListItem href="/services/manpower" title="Manpower Services">
                Specialized recruitment and staffing
              </ListItem>
              <ListItem href="/services/industrial" title="Industrial Support">
                Maintenance, logistics, and operations
              </ListItem>
              <ListItem href="/services/energy-projects" title="Energy Projects">
                End-to-end project management
              </ListItem>
              <ListItem href="/services/substations" title="Substation Construction">
                Design and construction of power systems
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
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/news"}>
              News
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

