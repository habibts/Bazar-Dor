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

const ProductSummary = ({
    nameBn,
    categoryNameBn,
    categoryIcon,
    unit,
    image,
    today,
    change,
}: IProps) => {
    return (
        <div className="flex flex-col justify-between gap-5 rounded-2xl border border-gray-200 bg-[#FAFCFA] p-5 sm:flex-row sm:items-center sm:p-6">
            {/* Product Info */}
            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-4xl">
                    {image}
                </div>

                <div>
                    <h1 className="text-xl font-bold text-[#26352B] sm:text-2xl">
                        {nameBn}
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        প্রতি {unit === "kg" ? "কেজি" : "লিটার"} · {categoryNameBn}
                    </p>

                    <p className="mt-2 text-sm text-gray-700">
                        {change.dir === "up"
                            ? "গতকালের তুলনায় আজ দাম বেড়েছে"
                            : change.dir === "down"
                              ? "গতকালের তুলনায় আজ দাম কমেছে"
                              : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
                        {" · "}
                        {Math.abs(change.pct).toLocaleString("bn-BD")}%
                    </p>
                </div>
            </div>

            {/* Today's Price */}
            <div className="min-w-28 rounded-2xl bg-[#F0F5F0] px-6 py-4 text-center">
                <p className="text-sm text-gray-500">
                    আজকের দাম
                </p>

                <h2 className="mt-1 text-3xl font-bold text-[#26352B]">
                    {today.toLocaleString("bn-BD")}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    টাকা / {unit === "kg" ? "কেজি" : "লিটার"}
                </p>

                <p
                    className={`mt-1 text-sm font-bold ${
                        change.dir === "up"
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
    );
};

export default ProductSummary;