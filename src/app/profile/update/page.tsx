
"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/sign-in");
        }
    }, [session, isPending, router]);

    if (isPending || !session) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center bg-[#f0f5f0]">
                <p className="text-gray-500">লোড হচ্ছে...</p>
            </main>
        );
    }

    return (
        <UpdateNameForm
            key={session.user.id}
            initialName={session.user.name ?? ""}
            onCancel={() => router.push("/profile")}
            onSuccess={() => {
                router.push("/profile");
                router.refresh();
            }}
        />
    );
}

interface UpdateNameFormProps {
    initialName: string;
    onCancel: () => void;
    onSuccess: () => void;
}

function UpdateNameForm({
    initialName,
    onCancel,
    onSuccess,
}: UpdateNameFormProps) {
    const [name, setName] = useState(initialName);
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdateProfile = async (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const trimmedName = name.trim();

        if (!trimmedName) {
            toast.error("আপনার নাম লিখুন");
            return;
        }

        if (trimmedName === initialName) {
            toast("কোনো পরিবর্তন করা হয়নি");
            return;
        }

        setIsUpdating(true);

        try {
            const { error } = await authClient.updateUser({
                name: trimmedName,
            });

            if (error) {
                toast.error(
                    error.message || "প্রোফাইল আপডেট করা যায়নি"
                );
                return;
            }

            toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
            onSuccess();
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <main className="min-h-[70vh] bg-[#f0f5f0] px-4 py-12">
            <div className="mx-auto max-w-lg rounded-3xl border border-[#dce6dc] bg-[#fbfdfb] p-6 sm:p-9">
                <h1 className="text-2xl font-bold text-[#202b23] sm:text-3xl">
                    Update Information
                </h1>

                <p className="mt-3 text-gray-600">
                    আপনার প্রোফাইলের নাম পরিবর্তন করুন।
                </p>

                <form
                    onSubmit={handleUpdateProfile}
                    className="mt-8 space-y-6"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-3 block font-medium text-[#202b23]"
                        >
                            নাম
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="আপনার নাম লিখুন"
                            required
                            maxLength={100}
                            className="w-full rounded-xl border border-[#dce6dc] bg-white px-4 py-4 text-gray-800 outline-none transition focus:border-[#05893e] focus:ring-2 focus:ring-[#05893e]/20"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isUpdating}
                        className="w-full rounded-xl bg-[#078b40] px-6 py-4 font-bold text-white transition hover:bg-[#067535] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isUpdating
                            ? "আপডেট হচ্ছে..."
                            : "Update Information"}
                    </button>

                    <button
                        type="button"
                        onClick={onCancel}
                        className="w-full rounded-xl border border-gray-300 px-6 py-4 font-semibold text-[#26352b] transition hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </main>
    );
}