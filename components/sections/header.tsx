import { Brain } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-amber-700" />
            <span className="text-xl font-bold text-gray-800">Marija Hristovska</span>
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
  )
}
