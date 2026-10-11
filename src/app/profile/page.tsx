
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";

const ProfilePage = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const [isSigningOut, setIsSigningOut] = useState(false);

    // User logged in na thakle sign-in page e pathabe
    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/sign-in");
        }
    }, [isPending, session, router]);

    // Update information page e niye jabe
    const handleUpdateInformation = () => {
        router.push("/profile/update");
    };

    // Sign out
    const handleSignOut = async () => {
        setIsSigningOut(true);

        try {
            const { error } = await authClient.signOut();

            if (error) {
                toast.error("সাইন আউট করা যায়নি");
                return;
            }

            toast.success("সাইন আউট সফল হয়েছে!");
            router.replace("/");
            router.refresh();
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setIsSigningOut(false);
        }
    };

    if (isPending || !session) {
        return (
            <main className="min-h-[60vh] bg-[#f0f5f0] px-4 py-12">
                <div className="mx-auto max-w-7xl animate-pulse">
                    <div className="h-10 w-56 rounded bg-gray-200" />
                    <div className="mt-8 h-52 rounded-3xl bg-white" />
                </div>
            </main>
        );
    }

    const user = session.user;

    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Page heading */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-[#202b23] sm:text-4xl">
                        আমার প্রোফাইল
                    </h1>

                    <p className="mt-2 text-base text-gray-600 sm:text-xl">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
                    </p>
                </div>

                {/* Profile information card */}
                <section className="flex flex-col gap-6 rounded-3xl border border-[#dce6dc] bg-[#fbfdfb] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                    <div className="flex min-w-0 items-center gap-5">
                        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gray-100 sm:h-32 sm:w-32">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || "Profile"}
                                    fill
                                    sizes="(max-width: 640px) 96px, 128px"
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-4xl font-bold text-[#05893e]">
                                    {user.name?.charAt(0).toUpperCase() || "U"}
                                </span>
                            )}
                        </div>

                        <div className="min-w-0">
                            <h2 className="break-words text-xl font-semibold text-[#202b23] sm:text-3xl">
                                {user.name}
                            </h2>

                            <p className="mt-2 break-all text-base text-gray-600 sm:text-2xl">
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        disabled={isSigningOut}
                        className="shrink-0 self-start rounded-xl border-2 border-red-500 px-5 py-3 font-semibold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50 sm:self-center sm:px-7 sm:py-4 sm:text-xl"
                    >
                        {isSigningOut
                            ? "সাইন আউট হচ্ছে..."
                            : "↶ সাইন আউট"}
                    </button>
                </section>

                {/* Update information section */}
                <section className="mt-8 rounded-3xl border border-[#dce6dc] bg-[#fbfdfb] p-6 sm:p-9 lg:p-10">
                    <h2 className="text-2xl font-bold text-[#202b23]">
                        তথ্য আপডেট
                    </h2>

                    <p className="mt-3 text-base text-gray-600 sm:text-lg">
                        আপনার প্রোফাইলের নাম পরিবর্তন করতে নিচের বাটনে ক্লিক করুন।
                    </p>

                    <button
                        type="button"
                        onClick={handleUpdateInformation}
                        className="mt-7 w-full rounded-xl bg-[#078b40] px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-[#067535] sm:py-5 sm:text-xl"
                    >
                        Update Information
                    </button>
                </section>
            </div>
        </main>
    );
};

export default ProfilePage;