import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Your Mental Health Journey Starts Here</h1>
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
  )
}
