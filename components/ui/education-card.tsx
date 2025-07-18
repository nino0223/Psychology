interface EducationCardProps {
  degree: string
  institution: string
  period: string
  description?: string
}

export default function EducationCard({ degree, institution, period, description }: EducationCardProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{degree}</h3>
      <p className="text-gray-600">{institution}</p>
      <p className="text-sm text-gray-500">{period}</p>
      {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
    </div>
  )
}
