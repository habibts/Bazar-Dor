"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INav {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

interface IProps {
    navsData: INav[];
}

const NavLinks = ({ navsData }: IProps) => {
    const pathname = usePathname();

    return (
        <nav className="w-full border-b border-gray-200 bg-[#FAFCFA]">
            <div className="pl-15">
                <div className="mx-auto flex w-full max-w-7xl items-center pl-6 gap-2 overflow-x-auto px-3 py-3 sm:gap-3 sm:px-4 sm:py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {/* Home Link */}
                <Link
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                    className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition sm:text-base ${
                        pathname === "/"
                            ? "bg-[#05893E] text-white"
                            : "text-[#26352B] hover:bg-[#F0F5F0] hover:text-[#05893E]"
                    }`}
                >
                    <span>🏠</span>
                    <span>হোম</span>
                </Link>

                {/* Category Links */}
                {navsData.map((nd) => {
                    const categoryPath = `/category/${nd.slug}`;
                    const isActive =
                        pathname === categoryPath ||
                        pathname.startsWith(`${categoryPath}/`);

                    return (
                        <Link
                            key={nd.id}
                            href={categoryPath}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition sm:text-base ${
                                isActive
                                    ? "bg-[#05893E] text-white"
                                    : "text-[#26352B] hover:bg-[#F0F5F0] hover:text-[#05893E]"
                            }`}
                        >
                            <span>{nd.icon}</span>
                            <span>{nd.nameBn}</span>
                        </Link>
                    );
                })}
            </div>
            </div>
        </nav>
    );
};

export default NavLinks;