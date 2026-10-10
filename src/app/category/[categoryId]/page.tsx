import { notFound } from "next/navigation";
import ProductCategoryClient from "@/components/category/ProductCategoryClient";

interface IProps {
    params: Promise<{
        categoryId: string;
    }>;
}

interface IProductCategory {
    id: string | number;
    slug: string;
    nameBn: string;
    image: string;
    unit: string;
    today: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}

interface ICategory {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const ProductCategory = async ({ params }: IProps) => {
    const { categoryId } = await params;

    const [productsRes, categoriesRes] = await Promise.all([
        fetch(
            `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(categoryId)}`,
            { cache: "no-store" }
        ),
        fetch(
            "https://openapi.programming-hero.com/api/bazardor/categories",
            { cache: "no-store" }
        ),
    ]);

    if (!productsRes.ok || !categoriesRes.ok) {
        throw new Error("ক্যাটাগরির তথ্য লোড করা যায়নি");
    }

    const productCategory: IProductCategory[] =
        await productsRes.json();

    const categories: ICategory[] = await categoriesRes.json();

    const category = categories.find(
        (item) => item.slug === categoryId
    );

    if (!category) {
        notFound();
    }

    return (
        <ProductCategoryClient
            category={category}
            productCategory={productCategory}
        />
    );
};

export default ProductCategory;