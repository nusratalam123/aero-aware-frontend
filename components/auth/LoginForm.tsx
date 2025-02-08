"use client"

import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ToastContainer } from "react-toastify"

interface FormData {
  email: string
  password: string
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post("https://aero-air-backend.vercel.app/auth/login", {
        email: formData.email,
        password: formData.password,
      }, {
        withCredentials: true, // To include cookies, if needed
      })

      console.log("User logged in:", response.data)

      // Store the token
      localStorage.setItem("token", response.data.token)

      // Show success toast
      // toast.success("Login successful! Redirecting...", {
      //   position: "top-right",
      //   autoClose: 3000, // Closes after 3 seconds
      // })

        
      // If login is successful
      toast.success("Login successful! Redirecting...", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 3000)

    } catch (err: any) {
      // toast.error(err.response?.data?.message || "Login failed. Please try again.", {
      //   position: "bottom-right",
      //   autoClose: 3000,
      // })
      toast.error("Login failed! Please check your credentials.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toast Container - Required for toast messages to work */}
      <ToastContainer />

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
            <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
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
    </>
  )
}
