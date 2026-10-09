import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

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

export default async function Home() {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const products: IProduct[] = await res.json();

  const filteredProducts = products.filter(
    (product) => product.change.dir === "up"
  );

  return (
    <div>
      <Banner />

      <div className="mx-auto mt-10 max-w-7xl px-4">
        <h1 className="text-2xl font-bold text-[#26352B] sm:text-3xl">
          আজ দাম বেড়েছে
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
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
                    {product.unit === "kg" ? "প্রতি কেজি" : "প্রতি লিটার"}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between gap-3">
                <div>
                  <p className="text-base text-gray-700">আজকের দাম</p>

                  <p className="mt-1 text-2xl font-bold tracking-tight text-[#26352B] sm:text-3xl">
                    {product.today.toLocaleString("bn-BD")} টাকা
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-2 text-sm font-semibold text-green-600">
                  ▲ {Math.abs(product.change.pct)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
     
      <ProductCard />
    </div>
  );
}