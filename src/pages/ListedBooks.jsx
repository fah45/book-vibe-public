import Books from "../components/Books";


const ListedBooks = () => {
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <div className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
                <div className="space-y-6">
                    <div className="flex flex-col items-start justify-center w-full h-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
                    <h1 className="text-2xl font-bold md:tracking-tight md:text-2xl text-black">Books</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400 dark:border-gray-600">
                    <a  className="px-3 py-1 rounded-sm hover:underline bg-black text-gray-900 dark:text-gray-50">Read Books</a>
                    <a  className="px-3 py-1 rounded-sm hover:underline bg-black text-gray-900 dark:text-gray-50">Wishlist Books</a>
                    
                </div>

                
            </div>
        </div>
    );
};

export default ListedBooks;