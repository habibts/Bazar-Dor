const Footer = () => {
    return (
        <footer className="mt-10 border-t border-gray-200 bg-[#FAFCFA] py-6 sm:py-8">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                    <span className="text-sm font-medium text-[#26352B] sm:text-base">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </span>

                    <span className="text-xs leading-6 text-gray-500 sm:max-w-md sm:text-right sm:text-sm">
                        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;