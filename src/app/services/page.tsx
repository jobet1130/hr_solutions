"use client";

import { useEffect } from "react";
import Layout from "@/components/layout";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Users,
  DollarSign,
  Shield,
  Heart,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "HR Services - Comprehensive Human Resources Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore our complete range of HR services including recruitment, payroll, compliance, employee engagement, training, and performance management.",
      );
    }
  }, []);

  const services = [
    {
      title: "Recruitment & Staffing",
      description:
        "Find and hire the best talent for your organization with our comprehensive recruitment solutions.",
      icon: Users,
      features: [
        "Executive search and placement",
        "Candidate screening and assessment",
        "Interview coordination and support",
        "Background checks and verification",
        "Onboarding and integration support",
        "Temporary and contract staffing",
      ],
    },
    {
      title: "Payroll & Benefits",
      description:
        "Streamline payroll processing and benefits administration with our automated, compliant systems.",
      icon: DollarSign,
      features: [
        "Automated payroll processing",
        "Tax compliance and filing",
        "Benefits enrollment and management",
        "Direct deposit and pay cards",
        "Time and attendance tracking",
        "Expense management integration",
      ],
    },
    {
      title: "HR Compliance & Legal",
      description:
        "Stay compliant with employment laws and regulations with our expert legal guidance.",
      icon: Shield,
      features: [
        "Employment law compliance",
        "Policy development and updates",
        "Workplace safety regulations",
        "Anti-discrimination training",
        "Legal document preparation",
        "Audit support and preparation",
      ],
    },
    {
      title: "Employee Engagement",
      description:
        "Build a positive workplace culture and improve employee satisfaction and retention.",
      icon: Heart,
      features: [
        "Employee satisfaction surveys",
        "Engagement strategy development",
        "Recognition and rewards programs",
        "Team building activities",
        "Communication improvement plans",
        "Wellness and mental health support",
      ],
    },
    {
      title: "Training & Development",
      description:
        "Enhance employee skills and advance careers with our comprehensive training programs.",
      icon: GraduationCap,
      features: [
        "Leadership development programs",
        "Skills assessment and training",
        "Career development planning",
        "Learning management systems",
        "Compliance and safety training",
        "Custom training program design",
      ],
    },
    {
      title: "Performance Management",
      description:
        "Optimize employee performance with structured review processes and goal setting.",
      icon: TrendingUp,
      features: [
        "Performance review systems",
        "Goal setting and tracking",
        "360-degree feedback programs",
        "Performance improvement plans",
        "Succession planning",
        "Analytics and reporting dashboards",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We begin with a comprehensive consultation to understand your unique HR challenges and business objectives.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Our experts develop a customized HR strategy tailored to your industry, company size, and specific needs.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We implement your HR solutions with minimal disruption, providing training and support throughout the process.",
    },
    {
      step: "04",
      title: "Ongoing Support",
      description:
        "Receive continuous support, monitoring, and optimization to ensure your HR systems deliver lasting results.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-blue-600">HR Services</span>{" "}
              for Every Business Need
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              From recruitment to performance management, we provide end-to-end
              HR solutions that help your business thrive and your employees
              succeed.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact" className="inline-flex items-center">
                Get Your Free HR Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Core HR Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of HR services designed to
                address every aspect of human resources management.
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
                  isClickable={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure successful
                implementation and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-300" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our HR Services?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive approach to HR management delivers
                  measurable results and helps you build a stronger, more
                  efficient organization.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Reduce HR Costs by 40%
                      </h3>
                      <p className="text-gray-600">
                        Streamline processes and eliminate inefficiencies with
                        our proven systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        100% Compliance Guarantee
                      </h3>
                      <p className="text-gray-600">
                        Stay fully compliant with all employment laws and
                        regulations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Improve Employee Satisfaction
                      </h3>
                      <p className="text-gray-600">
                        Create a better workplace experience that reduces
                        turnover by 30%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        24/7 Expert Support
                      </h3>
                      <p className="text-gray-600">
                        Get help when you need it with our dedicated support
                        team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                      Service Impact
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            Cost Reduction
                          </span>
                          <span className="text-sm font-medium text-blue-600">
                            40%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-2/5"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            Employee Satisfaction
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            85%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            Process Efficiency
                          </span>
                          <span className="text-sm font-medium text-purple-600">
                            92%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full w-11/12"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with a free consultation and discover how our HR
              services can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact" className="inline-flex items-center">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
