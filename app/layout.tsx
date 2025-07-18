import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dr. Sarah Johnson - Licensed Clinical Psychologist",
  description:
    "Professional psychology services specializing in anxiety, depression, and trauma therapy. Compassionate, evidence-based care in San Francisco.",
  keywords: "psychologist, therapy, mental health, anxiety, depression, trauma, San Francisco",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
