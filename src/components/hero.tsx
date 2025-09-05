"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section
        className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/hero-bg.jpg) center/cover no-repeat",
          backgroundColor: "#111827" /* Fallback color */,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-white bg-opacity-90 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  ✨ Trusted by 500+ Companies
                </div>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Smarter HR Solutions for{" "}
                <span className="text-blue-400">Modern Businesses</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-200 mt-6 leading-relaxed">
                We help companies streamline recruitment, payroll, compliance,
                and employee engagement with innovative solutions that drive
                growth and success.
              </p>

              {/* Key benefits */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-200">
                    Streamline your HR processes in days, not months
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-200">
                    98% client satisfaction rate
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-200">
                    Cut HR operational costs by up to 40%
                  </span>
                </div>
              </div>

              {/* Call-to-action buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 z-10 relative">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  <Link href="/services" className="inline-flex items-center">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 transition-colors"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200 border-opacity-20">
                <p className="text-sm text-gray-200 text-opacity-80 mb-4">
                  Trusted by leading companies:
                </p>
                <div className="flex items-center space-x-8 opacity-80">
                  <div className="text-lg font-bold text-white">IBM</div>
                  <div className="text-lg font-bold text-white">Microsoft</div>
                  <div className="text-lg font-bold text-white">Accenture</div>
                  <div className="text-lg font-bold text-white">DXC</div>
                </div>
              </div>
            </div>

            {/* Hero image/illustration */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="relative">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl p-8 shadow-2xl border-2 border-white border-opacity-20">
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">
                        Employee Dashboard
                      </div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Active
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Sarah Johnson
                          </div>
                          <div className="text-xs text-gray-500">
                            Marketing Manager
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-blue-600">
                            24
                          </div>
                          <div className="text-xs text-gray-600">Days Left</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-green-600">
                            94%
                          </div>
                          <div className="text-xs text-gray-600">
                            Performance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
