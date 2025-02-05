"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login:", formData)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur shadow-xl">
      <CardHeader>
        <CardTitle className="text-sky-900">Welcome Back</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-sky-900">
              Email
            </label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-sky-200 focus:border-sky-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-sky-900">
              Password
            </label>
            <Input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="border-sky-200 focus:border-sky-400"
            />
          </div>
          <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
            Login
          </Button>
          <p className="text-center text-sky-800 mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-sky-600 hover:text-sky-700 font-medium">
              Register here
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

