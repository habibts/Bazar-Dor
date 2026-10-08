import { Button } from "@heroui/react";
import Image from "next/image";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Banner = () => {
    return (
        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl border border-gray-200 bg-[#FAFCFA] p-6 sm:p-8 md:flex-row md:gap-10 lg:p-10">
            <div className="flex w-full flex-col items-start md:flex-1">
                <span className="mb-5 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-[#05893E]">
                    {date}
                </span>

                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <span className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </span>

                <Button className="mt-7 rounded-lg bg-[#05893E] px-6 py-3 font-bold text-white transition-colors hover:bg-[#046F32]">
                    সাইন আপ
                </Button>
            </div>

            <div className="w-full md:flex-1">
                <Image
                    src="/bazar-hero.png"
                    height={600}
                    width={600}
                    alt="hero Image"
                    priority
                    className="h-auto w-full rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>
    );
};

export default Banner;