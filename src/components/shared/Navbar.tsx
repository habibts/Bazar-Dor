import Link from "next/link";



interface INav {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Navbar = async () => {

    const res = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories",
        {
            next: {
                revalidate: 0,
            },
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const NavsData: INav[] = await res.json();

    return (
        <div className="flex gap-5 justify-center items-center border border-gray-200 bg-[#FAFCFA] py-5">
            {
                NavsData.map(nd => <Link key={nd.id} href={nd.slug}>
                    <div className="flex gap-1">
                        <span>{nd.icon}</span>
                        <span>{nd.nameBn}</span>
                    </div>
                </Link>)
            }

            
        </div>
    );
};

export default Navbar;