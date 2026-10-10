"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignIn = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const { error } = await authClient.signIn.email({
                email,
                password,
            });

            if (error) {
                toast.error(
                    error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়"
                );
                return;
            }

            toast.success("সফলভাবে সাইন ইন হয়েছে!");
            router.push("/");
            router.refresh();
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    const handleSocialSignIn = async (
        provider: "google" | "github"
    ) => {
        try {
            const { error } = await authClient.signIn.social({
                provider,
                callbackURL: "/",
            });

            if (error) {
                toast.error(
                    error.message || "Social sign in ব্যর্থ হয়েছে"
                );
            }
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        }
    };

    return (
        <main className="min-h-screen bg-[#F0F5F0] px-4 py-10 sm:py-12">
            <div className="mx-auto max-w-3xl">
                {/* Heading */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-extrabold text-[#26352B] sm:text-4xl">
                        সাইন ইন
                    </h1>

                    <p className="mt-3 text-base text-gray-500 sm:text-xl">
                        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                    </p>
                </div>

                {/* Sign In Form */}
                <div className="rounded-3xl border border-[#DFE8DF] bg-[#FAFCFA] p-5 sm:p-10">
                    <form
                        onSubmit={handleSignIn}
                        className="space-y-7"
                    >
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-lg font-medium text-[#26352B]"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                autoComplete="email"
                                required
                                className="w-full rounded-xl border border-[#DFE8DF] bg-transparent px-5 py-4 text-base text-[#26352B] outline-none transition placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-100 sm:text-lg"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-lg font-medium text-[#26352B]"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="current-password"
                                required
                                className="w-full rounded-xl border border-[#DFE8DF] bg-transparent px-5 py-4 text-base text-[#26352B] outline-none transition placeholder:text-gray-500 focus:border-green-600 focus:ring-2 focus:ring-green-100 sm:text-lg"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-green-700 px-5 py-4 text-lg font-bold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-7 flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-200" />

                        <span className="text-base text-gray-600">
                            অথবা
                        </span>

                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    {/* Social Sign In */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <button
                            type="button"
                            onClick={() =>
                                handleSocialSignIn("google")
                            }
                            className="flex items-center justify-center gap-2 rounded-xl border border-[#DFE8DF] px-3 py-4 font-semibold text-[#26352B] transition hover:bg-[#F0F5F0]"
                        >
                            <svg
                                viewBox="0 0 48 48"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path
                                    fill="#4285F4"
                                    d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-2 4.6-4.2 6v5h6.8c4-3.7 6-8.7 6-14.7Z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.8-5c-1.8 1.2-4 1.9-6.7 1.9-5.2 0-9.6-3.5-11.2-8.2H5.8v5.2C9.2 39.7 16 44 24 44Z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M12.8 27.9a12 12 0 0 1 0-7.8v-5.2H5.8a20 20 0 0 0 0 18.2l7-5.2Z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M24 11.9c3 0 5.7 1 7.8 3.1l5.9-5.9C34.1 5.8 29.5 4 24 4 16 4 9.2 8.3 5.8 14.9l7 5.2c1.6-4.7 6-8.2 11.2-8.2Z"
                                />
                            </svg>

                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                handleSocialSignIn("github")
                            }
                            className="flex items-center justify-center gap-2 rounded-xl border border-[#DFE8DF] px-3 py-4 font-semibold text-[#26352B] transition hover:bg-[#F0F5F0]"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 fill-current"
                                aria-hidden="true"
                            >
                                <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6.1 0-1.4.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.4 0c2.4-1.6 3.5-1.3 3.5-1.3.7 1.7.3 3 .1 3.3.8.9 1.2 2 1.2 3.4 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1 .8 2v3.8c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
                            </svg>

                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-8 text-center text-base text-[#26352B] sm:text-lg">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/sign-up"
                            className="font-medium text-green-700 hover:text-green-800 hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </div>

                {/* Home Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="text-base text-gray-500 transition hover:text-green-700"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default SignInPage;