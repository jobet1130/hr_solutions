"use client";

import Layout from "../components/layout";
import Hero from "../components/hero";
import ServiceCard from "../components/service-card";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Users, DollarSign, GraduationCap, ArrowRight } from "lucide-react";

// ✅ move data arrays OUTSIDE the component
const services = [
  {
    title: "Recruitment & Staffing",
    description:
      "Find the perfect talent for your organization with our comprehensive recruitment solutions.",
    icon: Users,
    features: [
      "Executive search and placement",
      "Candidate screening and interviews",
      "Background verification",
      "Onboarding support",
    ],
  },
  {
    title: "Payroll & Benefits",
    description:
      "Streamline payroll processing and benefits administration with our automated systems.",
    icon: DollarSign,
    features: [
      "Automated payroll processing",
      "Tax compliance and filing",
      "Benefits administration",
      "Direct deposit and pay cards",
    ],
  },
  {
    title: "Training & Development",
    description:
      "Enhance employee skills and performance with our tailored training programs.",
    icon: GraduationCap,
    features: [
      "Leadership development programs",
      "Skills assessment and training",
      "Performance management systems",
      "Learning management platform",
    ],
  },
];

const stats = [
  {
    number: "10+",
    label: "Years Experience",
    description: "Delivering excellence",
  },
  {
    number: "500+",
    label: "Clients Served",
    description: "Across industries",
  },
  {
    number: "100%",
    label: "Compliance Rate",
    description: "Error-free processes",
  },
  {
    number: "24/7",
    label: "Support Available",
    description: "When you need us",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive HR solutions designed to streamline your operations
              and drive business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                isClickable={false}
              />
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services" className="inline-flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/consultation" className="inline-flex items-center">
                Consult with Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HR Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results that matter to your business with proven
              expertise and dedication.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-16 sm:py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your HR Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ companies that trust us with their HR needs. Get started
            today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="inline-flex items-center">
                Start Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-blue-600 border-blue-600 hover:bg-blue-50"
            >
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
