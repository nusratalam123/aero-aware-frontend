"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const districts = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
];

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    country: "",
    district: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur shadow-xl">
      <CardHeader>
        <CardTitle className="text-sky-900">Join AeroAware</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-sky-900"
              >
                First Name
              </label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="border-sky-200 focus:border-sky-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-sky-900"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="border-sky-200 focus:border-sky-400"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="address"
              className="text-sm font-medium text-sky-900"
            >
              Address
            </label>
            <Input
              id="address"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="border-sky-200 focus:border-sky-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-sky-900">
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="country"
                className="text-sm font-medium text-sky-900"
              >
                Country
              </label>
              <Input
                id="country"
                required
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="border-sky-200 focus:border-sky-400"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="district"
                className="text-sm font-medium text-sky-900"
              >
                District
              </label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, district: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select district" />
                </SelectTrigger>
                <SelectContent>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>
                      {district}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="mobileNumber"
              className="text-sm font-medium text-sky-900"
            >
              Mobile Number
            </label>
            <Input
              id="mobileNumber"
              type="tel"
              required
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
              className="border-sky-200 focus:border-sky-400"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
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
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-sky-900"
              >
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="border-sky-200 focus:border-sky-400"
              />
            </div>
          </div>
          <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700">
            Register
          </Button>
          <p className="text-center text-sky-800 mt-4">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-sky-600 hover:text-sky-700 font-medium"
            >
              Login here
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
