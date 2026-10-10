
interface IMarket {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface IProps {
    markets: IMarket[];
}

const PriceSummary = ({ markets }: IProps) => {
    const minPrice =
        markets.length > 0
            ? Math.min(...markets.map((item) => item.min))
            : 0;

    const maxPrice =
        markets.length > 0
            ? Math.max(...markets.map((item) => item.max))
            : 0;

    const averagePrice =
        markets.length > 0
            ? Math.round(
                  markets.reduce(
                      (total, item) =>
                          total + (item.min + item.max) / 2,
                      0
                  ) / markets.length
              )
            : 0;

    return (
        <div className="rounded-2xl border border-gray-200 bg-[#FAFCFA] p-5 sm:p-6">
            <h2 className="mb-5 text-xl font-bold text-[#26352B]">
                দামের সারসংক্ষেপ
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Minimum Price */}
                <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-600">
                        সর্বনিম্ন দাম
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-green-600">
                        {minPrice.toLocaleString("bn-BD")} টাকা
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                        সবচেয়ে কম দামের বাজার
                    </p>
                </div>

                {/* Maximum Price */}
                <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-600">
                        সর্বোচ্চ দাম
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-red-600">
                        {maxPrice.toLocaleString("bn-BD")} টাকা
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                        সবচেয়ে বেশি দামের বাজার
                    </p>
                </div>

                {/* Average Price */}
                <div className="rounded-2xl border border-gray-200 p-5">
                    <p className="text-sm text-gray-600">
                        গড় দাম
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-green-600">
                        {averagePrice.toLocaleString("bn-BD")} টাকা
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                        প্রতি কেজি-র হিসাবে
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PriceSummary;

