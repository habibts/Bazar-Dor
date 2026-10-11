 "use client";
 
import Image from "next/image";
import UserMenu from "./UserMenu";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className="w-full border-b border-gray-200 bg-[#FAFCFA]/95 shadow-sm backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-2 py-3 sm:gap-3 sm:px-4 sm:py-4">
                {/* Left Side: Logo and Date */}
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        onClick={handleScrollToTop}
                        aria-label="বাজার দর - পেজের উপরে যান"
                        className="flex min-w-0 shrink-0 cursor-pointer items-center gap-2 sm:gap-3"
                    >
                        <Image
                            className="h-10 w-10 shrink-0 rounded-xl bg-[#05893E] p-2 transition-transform duration-300 hover:scale-105 sm:h-12 sm:w-12 sm:rounded-2xl"
                            height={50}
                            width={50}
                            src="/logo-icon.png"
                            alt=""
                            priority
                        />

                        <span className="min-w-0 text-left">
                            <span className="block text-lg font-bold leading-tight text-[#26352B] sm:text-2xl">
                                বাজার দর
                            </span>

                            <span className="mt-1 block text-[10px] leading-relaxed text-gray-500 sm:text-sm">
                                {date}
                            </span>
                        </span>
                    </button>
                </div>

                {/* Right Side: Authentication */}
                <div className="flex shrink-0 items-center justify-end">
                    <UserMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;