import ProductCategoryClient from "@/components/category/ProductCategoryClient";

interface IProps {
    params: Promise<{
        categoryId: string;
    }>;
}

interface IProductCategory {
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

interface ICategory {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const ProductCategory = async ({ params }: IProps) => {
    const { categoryId } = await params;

    const productsRes = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    const categoriesRes = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories"
    );

    if (!productsRes.ok || !categoriesRes.ok) {
        throw new Error("Failed to fetch category data");
    }

    const productCategory: IProductCategory[] =
        await productsRes.json();

    const categories: ICategory[] =
        await categoriesRes.json();

    const category = categories.find(
        (item) => item.slug === categoryId
    );

    return (
        <ProductCategoryClient
            category={category}
            productCategory={productCategory}
        />
    );
};

export default ProductCategory;