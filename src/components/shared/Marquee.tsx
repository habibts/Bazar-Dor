import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

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

const Marquee = async () => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/products",
        {
            next: {
                revalidate: 0,
            },
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const products: IProduct[] = await res.json();



    return (
        <div className="border-y border-gray-200 bg-[#FAFCFA] py-2">
            <MarqueeText direction="right" duration={7}>
                {products.map((product) => (
                    <span
                        key={product.id}
                        className="mx-4 inline-flex items-center gap-3 whitespace-nowrap border-r border-gray-200 pr-6 sm:mx-6 sm:gap-4 sm:pr-8"
                    >
                        <span className="text-xl">
                            {product.image}
                        </span>

                        <span className="text-sm font-medium text-gray-700 sm:text-base">
                            {product.nameBn}
                        </span>

                        <span className="text-sm font-bold text-gray-900 sm:text-base">
                            {product.today} টাকা
                            <span className="ml-1">
                                /{product.unit === "kg" ? "কেজি" : "লিটার"}
                            </span>
                        </span>

                        <span
                            className={`text-xs font-semibold sm:text-sm ${product.change.dir === "up"
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
                                    : "—"}{" "}
                            {Math.abs(product.change.pct)}%
                        </span>
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
};

export default Marquee;