import Image from "next/image";
import UserMenu from "./UserMenu";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <header className="w-full border-b border-gray-100 bg-[#FAFCFA]">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:py-5">
                {/* Left Side */}
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <Image
                        className="h-10 w-10 p-2 shrink-0 rounded-xl bg-[#05893E] sm:h-12 sm:w-12 sm:rounded-2xl"
                        height={50}
                        width={50}
                        src="/logo-icon.png"
                        alt="বাজার দর লোগো"
                        priority
                    />

                    <div className="min-w-0">
                        <h1 className="text-xl font-bold text-[#26352B] sm:text-2xl">
                            বাজার দর
                        </h1>

                        <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                            {date}
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex shrink-0 items-center justify-end">
                    <UserMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;