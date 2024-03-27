/* eslint-disable react/prop-types */

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <Link to={`/bookDetails/${bookId}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50 w-[360px] gap-4 p-6 border-2">
            <div className="flex justify-center items-center mt-4">
                <img role="presentation" className="rounded h-44 bg-gray-500 dark:bg-gray-500 shadow-2xl w-[130px]" src={image} />
            </div>

            <div className="p-6 space-y-2">
                <div className="flex items-center">
                    {
                        tags.map(tag => <p key={tag} className=" bg-[#23BE0A0D] mr-2 p-2 rounded-lg">{tag}</p>)
                    }
                </div>
                <div>
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{bookName}</h3>
                    <span className="text-xs text-gray-400 dark:text-gray-600">{author}</span>
                </div> <hr className="mb-4" />
                <div className="flex justify-between">
                    <p>{category}</p>
                    <p className="flex items-center"><CiStar /> <span> {rating}</span></p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;