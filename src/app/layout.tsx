import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import Marquee from "@/components/shared/Marquee";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর | প্রয়োজনীয় পণ্যের দাম",
  description: "প্রয়োজনীয় পণ্যের আজকের বাজারদর এক নজরে দেখুন।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoSerifBengali.className} h-full antialiased bg-[#F3FBF4]`}
    >
      <body className="min-h-full flex flex-col">

        <div className="sticky top-0 z-50">
          <div className="relative z-50">
            <Header />
          </div>

          <div className="relative z-20">
            <Suspense
              fallback={
                <div className="bg-[#FAFCFA] py-4 text-center text-sm text-gray-500">
                  ক্যাটাগরি লোড হচ্ছে...
                </div>
              }
            >
              <Navbar />
            </Suspense>
          </div>

          <div className="relative z-10">
            <Suspense
              fallback={
                <div className="bg-[#FAFCFA] py-4 text-center text-sm text-gray-500">
                  বাজারদরের তথ্য লোড হচ্ছে...
                </div>
              }
            >
              <Marquee />
            </Suspense>
          </div>
        </div>

        <main className="w-full flex-1">{children}</main>

        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}