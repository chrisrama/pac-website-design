"use client"

import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, MapPin, Users, Heart, Clock } from "lucide-react"
import { EVENT_SCHEDULE } from "@/lib/constants"
import { useState } from "react"

const SESSION_OPTIONS = [
  { value: "full", label: "Full conference (both days)" },
  { value: "cantu", label: "Thu 7:30 PM – Francisco Cantú (Opening Speaker)" },
  { value: "golash-boza", label: "Fri 1:00 PM – Tanya Golash-Boza" },
  { value: "vazquez-scolari", label: "Fri 2:20 PM – Laurie Vázquez Scolari" },
  { value: "blodgett", label: "Fri 3:10 PM – Lauren Blodgett" },
  { value: "adeyemo", label: "Fri 7:30 PM – Dr. Lola Adeyemo (Keynote Speaker)" },
  { value: "panels", label: "Panel discussions" },
  { value: "other", label: "Other / Not sure yet" },
]

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    affiliation: "",
    role: "student",
    sessionOfInterest: "",
    howHeard: "",
    agreeToTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to Google Form or backend when ready
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-[#F8F4EC] pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#E5DED3]">
              <div className="w-20 h-20 bg-[#788668]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[#788668]" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4">
                Thank You for Registering!
              </h1>
              <p className="text-lg text-[#5c5c5c] mb-6">
                We are thrilled to have you join us for Journeys of Hope. A confirmation email has been sent to your inbox with all the event details.
              </p>
              <div className="bg-[#F8F4EC] rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-[#788668] mb-3">Event Details</h3>
                <p className="text-[#3D3D3D] font-medium">April 2-3, 2025</p>
                <p className="text-[#3D3D3D]">Wannamaker Hall, Principia College</p>
                <div className="mt-4 pt-4 border-t border-[#E5DED3]">
                  <p className="text-sm font-medium text-[#788668] mb-2">Schedule</p>
                  {EVENT_SCHEDULE.map((item, index) => (
                    <p key={index} className="text-sm text-[#3D3D3D]">
                      {item.day} {item.time} — {item.speaker}
                      {item.role ? ` (${item.role})` : ""}
                    </p>
                  ))}
                </div>
              </div>
              <Button
                asChild
                className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3"
              >
                <a href="/">Return to Home</a>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F4EC]">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-[#A3C2B8]/20 to-[#F8F4EC]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-[#788668]/10 text-[#788668] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Join Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3D3D3D] mb-6 text-balance">
              Register for{" "}
              <span className="text-[#788668]">Journeys of Hope</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5c5c5c] max-w-2xl mx-auto mb-8">
              Be part of a meaningful dialogue about immigration, hope, and the human experience. Reserve your spot today.
            </p>

            {/* Event Info Cards */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#E5DED3]">
                <Calendar className="w-5 h-5 text-[#D9A87E]" />
                <span className="text-[#3D3D3D] font-medium">April 2-3, 2025</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#E5DED3]">
                <MapPin className="w-5 h-5 text-[#D9A87E]" />
                <span className="text-[#3D3D3D] font-medium">Wannamaker Hall, Principia College</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-sm border border-[#E5DED3]">
                <Users className="w-5 h-5 text-[#D9A87E]" />
                <span className="text-[#3D3D3D] font-medium">Free Admission</span>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E5DED3]">
              <h2 className="text-2xl font-bold text-[#3D3D3D] mb-2 flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#788668]" />
                Event Schedule
              </h2>
              <p className="text-[#5c5c5c] mb-6">
                Join us across two days of powerful conversations.
              </p>
              <div className="space-y-3">
                {EVENT_SCHEDULE.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-[#E5DED3] last:border-0"
                  >
                    <div className="font-medium text-[#3D3D3D]">{item.speaker}</div>
                    <div className="flex items-center gap-2 text-[#5C5C5C] text-sm">
                      <span>{item.day}</span>
                      <span>·</span>
                      <span>{item.time}</span>
                      {item.role && (
                        <>
                          <span>·</span>
                          <span className="text-[#788668] font-medium">{item.role}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5DED3]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-2">
                Registration Form
              </h2>
              <p className="text-[#5c5c5c] mb-8">
                Please fill out the form below to secure your spot at the conference.
              </p>

              {/* Personal Information */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-[#3D3D3D]">
                      First Name <span className="text-[#D9A87E]">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-[#3D3D3D]">
                      Last Name <span className="text-[#D9A87E]">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#3D3D3D]">
                      Email Address <span className="text-[#D9A87E]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#3D3D3D]">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Affiliation */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Affiliation
                </h3>
                <div className="space-y-2 mb-6">
                  <Label htmlFor="affiliation" className="text-[#3D3D3D]">
                    School / Organization
                  </Label>
                  <Input
                    id="affiliation"
                    value={formData.affiliation}
                    onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                    className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                    placeholder="e.g., Principia College, Community Member"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-[#3D3D3D]">I am registering as a:</Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    className="grid grid-cols-2 md:grid-cols-4 gap-3"
                  >
                    {[
                      { value: "student", label: "Student" },
                      { value: "faculty", label: "Faculty/Staff" },
                      { value: "community", label: "Community Member" },
                      { value: "other", label: "Other" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center">
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="border-[#788668] text-[#788668]"
                        />
                        <Label
                          htmlFor={option.value}
                          className="ml-2 text-[#3D3D3D] cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              {/* Session of Interest */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Session of Interest
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="session" className="text-[#3D3D3D]">
                    Which session or talk are you most interested in?
                  </Label>
                  <Select
                    value={formData.sessionOfInterest}
                    onValueChange={(value) => setFormData({ ...formData, sessionOfInterest: value })}
                  >
                    <SelectTrigger className="w-full border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]">
                      <SelectValue placeholder="Select a session (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {SESSION_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value} className="text-[#3D3D3D]">
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* How did you hear about us */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold text-[#788668] mb-4 pb-2 border-b border-[#E5DED3]">
                  Additional Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="howHeard" className="text-[#3D3D3D]">
                    How did you hear about Journeys of Hope?
                  </Label>
                  <Input
                    id="howHeard"
                    value={formData.howHeard}
                    onChange={(e) => setFormData({ ...formData, howHeard: e.target.value })}
                    className="border-[#E5DED3] focus:border-[#788668] focus:ring-[#788668]"
                    placeholder="e.g., Social media, Friend, Campus flyer"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="mb-8">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, agreeToTerms: checked as boolean })
                    }
                    className="mt-1 border-[#788668] data-[state=checked]:bg-[#788668]"
                  />
                  <Label htmlFor="terms" className="text-[#5c5c5c] leading-relaxed cursor-pointer">
                    I agree to be photographed and/or recorded during the event, and I consent to the use of these materials for promotional purposes by PAC and Principia College. <span className="text-[#D9A87E]">*</span>
                  </Label>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={!formData.agreeToTerms || !formData.firstName || !formData.lastName || !formData.email}
                className="w-full bg-[#788668] hover:bg-[#788668]/90 text-white py-6 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Complete Registration
              </Button>

              <p className="text-center text-sm text-[#5c5c5c] mt-4">
                By registering, you will receive event updates and reminders via email.
              </p>
            </form>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-[#5c5c5c]">
                Questions about registration?{" "}
                <a href="mailto:pac@principia.edu" className="text-[#788668] hover:underline font-medium">
                  Contact us at pac@principia.edu
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
