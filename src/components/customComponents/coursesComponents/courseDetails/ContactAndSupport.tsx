"use client";

import React, { useState } from "react";
import { Users, ArrowUpRight, Globe } from "lucide-react";
import { usePathname } from 'next/navigation';
import Image from "next/image";

interface FormData {
  fullName: string;
  email: string;
  whatsappNumber: string;
  city: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  whatsappNumber?: string;
  city?: string;
}

export default function QueryForm() {
  const pathname = usePathname();
  
  // Define gradient classes based on route
  const gradientClass = pathname === '/professionals'
    ? 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50' // Professional route gradient
    : 'bg-gradient-to-br from-gray-50 via-black-50 to-red-50';  // Default gradient

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    whatsappNumber: "",
    city: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters.";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.whatsappNumber || !/^\d{10,15}$/.test(formData.whatsappNumber)) {
      newErrors.whatsappNumber = "Invalid WhatsApp number (10-15 digits).";
    }

    if (!formData.city || formData.city.length < 3) {
      newErrors.city = "Please enter your city.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send the message. Please try again.");
      }

      setSuccessMessage(data.message || "Your query has been submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        whatsappNumber: "",
        city: "",
      });
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`mx-auto md:p-6 ${gradientClass}`} id="contactus">
      <div className="flex max-w-5xl mx-auto flex-col lg:flex-row w-full gap-8 bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] p-8 md:rounded-lg">
        {/* Stats Section */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">We have successfully served</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="bg-red-800/50 p-6 rounded-lg space-y-2">
              <div className="bg-red-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">1.7M+</div>
              <div className="text-white/80">Student&apos;s Lives Changed</div>
            </div>

            <div className="bg-red-800/50 p-6 rounded-lg space-y-2">
              <div className="bg-red-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">450+</div>
              <div className="text-white/80">Companies Benefited</div>
            </div>

            <div className="bg-red-800/50 p-6 rounded-lg space-y-2">
              <div className="bg-red-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">160+</div>
              <div className="text-white/80">Open Source Tools & Technology Covered</div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[400px] bg-white p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">
            Let&apos;s get <span className="text-[#ff0000]">connected</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                name="fullName"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName}</p>}
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Id*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>

            <div>
              <div className="flex">
                <div className="flex items-center px-3 border rounded-l-md border-r-0 bg-muted">
                  <Image
                    src="/assets/flag.png"
                    alt="IN"
                    width={28}
                    height={20}
                    className="w-7 h-5 object-cover"
                  />
                  <span className="ml-2 text-sm">+91</span>
                </div>
                <input
                  name="whatsappNumber"
                  type="tel"
                  placeholder="WhatsApp Number*"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="flex-1 w-full p-2 border rounded-r-md"
                />
              </div>
              {errors.whatsappNumber && (
                <p className="text-red-600 text-sm">{errors.whatsappNumber}</p>
              )}
            </div>

            <div>
              <input
                name="city"
                placeholder="City*"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#ff0000] text-white py-2 rounded hover:bg-red-700"
            >
              {loading ? "Submitting..." : "Submit →"}
            </button>
          </form>

          {/* Success & Error Messages */}
          {successMessage && <div className="mt-4 text-green-600 text-sm">{successMessage}</div>}
          {errorMessage && <div className="mt-4 text-red-600 text-sm">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}