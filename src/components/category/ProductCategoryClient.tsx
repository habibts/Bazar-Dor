"use client";

import { useState } from "react";

interface IProductCategory {
    id: string | number;
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
        <div className="max-w-7xl mx-auto">
            {/* Category Title and Description */}
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center border rounded-2xl border-gray-200 bg-white p-3 mt-5">
                <div className="flex items-center gap-3 ">
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
                <div className="flex justify-end px-5 items-center gap-2 py-2 border rounded-2xl border-gray-200 bg-white">
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
                        className=" rounded-xl py-2 pr-0 text-sm text-[#26352B] outline-none"
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
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-5">
                {sortedProducts.map((product) => (
                    <div
                        key={product.id}
                        className="rounded-3xl border border-gray-200 bg-[#FAFCFA] p-6 transition hover:shadow-md"
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
                                        : "প্রতি লিটার"}
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
                                className={`rounded-full px-3 py-2 text-sm font-semibold ${
                                    product.change.dir === "up"
                                        ? "bg-green-50 text-green-600"
                                        : product.change.dir === "down"
                                          ? "bg-red-50 text-red-600"
                                          : "bg-gray-100 text-gray-500"
                                }`}
                            >
                                {product.change.dir === "up"
                                    ? "▲"
                                    : product.change.dir === "down"
                                      ? "▼"
                                      : "—"}{" "}
                                {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCategoryClient;