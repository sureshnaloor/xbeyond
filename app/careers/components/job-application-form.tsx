"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    const formData = new FormData(form)

    try {
      const response = await fetch('/api/career/apply', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (response.status === 200) {
        toast.success(data.message, {
          duration: 10000,
          className: "bg-green-50",
          onDismiss: () => {
            form.reset()
          }
        })
      } else {
        toast.error(data.error || 'Failed to submit application', {
          duration: 10000,
        })
      }
    } catch (error) {
      null
    } finally {
      setIsSubmitting(false)
      form.reset()
      window.scrollTo(0, 0) // Scroll to top on erro
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Position</Label>
        <Select name="position" required>
          <SelectTrigger>
            <SelectValue placeholder="Select position" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-stack">Full Stack Developer</SelectItem>
            <SelectItem value="data-engineer">Data Engineer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume">Resume</Label>
        <Input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          name="coverLetter"
          placeholder="Tell us why you'd be a great fit..."
          className="min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  )
}