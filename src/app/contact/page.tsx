import type { Metadata } from "next";
import Layout from "@/components/layout";
import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free HR Consultation",
  description:
    "Contact HR Solutions for expert HR services. Get your free consultation today and discover how we can transform your business.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our HR experts",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      value: "info@hrsolutions.com",
      action: "mailto:info@hrsolutions.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with us online (9 AM - 6 PM)",
      value: "Start Chat",
      action: "#",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Main Office",
      lines: ["123 Business District", "New York, NY 10001", "United States"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
    {
      icon: Headphones,
      title: "Emergency Support",
      lines: [
        "24/7 emergency line",
        "for existing clients",
        "+1 (555) 999-8888",
      ],
    },
  ];

  const faqs = [
    {
      question: "How quickly can you implement HR solutions?",
      answer:
        "Most of our HR solutions can be implemented within 2-4 weeks, depending on your specific needs and company size.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes! We work with businesses of all sizes, from startups to large corporations. Our solutions are scalable and customizable.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience across all industries including technology, healthcare, manufacturing, retail, and professional services.",
    },
    {
      question: "Is there a minimum contract length?",
      answer:
        "We offer flexible contract terms. While we recommend at least a 12-month engagement for optimal results, we can accommodate shorter-term projects.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section
          className="relative py-20 sm:py-24 lg:py-32 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(37, 99, 235, 0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&rsquo;s <span className="text-blue-200">Transform</span> Your
              HR Operations
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-4xl mx-auto">
              Ready to streamline your HR processes and boost employee
              satisfaction? Get in touch with our experts for a free
              consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              <div className="flex items-center bg-white/20 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg border border-white/10">
                <Users className="h-6 w-6 text-white mr-3" />
                <div>
                  <div className="font-bold text-white text-lg">500+</div>
                  <div className="text-blue-100">Satisfied Clients</div>
                </div>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-md px-5 py-3 rounded-lg shadow-lg border border-white/10">
                <Clock className="h-6 w-6 text-white mr-3" />
                <div>
                  <div className="font-bold text-white text-lg">24/7</div>
                  <div className="text-blue-100">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Choose your preferred way to contact us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <method.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <a
                      href={method.action}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      {method.value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form and Office Info */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="space-y-8">
                {officeInfo.map((info, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-600">
                          {line}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}

                {/* Google Maps Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Find Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">Interactive Map</p>
                        <p className="text-gray-400 text-xs">
                          Loading Google Maps...
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get quick answers to common questions about our HR services
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-left">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Can&apos;t find the answer you&apos;re looking for?
              </p>
              <p className="text-gray-500">
                Contact our support team at{" "}
                <a
                  href="mailto:support@hrsolutions.com"
                  className="text-blue-600 hover:text-blue-700"
                >
                  support@hrsolutions.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Need Immediate HR Support?
            </h3>
            <p className="text-blue-100 mb-6">
              Existing clients can reach our emergency support line 24/7 for
              urgent HR matters.
            </p>
            <a
              href="tel:+15559998888"
              className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Emergency Line: +1 (555) 999-8888
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
