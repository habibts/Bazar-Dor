
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import ProductSummary from "@/components/product/ProductSummary";
import PriceSummary from "@/components/product/PriceSummary";
import BazarPriceList from "@/components/product/BazarPriceList";

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
    params: Promise<{ slug: string }>;
}

const ProductDetailsPage = async ({ params }: IProps) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/sign-in");
    }

    const { slug } = await params;

    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const products: IProduct[] = await res.json();

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6 sm:px-4 sm:py-8">
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
                unit={product.unit}
            />

            <BazarPriceList
                markets={product.markets}
                unit={product.unit}
            />
        </main>
    );
};

export default ProductDetailsPage;