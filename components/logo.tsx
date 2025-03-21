'use client'

import Link from "next/link"
import {CldImage} from 'next-cloudinary'

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center justify-center h-full">
      <CldImage
        src="xbeyondLogoHeader_ehwghz" 
        alt="xBeyond Logo" 
        width={40}
        height={40}
        className="h-10 w-auto"
      />
      <span className="text-sm font-semibold -mt-1">xBeyond</span>
    </Link>
  )
}