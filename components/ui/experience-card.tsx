interface ExperienceCardProps {
  title: string
  role: string
  period: string
  description?: string
}

export default function ExperienceCard({ title, role, period, description }: ExperienceCardProps) {
  return (
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-sm text-gray-500">{period}</p>
      {description && <p className="text-sm text-gray-600 mt-2">{description}</p>}
    </div>
  )
}
