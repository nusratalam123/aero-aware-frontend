"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login"); // Redirect to login if no token is found
        return;
      }

      try {
        const response = await axios.get("https://aero-air-backend.vercel.app/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        localStorage.removeItem("token"); // Remove invalid token
        router.push("/login"); // Redirect to login if token is invalid
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setUser(null);
    router.push("/login"); // Redirect to login
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sky-600">AeroAware</Link>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/dashboard" className="text-gray-600 hover:text-sky-600">Dashboard</Link>
          </li>
          <li>
            <Link href="#solution" className="text-gray-600 hover:text-sky-600">Solution</Link>
          </li>
          <li>
            <Link href="#services" className="text-gray-600 hover:text-sky-600">Services</Link>
          </li>
          <li>
            <Link href="#app" className="text-gray-600 hover:text-sky-600">Mobile App</Link>
          </li>
        </ul>

        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <span className="text-gray-600 font-bold">{user.data.firstName}</span>
              <Button className="bg-sky-500 hover:bg-sky-600 text-white" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white">Register</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
