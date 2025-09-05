import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "About Us - Leading HR Solutions Provider",
  description:
    "Learn about HR Solutions, our mission to transform businesses through innovative HR services, and our team of expert professionals.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "We operate with the highest ethical standards and build trust through transparency and honesty.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We believe in building long-term partnerships with our clients, working together towards shared success.",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description:
        "15+ years of HR leadership experience with Fortune 500 companies.",
      image: "/team-1.jpg",
    },
    {
      name: "Michael Chen",
      role: "VP of Operations",
      description:
        "Expert in HR technology and process optimization with 12+ years experience.",
      image: "/team-2.jpg",
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Compliance",
      description:
        "Employment law specialist ensuring 100% regulatory compliance for our clients.",
      image: "/team-3.jpg",
    },
    {
      name: "David Thompson",
      role: "Director of Client Success",
      description:
        "Dedicated to ensuring our clients achieve their HR transformation goals.",
      image: "/team-4.jpg",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transforming Businesses Through{" "}
              <span className="text-blue-600">Smart HR Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over a decade, we&apos;ve been helping companies streamline
              their HR operations, reduce costs, and create better workplace
              experiences for their employees.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2014, HR Solutions began with a simple mission: to
                  make professional HR services accessible to businesses of all
                  sizes. We recognized that many companies struggled with
                  complex HR challenges while lacking the resources for
                  full-time HR departments.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we&apos;ve grown into a trusted partner for over 500
                  companies, helping them navigate recruitment, compliance,
                  payroll, and employee engagement with confidence and
                  expertise.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      500+
                    </div>
                    <div className="text-gray-600">Companies Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      10+
                    </div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Company Growth
                      </h3>
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">2014</span>
                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                        </div>
                        <span className="text-sm font-medium">50 Clients</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">2018</span>
                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                        </div>
                        <span className="text-sm font-medium">200 Clients</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">2024</span>
                        <div className="flex-1 mx-4 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                        </div>
                        <span className="text-sm font-medium">
                          500+ Clients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Mission, Vision & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do and define who we
                are as a company.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To empower businesses of all sizes with comprehensive HR
                    solutions that drive growth, ensure compliance, and create
                    exceptional workplace experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the leading provider of innovative HR solutions,
                    transforming how businesses manage their most valuable
                    asset—their people.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Excellence, integrity, and partnership form the foundation
                    of our relationships with clients and guide our commitment
                    to their success.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced team of HR professionals is dedicated to your
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <Users className="h-12 w-12 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how we can help transform your HR operations
              and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact" className="inline-flex items-center">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
