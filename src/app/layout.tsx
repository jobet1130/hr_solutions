import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HR Solutions Web App",
  description:
    "Create a sleek, responsive HR Solutions website with Next.js, TypeScript, and TailwindCSS. Features include: sticky navbar, service previews, contact form, and SEO. Perfect for modern businesses.",
  other: {
    "fc:frame": JSON.stringify({
      version: "next",
      imageUrl:
        "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/thumbnail_755c19a2-c44e-4d0b-83bc-808729094247-XewnNNK8zYPQXXokOiChJHOidQYl3t",
      button: {
        title: "Open with Ohara",
        action: {
          type: "launch_frame",
          name: "HR Solutions Web App",
          url: "https://freedom-clearly-628.preview.series.engineering",
          splashImageUrl:
            "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg",
          splashBackgroundColor: "#ffffff",
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
