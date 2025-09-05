"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.6)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                ✨ Trusted by 500+ Companies
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Smarter HR Solutions for{" "}
              <span className="text-yellow-300">Modern Businesses</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-blue-100 mt-6 leading-relaxed">
              We help companies streamline recruitment, payroll, compliance, and
              employee engagement with innovative solutions that drive growth
              and success.
            </p>

            {/* Key benefits */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-white">
                  Streamline your HR processes in days, not months
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-white">
                  100% compliance with employment laws and regulations
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-white">
                  Reduce HR costs by up to 40% while improving efficiency
                </span>
              </div>
            </div>

            {/* Call-to-action buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 bg-blue-600/20 hover:bg-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-blue-300 border-opacity-50">
              <p className="text-sm text-blue-200 mb-4">
                Trusted by leading companies:
              </p>
              <div className="flex items-center space-x-8 opacity-80">
                <div className="text-lg font-bold text-white">TechCorp</div>
                <div className="text-lg font-bold text-white">GlobalInc</div>
                <div className="text-lg font-bold text-white">StartupXYZ</div>
                <div className="text-lg font-bold text-white">
                  Enterprise Co
                </div>
              </div>
            </div>
          </div>

          {/* Hero image/illustration */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="relative">
              <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl p-8 shadow-2xl">
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
                        <div className="text-xs text-gray-600">Performance</div>
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
  );
}
