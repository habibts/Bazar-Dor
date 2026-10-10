import ProductSummary from "@/components/product/ProductSummary";
import PriceSummary from "@/components/product/PriceSummary";
import BazarPriceList from "@/components/product/BazarPriceList";
import { notFound } from "next/navigation";

interface IMarket {
    market: string;
    division: string;
    min: number;
    max: number;
}

interface IProduct {
    id: string | number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
    markets: IMarket[];
}

interface IProps {
    params: Promise<{
        slug: string;
    }>;
}

const ProductDetailsPage = async ({ params }: IProps) => {
    const { slug } = await params;

    const res = await fetch(
        "https://api.api-store.workers.dev/api/bazardor/products"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    const products: IProduct[] = await res.json();

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-7xl space-y-6 px-4 py-8">
            <ProductSummary
                nameBn={product.nameBn}
                categoryNameBn={product.categoryNameBn}
                categoryIcon={product.categoryIcon}
                unit={product.unit}
                image={product.image}
                today={product.today}
                change={product.change}
            />

            <PriceSummary
                markets={product.markets}
            />

            <BazarPriceList
                markets={product.markets}
            />
        </main>
    );
};

export default ProductDetailsPage;