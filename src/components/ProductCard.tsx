import React from "react";
import Link from "next/link";

interface IProduct {
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

const ProductCard = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const products: IProduct[] = await res.json();

    return (
        <div className="mx-auto mt-10 max-w-7xl px-4">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-[#26352B] sm:text-3xl">
                    সব পণ্য
                </h1>

                <span className="mt-2 block text-sm text-gray-500">
                    মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        className="block rounded-3xl border border-gray-200 bg-[#FAFCFA] p-6 transition hover:shadow-md"
                    >
                        <div className="flex items-center gap-5">
                            <div className="flex h-21 w-21 shrink-0 items-center justify-center rounded-[22px] bg-[#F0F5F0] text-4xl">
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;