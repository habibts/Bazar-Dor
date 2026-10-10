"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";

const UserMenu = () => {
    const { data: session, isPending } = authClient.useSession();
    const [isOpen, setIsOpen] = useState(false);

    if (isPending) return null;

    if (!session) {
        return (
            <div className="flex items-center gap-4">
                <Link
                    href="/sign-in"
                    className="font-medium text-gray-700 hover:text-[#05893E]"
                >
                    সাইন ইন
                </Link>

                <Link href="/sign-up">
                    <Button className="rounded bg-[#05893E] px-4 font-bold text-white">
                        সাইন আপ
                    </Button>
                </Link>
            </div>
        );
    }

    const user = session.user;

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-full p-1 pr-3 transition hover:bg-gray-100"
            >
                <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#05893E] bg-[#05893E] text-lg font-bold text-white">
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={user.name || "User"}
                            fill
                            sizes="44px"
                            className="object-cover"
                        />
                    ) : (
                        user.name?.charAt(0).toUpperCase() || "U"
                    )}
                </span>

                <span className="max-w-32 truncate text-sm font-semibold text-gray-800">
                    {user.name}
                </span>

                <span className="text-xs text-gray-500">
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-50 mt-2 w-60 rounded-xl border border-gray-200 bg-white p-3 text-gray-800 shadow-lg">
                    <div className="border-b border-gray-100 px-2 pb-3">
                        <p className="truncate font-semibold">
                            {user.name}
                        </p>

                        <p className="truncate text-sm text-gray-500">
                            {user.email}
                        </p>
                    </div>

                    <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 block rounded-lg px-3 py-2 hover:bg-gray-100"
                    >
                        প্রোফাইল
                    </Link>

                    <button
                        type="button"
                        onClick={async () => {
                            const { error } = await authClient.signOut();

                            if (error) {
                                toast.error("লগআউট করা যায়নি");
                                return;
                            }

                            setIsOpen(false);
                            toast.success("লগআউট সফল হয়েছে!");
                        }}
                        className="mt-1 w-full rounded-lg px-3 py-2 text-left text-red-600 hover:bg-red-50"
                    >
                        লগআউট
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;