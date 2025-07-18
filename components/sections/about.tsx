import Image from "next/image"
import { Users, Heart, Brain, Award } from "lucide-react"
import ServiceItem from "@/components/ui/service-item"

export default function About() {
  const services = [
    { icon: Users, label: "Individual Therapy" },
    { icon: Heart, label: "Couples Counseling" },
    { icon: Brain, label: "Trauma Therapy" },
    { icon: Award, label: "CBT & DBT" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="placeholder-user.jpg"
              alt="Marija Hristovska"
              width={400}
              height={500}
              className="rounded-lg shadow-lg" 
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Marija Hristovska</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in psychology, I am dedicated to helping individuals navigate
              life's challenges and achieve mental wellness. My approach combines evidence-based therapeutic techniques
              with genuine compassion and understanding.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe that every person has the capacity for growth and healing. My role is to provide a safe,
              non-judgmental space where you can explore your thoughts, feelings, and experiences while developing the
              tools and insights needed for positive change.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <ServiceItem key={index} icon={service.icon} label={service.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
