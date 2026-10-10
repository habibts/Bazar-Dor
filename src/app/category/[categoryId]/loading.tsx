const Loading = () => {
return ( <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4"> <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-700"></div>

        <p className="text-sm font-medium text-gray-600">
            লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
        </p>
    </div>
);

};

export default Loading;
