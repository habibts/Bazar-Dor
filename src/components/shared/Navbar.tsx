import NavbarLinks from "./NavLinks";

interface INav {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Navbar = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/categories",
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!res.ok) {
        throw new Error("ক্যাটাগরির তথ্য লোড করা যায়নি");
    }

    const NavsData: INav[] = await res.json();

    return <NavbarLinks navsData={NavsData} />;
};

export default Navbar;