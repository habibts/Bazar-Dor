
interface IProps {
    nameBn: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}

const getUnitLabel = (unit: string) => {
    const units: Record<string, string> = {
        kg: "কেজি",
        liter: "লিটার",
        litre: "লিটার",
        l: "লিটার",
        dozen: "ডজন",
        piece: "পিস",
        pcs: "পিস",
    };

    return units[unit.toLowerCase()] ?? unit;
};

const ProductSummary = ({
    nameBn,
    categoryNameBn,
    categoryIcon,
    unit,
    today,
    change,
}: IProps) => {
    const unitLabel = getUnitLabel(unit);

    return (
        <section className="rounded-2xl border border-gray-200 bg-[#FAFCFA] p-5 sm:p-7">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div className="flex items-start gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] text-4xl">
                        {categoryIcon || "🛒"}
                    </div>

                    <div>
                        <h1 className="text-xl font-bold text-[#26352B] sm:text-2xl">
                            {nameBn}
                        </h1>

                        <p className="mt-2 text-sm text-gray-600">
                            বিভিন্ন বাজারে {nameBn}-এর আজকের দামের
                            তুলনা ও পরিবর্তনের তথ্য।
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                {categoryNameBn}
                            </span>

                            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                                প্রতি {unitLabel}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-gray-600">
                            গতকালের তুলনায়{" "}
                            {change.dir === "up"
                                ? "আজ দাম বেড়েছে"
                                : change.dir === "down"
                                    ? "আজ দাম কমেছে"
                                    : "আজ দাম অপরিবর্তিত"}
                        </p>
                    </div>
                </div>

                <div className="min-w-44 rounded-2xl bg-[#F0F5F0] p-5 text-center">
                    <p className="text-sm text-gray-600">
                        আজকের দাম
                    </p>

                    <p className="mt-1 text-3xl font-bold text-[#26352B]">
                        ৳{today.toLocaleString("bn-BD")}
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                        প্রতি {unitLabel}
                    </p>

                    <p
                        className={`mt-2 text-sm font-bold ${change.dir === "up"
                                ? "text-red-600"
                                : change.dir === "down"
                                    ? "text-green-600"
                                    : "text-gray-500"
                            }`}
                    >
                        {change.dir === "up"
                            ? "▲"
                            : change.dir === "down"
                                ? "▼"
                                : "—"}{" "}
                        {Math.abs(change.pct).toLocaleString("bn-BD")}%
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductSummary;