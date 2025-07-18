import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import EducationCard from "@/components/ui/education-card"
import ExperienceCard from "@/components/ui/experience-card"

export default function Experience() {
  const educationData = [
    {
      degree: "M.A. in Psychology",
      institution: "University of Gothenburg, Sweden",
      period: "2023 - 2025",
    },
    {
      degree: "B.A. in Psychology",
      institution: "University of Gothenburg, Sweden",
      period: "2020 - 2023",
      description: "Magna Cum Laude, Phi Beta Kappa",
    },
  ]

  const experienceData = [
    {
      title: "PTP",
      role: "Licensed Clinical Psychologist",
      period: "2025 - Present",
      description: "Providing individual and couples therapy specializing in anxiety, depression, and trauma",
    },
    {
      title: "Bolnicata 2 leta",
      role: "Senior Clinical Psychologist",
      period: "2012 - 2015",
      description: "Led therapy groups and provided crisis intervention services",
    },
    {
      title: "4 pacienti na praksa",
      role: "Psychology Intern",
      period: "2011 - 2012",
    },
  ]

  const specializations = [
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavior Therapy (DBT)",
    "EMDR Therapy",
    "Trauma-Informed Care",
    "Anxiety Disorders",
    "Depression Treatment",
    "Couples Therapy",
    "Mindfulness-Based Therapy",
  ]

  return (
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
              {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
              ))}
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
              {experienceData.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Specializations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Specializations & Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 bg-stone-200 text-stone-800 hover:bg-stone-300"
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
