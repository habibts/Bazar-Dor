import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[75vh] items-center justify-center px-4 py-12">
            <div className="w-full max-w-lg text-center">
                {/* Illustration */}
                <div className="relative mx-auto mb-8 flex h-48 w-48 items-center justify-center rounded-full bg-[#F0F5F0]">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-sm">
                        <span className="text-7xl" role="img" aria-label="খালি বাজারের ঝুড়ি">
                            🛒
                        </span>
                    </div>

                    <span className="absolute right-3 top-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-2xl font-bold text-red-500">
                        !
                    </span>
                </div>

                {/* Error Code */}
                <p className="text-7xl font-extrabold tracking-tight text-[#05893E] sm:text-8xl">
                    404
                </p>

                {/* Heading */}
                <h1 className="mt-5 text-2xl font-bold text-[#26352B] sm:text-3xl">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h1>

                {/* Description */}
                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                    দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
                    পেজটি সরিয়ে ফেলা হয়ে থাকতে পারে অথবা লিংকটি ভুল হতে পারে।
                </p>

                {/* Home Button */}
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#05893E] px-7 py-3.5 font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#046F32] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893E]"
                >
                    <span aria-hidden="true">←</span>
                    হোম পেজে ফিরে যান
                </Link>

                {/* Footer Note */}
                <p className="mt-8 text-sm text-gray-500">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>
            </div>
        </main>
    );
}