import Image from "next/image";
import UserMenu from "./UserMenu";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <header className="w-full">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Left Side */}
                <div className="flex items-center gap-2">
                    <Image
                        className="h-12 w-12 rounded-2xl bg-[#05893E]"
                        height={50}
                        width={50}
                        src="/logo-icon.png"
                        alt="Logo"
                    />

                    <div>
                        <h1 className="text-2xl font-bold">
                            বাজার দর
                        </h1>

                        <span>{date}</span>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-end gap-3">
                    <UserMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;