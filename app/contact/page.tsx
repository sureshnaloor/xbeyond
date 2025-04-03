"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Thank you for your message. We will get back to you soon!')
        setFormData({ name: '', email: '', company: '', phone: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.')
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="min-h-[150px]"
                />
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