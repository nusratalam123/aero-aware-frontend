"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { setAuthToken } from "@/utils/cookie";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BASE_URL } from "@/lib/data";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { replace, prefetch } = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/auth/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
          },
        );
        setAuthToken(response.data.token);

        // If login is successful
        toast.success("Login successful! Redirecting...");

        setTimeout(() => {
          replace("/dashboard");
        }, 150);
      } catch (err: any) {
        toast.error("Login failed! Please check your credentials.");
      }
    });
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur shadow-xl">
        <CardHeader>
          <CardTitle className="text-sky-900">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-sky-900"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-sky-200 focus:border-sky-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-sky-900"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="border-sky-200 focus:border-sky-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700"
              disabled={isPending}
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
            <p className="text-center text-sky-800 mt-4">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-sky-600 hover:text-sky-700 font-medium"
              >
                Register here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
