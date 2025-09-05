"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, ArrowLeft, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("page-transition");
    return () => document.body.classList.remove("page-transition");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              HR Solutions
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* 404 Number and Message */}
        <h1 className="text-9xl font-bold text-blue-600/20 select-none mb-4">
          404
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Oops! The page you&apos;re looking for seems to have been moved,
          deleted, or doesn&apos;t exist. Don&apos;t worry, our HR experts are
          here to help you find what you need.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/" className="flex items-center gap-2">
              <Home size={20} /> Go to Homepage
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/services" className="flex items-center gap-2">
              <Search size={20} /> Browse Services
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <Phone size={20} /> Contact Support
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Popular Pages You Might Be Looking For:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → Recruitment & Staffing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → Payroll & Benefits Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → HR Compliance & Legal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → Employee Training & Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">Company Information</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → About Our Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → Our Mission & Values
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → Leadership Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    → Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Need Immediate HR Support?
              </h3>
              <p className="text-blue-700">
                Our HR experts are available 24/7 to assist with your needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone size={18} /> Call (555) 123-4567
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Go Back to Previous Page
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-400">
              © 2024 HR Solutions. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
