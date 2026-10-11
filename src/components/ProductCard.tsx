
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

const getUnitLabel = (unit: string) => {
    const units: Record<string, string> = {
        kg: "প্রতি কেজি",
        liter: "প্রতি লিটার",
        litre: "প্রতি লিটার",
        l: "প্রতি লিটার",
        dozen: "প্রতি ডজন",
        piece: "প্রতি পিস",
        pcs: "প্রতি পিস",
    };

    return units[unit.toLowerCase()] ?? `প্রতি ${unit}`;
};

const ProductCard = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const products: IProduct[] = await res.json();

    return (
        <section
            id="সব-পণ্য"
            className="mx-auto mb-6 mt-10 w-full max-w-7xl scroll-mt-60 px-3 sm:px-4"
        >
            <div>
                <h2 className="text-2xl font-bold text-[#26352B] sm:text-3xl">
                    সব পণ্য
                </h2>

                <p className="mt-2 text-sm text-gray-500 sm:text-base">
                    মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-3">
                {products.map((product) => {
                    const isUp = product.change.dir === "up";
                    const isDown = product.change.dir === "down";

                    return (
                        <Link
                            key={product.id}
                            href={`/product/${product.slug}`}
                            className="group block min-w-0 rounded-3xl border border-gray-200 bg-[#FAFCFA] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-[#F0F5F0] text-3xl transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 sm:text-4xl">
                                    {product.image}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="wrap-break-word text-lg font-bold text-[#26352B] sm:text-xl">
                                        {product.nameBn}
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                                        {getUnitLabel(product.unit)}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-gray-100 pt-4">
                                <div className="min-w-0">
                                    <p className="text-sm text-gray-600">
                                        আজকের দাম
                                    </p>

                                    <p className="mt-1 wrap-break-word text-xl font-bold tracking-tight text-[#26352B] sm:text-2xl">
                                        {product.today.toLocaleString("bn-BD")} টাকা
                                    </p>
                                </div>

                                <span
                                    className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${
                                        isUp
                                            ? "bg-red-50 text-red-600"
                                            : isDown
                                              ? "bg-green-50 text-green-600"
                                              : "bg-gray-100 text-gray-500"
                                    }`}
                                >
                                    {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                                    {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {products.length === 0 && (
                <p className="mt-6 text-gray-500">
                    বর্তমানে কোনো পণ্য পাওয়া যায়নি।
                </p>
            )}
        </section>
    );
};

export default ProductCard;