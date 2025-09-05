"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  isClickable?: boolean;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  isClickable = false,
}: ServiceCardProps) {
  return (
    <Card
      className={`h-full transition-all duration-300 ${
        isClickable
          ? "hover:scale-105 hover:shadow-xl cursor-pointer border-2 hover:border-blue-200"
          : "hover:shadow-lg"
      }`}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <CardTitle className="text-xl font-semibold text-gray-900">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-600 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        {isClickable && (
          <Button variant="ghost" className="w-full group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
