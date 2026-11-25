const Footer = () => {
    return (
        <footer className="mt-10 border-t border-gray-200 bg-[#FAFCFA] py-8 sm:py-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h3 className="text-lg font-bold text-[#26352B]">
                            বাজার দর
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">
                            প্রয়োজনীয় পণ্যের দাম এক নজরে দেখুন।
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#26352B]">
                            দ্রুত লিংক
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-500">
                            <li>হোম</li>
                            <li>সব পণ্য</li>
                            <li>প্রোফাইল</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#26352B]">
                            নোট
                        </h4>
                        <p className="mt-2 text-xs leading-6 text-gray-500">
                            সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
                            পরিবর্তিত হয়।
                        </p>
                    </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
                    © 2026 বাজার দর। সর্বস্বত্ব সংরক্ষিত।
                </div>
            </div>
        </footer>
    );
};

export default Footer;