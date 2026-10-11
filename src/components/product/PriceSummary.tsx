
interface IMarket {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface IProps {
    markets: IMarket[];
    unit: string;
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

const PriceSummary = ({ markets, unit }: IProps) => {
    const hasMarkets = markets.length > 0;

    const minPrice = hasMarkets
        ? Math.min(...markets.map((item) => item.min))
        : 0;

    const maxPrice = hasMarkets
        ? Math.max(...markets.map((item) => item.max))
        : 0;

    const averagePrice = hasMarkets
        ? Math.round(
            markets.reduce(
                (total, item) => total + (item.min + item.max) / 2,
                0
            ) / markets.length
        )
        : 0;

    const minMarket = hasMarkets
        ? markets.find((item) => item.min === minPrice)?.market
        : undefined;

    const maxMarket = hasMarkets
        ? markets.find((item) => item.max === maxPrice)?.market
        : undefined;

    const unitLabel = getUnitLabel(unit);

    const cards = [
        {
            title: "সর্বনিম্ন দাম",
            price: minPrice,
            description: minMarket
                ? `সবচেয়ে কম দাম: ${minMarket}`
                : "বাজারের তথ্য নেই",
            color: "text-green-700",
            icon: "↓",
        },
        {
            title: "সর্বোচ্চ দাম",
            price: maxPrice,
            description: maxMarket
                ? `সবচেয়ে বেশি দাম: ${maxMarket}`
                : "বাজারের তথ্য নেই",
            color: "text-red-600",
            icon: "↑",
        },
        {
            title: "গড় দাম",
            price: averagePrice,
            description: "সব বাজারের দামের আনুমানিক গড়",
            color: "text-[#05893E]",
            icon: "≈",
        },
    ];

    return (
        <section className="rounded-2xl border border-gray-200 bg-[#FAFCFA] p-5 sm:p-6">
            <div className="mb-5">
                <h2 className="text-xl font-bold text-[#26352B]">
                    দামের সারসংক্ষেপ
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    প্রতি {unitLabel} অনুযায়ী বিভিন্ন বাজারের দাম
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                    >
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">
                                {card.title}
                            </p>

                            <span className={`text-xl font-bold ${card.color}`}>
                                {card.icon}
                            </span>
                        </div>

                        <p className={`mt-3 text-2xl font-bold ${card.color}`}>
                            ৳{card.price.toLocaleString("bn-BD")}
                        </p>

                        <p className="mt-2 text-sm text-gray-500">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>

            {!hasMarkets && (
                <p className="mt-4 text-sm text-gray-500">
                    বর্তমানে কোনো বাজারের দামের তথ্য পাওয়া যায়নি।
                </p>
            )}
        </section>
    );
};

export default PriceSummary;