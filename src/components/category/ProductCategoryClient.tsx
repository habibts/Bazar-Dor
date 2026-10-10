"use client";

import { useState } from "react";
import Link from "next/link";

interface IProductCategory {
    id: string | number;
    slug: string;
    nameBn: string;
    image: string;
    unit: string;
    today: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}

interface ICategory {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

interface IProps {
    category: ICategory | undefined;
    productCategory: IProductCategory[];
}

const ProductCategoryClient = ({
    category,
    productCategory,
}: IProps) => {
    const [sort, setSort] = useState("default");

    const sortedProducts = [...productCategory].sort((a, b) => {
        if (sort === "low-to-high") {
            return a.today - b.today;
        }

        if (sort === "high-to-low") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <div className="mx-auto max-w-7xl px-4">
            {/* Category Title and Description */}
            <div className="mt-5 mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                    <span className="text-4xl">
                        {category?.icon ?? "🛒"}
                    </span>

                    <div>
                        <h1 className="text-2xl font-bold text-[#26352B] sm:text-3xl">
                            {category?.nameBn ?? "পণ্যের বাজারদর"}
                        </h1>

                        <p className="mt-1 text-sm text-gray-600">
                            {productCategory.length.toLocaleString("bn-BD")}
                            টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>
            </div>

            {/* Sort Control */}
            <div className="flex items-center justify-end gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-2">
                <label
                    htmlFor="sort"
                    className="shrink-0 text-sm font-medium text-gray-600"
                >
                    সাজান:
                </label>

                <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="rounded-xl py-2 pr-0 text-sm text-[#26352B] outline-none"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low-to-high">
                        দাম: কম থেকে বেশি
                    </option>
                    <option value="high-to-low">
                        দাম: বেশি থেকে কম
                    </option>
                </select>
            </div>

            {/* Product Cards */}
            {sortedProducts.length > 0 ? (
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedProducts.map((product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            aria-label={`${product.nameBn} পণ্যের বিস্তারিত দেখুন`}
                            className="block rounded-3xl border border-gray-200 bg-[#FAFCFA] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#05893E] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893E]"
                        >
                            <div className="flex items-center gap-5">
                                <div className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-[22px] bg-[#F0F5F0] text-4xl">
                                    {product.image}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="text-xl font-bold text-[#26352B] sm:text-2xl">
                                        {product.nameBn}
                                    </h3>

                                    <p className="mt-1 text-base text-gray-600 sm:text-lg">
                                        {product.unit === "kg"
                                            ? "প্রতি কেজি"
                                            : product.unit === "liter"
                                              ? "প্রতি লিটার"
                                              : `প্রতি ${product.unit}`}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 flex items-end justify-between gap-3">
                                <div>
                                    <p className="text-base text-gray-700">
                                        আজকের দাম
                                    </p>

                                    <p className="mt-1 text-2xl font-bold tracking-tight text-[#26352B] sm:text-3xl">
                                        {product.today.toLocaleString("bn-BD")} টাকা
                                    </p>
                                </div>

                                <span
                                    className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${
                                        product.change.dir === "up"
                                            ? "bg-red-50 text-red-600"
                                            : product.change.dir === "down"
                                              ? "bg-green-50 text-green-600"
                                              : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    {product.change.dir === "up"
                                        ? "▲"
                                        : product.change.dir === "down"
                                          ? "▼"
                                          : "—"}{" "}
                                    {Math.abs(
                                        product.change.pct,
                                    ).toLocaleString("bn-BD")}
                                    %
                                </span>
                            </div>

                            <p className="mt-5 border-t border-gray-200 pt-4 text-sm font-semibold text-[#05893E]">
                                বিস্তারিত দেখতে কার্ডে ক্লিক করুন
                                <span className="ml-2" aria-hidden="true">
                                    →
                                </span>
                            </p>
                        </Link>
                    ))}
                </div>
            ) : (
                /* Empty State */
                <div className="mt-6 rounded-2xl border border-gray-200 bg-white px-5 py-12 text-center">
                    <p className="text-4xl">🛒</p>

                    <h2 className="mt-4 text-xl font-bold text-[#26352B]">
                        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি
                    </h2>

                    <p className="mt-2 text-sm text-gray-600">
                        অন্য ক্যাটাগরি থেকে পণ্য খুঁজে দেখতে পারেন।
                    </p>

                    <Link
                        href="/"
                        className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#05893E] px-5 py-3 font-semibold text-white transition hover:bg-[#046F32]"
                    >
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ProductCategoryClient;