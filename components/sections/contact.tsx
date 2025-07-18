import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactInfo from "@/components/ui/contact-info"
import ContactForm from "@/components/ui/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to take the first step? I'm here to support you on your journey to better mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
