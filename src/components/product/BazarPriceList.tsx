
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

const BazarPriceList = ({ markets, unit }: IProps) => {
    const unitLabel = getUnitLabel(unit);

    return (
        <section className="rounded-2xl border border-gray-200 bg-[#FAFCFA] p-5 sm:p-6">
            <div className="mb-5">
                <h2 className="text-xl font-bold text-[#26352B]">
                    বাজারভিত্তিক আজকের দাম
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    বিভিন্ন বাজারে প্রতি {unitLabel}-এর দামের তুলনা
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-162.5 border-collapse text-left">
                    <thead>
                        <tr className="border-b border-gray-200 bg-[#F0F5F0]">
                            <th className="px-4 py-4 text-sm font-semibold text-[#26352B]">
                                বাজারের নাম
                            </th>
                            <th className="px-4 py-4 text-sm font-semibold text-[#26352B]">
                                বিভাগ
                            </th>
                            <th className="px-4 py-4 text-sm font-semibold text-green-700">
                                সর্বনিম্ন দাম
                            </th>
                            <th className="px-4 py-4 text-sm font-semibold text-red-600">
                                সর্বোচ্চ দাম
                            </th>
                            <th className="px-4 py-4 text-sm font-semibold text-[#26352B]">
                                গড় দাম
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {markets.map((item, index) => {
                            const averagePrice = Math.round(
                                (item.min + item.max) / 2
                            );

                            return (
                                <tr
                                    key={`${item.market}-${item.division}-${index}`}
                                    className="border-b border-gray-100 transition hover:bg-[#F0F5F0]/60"
                                >
                                    <td className="px-4 py-4 text-sm font-medium text-[#26352B]">
                                        {item.market}
                                    </td>

                                    <td className="px-4 py-4 text-sm text-gray-600">
                                        {item.division}
                                    </td>

                                    <td className="px-4 py-4 text-sm font-semibold text-green-700">
                                        ৳{item.min.toLocaleString("bn-BD")}
                                    </td>

                                    <td className="px-4 py-4 text-sm font-semibold text-red-600">
                                        ৳{item.max.toLocaleString("bn-BD")}
                                    </td>

                                    <td className="px-4 py-4 text-sm font-semibold text-[#26352B]">
                                        ৳{averagePrice.toLocaleString("bn-BD")}
                                    </td>
                                </tr>
                            );
                        })}

                        {markets.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="px-4 py-10 text-center text-sm text-gray-500"
                                >
                                    <span className="mb-2 block text-3xl">
                                        🏪
                                    </span>
                                    কোনো বাজারের তথ্য পাওয়া যায়নি।
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {markets.length > 0 && (
                <p className="mt-4 text-sm text-gray-500">
                    মোট {markets.length.toLocaleString("bn-BD")}টি বাজারের তথ্য
                </p>
            )}
        </section>
    );
};

export default BazarPriceList;