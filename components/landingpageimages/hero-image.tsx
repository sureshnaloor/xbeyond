'use client'

import { CldImage } from 'next-cloudinary'

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden">
      <CldImage
        src="xbeyond/kghuhjaidcbgtfiqgnds"
        alt="hero image"
        width={600}
        height={400}
        crop={{
          type: 'auto',
          source: true,
        }}
      />
    </div>
  )
}