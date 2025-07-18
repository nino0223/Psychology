import { Brain } from "lucide-react"

export default function Footer() {
  return (
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
  )
}
