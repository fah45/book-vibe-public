


const BookCard = ({ book}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book
    return (
        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50">
            <div className="flex justify-center items-center mt-4">
            <img role="presentation" className="object-cover  rounded h-44 bg-gray-500 dark:bg-gray-500" src={image} />F
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
                <span className="text-xs text-gray-400 dark:text-gray-600">{author}</span>
                <p>{category}</p>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default BookCard;