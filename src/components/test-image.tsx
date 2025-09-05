"use client";

import Image from "next/image";

export default function TestImage() {
  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-white rounded-lg shadow-lg">
      <p className="text-sm mb-2">Testing image:</p>
      <div className="w-32 h-32 relative">
        <Image
          src="/images/hero-bg.jpg"
          alt="Test HR Team"
          fill
          className="object-cover rounded"
        />
      </div>
      <p className="text-xs mt-2 text-gray-600">
        If you can see this image, the URL is working.
      </p>
    </div>
  );
}
