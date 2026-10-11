"use client";

import Image from "next/image";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Banner = () => {
    const handleScroll = () => {
        document.getElementById("সব-পণ্য")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section className="mx-auto mt-5 w-full max-w-7xl px-3 sm:mt-8 sm:px-4 lg:mt-10">
            <div className="flex w-full flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#FAFCFA] p-4 sm:gap-8 sm:p-6 md:flex-row md:gap-10 lg:p-10">
                {/* Banner Content */}
                <div className="flex w-full min-w-0 flex-col items-start md:flex-1">
                    <span className="mb-4 max-w-full rounded-full bg-green-100 px-3 py-2 text-xs font-medium text-[#05893E] sm:mb-5 sm:px-4 sm:text-sm">
                        {date}
                    </span>

                    <h1 className="w-full text-2xl font-bold leading-snug tracking-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-4 w-full text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <button
                        type="button"
                        onClick={handleScroll}
                        className="mt-6 inline-flex max-w-full items-center justify-center gap-2 rounded-lg bg-[#05893E] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#046F32] sm:mt-7 sm:px-6 sm:text-base"
                    >
                        সব পণ্যের দাম দেখুন
                        <span aria-hidden="true">→</span>
                    </button>
                </div>

                {/* Banner Image */}
                <div className="w-full min-w-0 md:flex-1">
                    <Image
                        src="/bazar-hero.png"
                        height={600}
                        width={600}
                        alt="বাজারের পণ্যের ছবি"
                        priority
                        className="h-auto max-h-87.5 w-full rounded-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105 sm:max-h-105 md:max-h-none"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;