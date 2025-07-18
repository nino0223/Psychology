import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Brain, GraduationCap, Award, Phone, Mail, MapPin, Calendar, Users, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PsychologistWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-amber-700" />
              <span className="text-xl font-bold text-gray-800">Dr. Sarah Johnson</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-amber-700 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-amber-700 transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-amber-700 transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Your Mental Health Journey Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Licensed Clinical Psychologist specializing in anxiety, depression, and trauma therapy. Providing
              compassionate, evidence-based care in a safe and supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-stone-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Dr. Sarah Johnson"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Dr. Sarah Johnson</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 12 years of experience in clinical psychology, I am dedicated to helping individuals navigate
                life's challenges and achieve mental wellness. My approach combines evidence-based therapeutic
                techniques with genuine compassion and understanding.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe that every person has the capacity for growth and healing. My role is to provide a safe,
                non-judgmental space where you can explore your thoughts, feelings, and experiences while developing the
                tools and insights needed for positive change.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">Individual Therapy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">Couples Counseling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">Trauma Therapy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">CBT & DBT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training and extensive experience in clinical psychology and therapeutic practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-amber-700" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Ph.D. in Clinical Psychology</h3>
                  <p className="text-gray-600">Stanford University</p>
                  <p className="text-sm text-gray-500">2008 - 2012</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Dissertation: "Cognitive Behavioral Interventions for Anxiety Disorders"
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">M.A. in Psychology</h3>
                  <p className="text-gray-600">University of California, Berkeley</p>
                  <p className="text-sm text-gray-500">2006 - 2008</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">B.A. in Psychology</h3>
                  <p className="text-gray-600">UCLA</p>
                  <p className="text-sm text-gray-500">2002 - 2006</p>
                  <p className="text-sm text-gray-600 mt-2">Magna Cum Laude, Phi Beta Kappa</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-amber-700" />
                  <span>Professional Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Private Practice</h3>
                  <p className="text-gray-600">Licensed Clinical Psychologist</p>
                  <p className="text-sm text-gray-500">2015 - Present</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Providing individual and couples therapy specializing in anxiety, depression, and trauma
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Community Mental Health Center</h3>
                  <p className="text-gray-600">Senior Clinical Psychologist</p>
                  <p className="text-sm text-gray-500">2012 - 2015</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Led therapy groups and provided crisis intervention services
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Stanford Medical Center</h3>
                  <p className="text-gray-600">Psychology Intern</p>
                  <p className="text-sm text-gray-500">2011 - 2012</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specializations */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Specializations & Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Cognitive Behavioral Therapy (CBT)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Dialectical Behavior Therapy (DBT)
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                EMDR Therapy
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Trauma-Informed Care
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Anxiety Disorders
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Depression Treatment
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Couples Therapy
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300">
                Mindfulness-Based Therapy
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-stone-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to take the first step? I'm here to support you on your journey to better mental health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">dr.sarah@mindfultherapy.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-gray-700">
                    123 Wellness Ave, Suite 200
                    <br />
                    San Francisco, CA 94102
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Thursday: 9:00 AM - 7:00 PM</p>
                  <p>Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-600">
                  <strong>Insurance Accepted:</strong> Most major insurance plans including Blue Cross Blue Shield,
                  Aetna, Cigna, and UnitedHealthcare. Please contact for verification.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Initial consultation request" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please share what brings you to therapy and any questions you may have..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6" />
            <span className="text-xl font-bold">Dr. Sarah Johnson</span>
          </div>
          <p className="text-stone-400 mb-4">Licensed Clinical Psychologist</p>
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Dr. Sarah Johnson Psychology Practice. All rights reserved.
          </p>
          <p className="text-xs text-stone-500 mt-2">
            This website is for informational purposes only and does not constitute medical advice.
          </p>
        </div>
      </footer>
    </div>
  )
}
