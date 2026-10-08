import { Button } from "@heroui/react";
import Image from "next/image";

const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
});

const Header = () => {
    return (
        <div>

           <div className=" grid grid-cols-2 px-4 py-4 items-center max-w-7xl mx-auto">
             {/* Left Side */}
            <div className="flex gap-2 items-center">
                <Image
                    className="h-12 w-12 bg-[#05893E] rounded-2xl"
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
            <div className="flex gap-3 justify-end items-center font-bold">
                <button>সাইন ইন</button>

                <Button className="bg-[#05893E] rounded px-4 text-white font-bold">
                    সাইন আপ
                </Button>
            </div>
           </div>

        </div>
    );
};

export default Header;