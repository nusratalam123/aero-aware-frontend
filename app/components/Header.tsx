import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sky-600">
          AeroAware
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#solution" className="text-gray-600 hover:text-sky-600">
              Solution
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-gray-600 hover:text-sky-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="#app" className="text-gray-600 hover:text-sky-600">
              Mobile App
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

