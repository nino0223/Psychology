import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
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
          <strong>Insurance Accepted:</strong> Most major insurance plans including Blue Cross Blue Shield, Aetna,
          Cigna, and UnitedHealthcare. Please contact for verification.
        </p>
      </div>
    </div>
  )
}
