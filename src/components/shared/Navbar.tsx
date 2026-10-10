import Link from "next/link";



interface INav {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const Navbar = async () => {

    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories");


    const NavsData: INav[] = await res.json();

    return (
        <div className="flex gap-5 justify-center items-center border border-gray-200 bg-[#FAFCFA] py-5">
            {
                NavsData.map(nd => <Link key={nd.id} href={`/category/${nd.slug}`}>
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