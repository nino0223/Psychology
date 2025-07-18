import type { LucideIcon } from "lucide-react"

interface ServiceItemProps {
  icon: LucideIcon
  label: string
}

export default function ServiceItem({ icon: Icon, label }: ServiceItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <Icon className="h-5 w-5 text-amber-700" />
      <span className="text-gray-700">{label}</span>
    </div>
  )
}
