import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IProduct {
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

const getUnitLabel = (unit: string) => {
    const units: Record<string, string> = {
        kg: "কেজি",
        liter: "লিটার",
        litre: "লিটার",
        dozen: "ডজন",
        piece: "পিস",
        pcs: "পিস",
        l: "লিটার",
    };

    return units[unit.toLowerCase()] ?? unit;
};

const Marquee = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const products: IProduct[] = await res.json();

    return (
        <div
            className="w-full overflow-hidden border-y border-gray-200 bg-[#FAFCFA] py-2.5"
            aria-label="আজকের পণ্যের দামের চলমান তালিকা"
        >
            <MarqueeText direction="right" duration={10}>
                {products.map((product) => (
                    <span
                        key={product.id}
                        className="mx-3 inline-flex shrink-0 items-center gap-2 whitespace-nowrap border-r border-gray-200 pr-5 sm:mx-5 sm:gap-3 sm:pr-7"
                    >
                        {/* Product Emoji */}
                        <span className="text-lg sm:text-xl" aria-hidden="true">
                            {product.image}
                        </span>

                        {/* Product Name */}
                        <span className="text-sm font-medium text-[#26352B] sm:text-base">
                            {product.nameBn}
                        </span>

                        {/* Today's Price */}
                        <span className="text-sm font-bold text-gray-900 sm:text-base">
                            {product.today.toLocaleString("bn-BD")} টাকা
                            <span className="ml-1 font-normal text-gray-600">
                                /{getUnitLabel(product.unit)}
                            </span>
                        </span>

                        {/* Price Change */}
                        <span
                            className={`text-xs font-semibold sm:text-sm ${
                                product.change.dir === "up"
                                    ? "text-red-600"
                                    : product.change.dir === "down"
                                      ? "text-green-600"
                                      : "text-gray-500"
                            }`}
                        >
                            {product.change.dir === "up"
                                ? "▲"
                                : product.change.dir === "down"
                                  ? "▼"
                                  : "—"}
                            {" "}
                            {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                        </span>
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;