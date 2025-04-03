"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
// import ReCAPTCHA from "react-google-recaptcha"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: any) => {
    // if (!captchaToken) {
    //   toast.error('Please complete the CAPTCHA')
    //   return
    // }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data})
      })
      
      if (response.ok) {
        toast.success('Message sent successfully!')
        reset()
        // setCaptchaToken(null)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-teal-900 to-teal-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-teal-100 md:text-xl">
                Get in touch with us for any inquiries about our digital transformation solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  {...register('name')}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>
                )}
              </div>
              <div>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="Email Address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
                )}
              </div>
              <div>
                <Input
                  {...register('company')}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <Input
                  {...register('phone')}
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Your Message"
                  className="min-h-[150px]"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                )}
              </div>
             
              <Button 
                type="submit" 
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:contact@xbeyond.online" className="text-teal-600 hover:text-teal-700">
                    contact@xbeyond.online
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+918485010620" className="text-teal-600 hover:text-teal-700">
                    +91 84850 10620
                  </a>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}