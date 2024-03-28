import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../utils";
import { saveWishlist } from "../utils/parts";



const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({})
    const [loading, setLoading] = useState(true)
    const books = useLoaderData()
    const { bookId } = useParams()

    const handleApplyBook = () => {
        // console.log(book)
        saveBook(singleBook)
    }

    const handleApplyWishlist = () => {
        console.log(singleBook)
        saveWishlist(singleBook)

    }


    useEffect(() => {
        if (books && bookId) {
            setLoading(true)
            const bookObj = books.find(book => book.bookId === +bookId)
            // console.log(bookObj)
            setSingleBook(bookObj)
            setLoading(false)
        }
    }, [books, bookId])


    // console.log(singleBook)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook

    if (loading) {
        return
    }
    return (
        <div className="p-8">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{bookName}</h1>
                        <p className="py-6">Review: {review}</p>
                        <p className="py-6">By: {author}</p>
                        <p className="py-6">{category}</p>
                        <h1 className="font-bold flex items-center gap-2">Tags:
                            {
                                tags.map(tag => <p key={tag} className=" bg-[#23BE0A0D] mr-2 p-2 rounded-lg">{tag}</p>)
                            }
                            </h1>
                        <div className="">
                            <ul className="font-bold">
                                <li>Number of Pages: {totalPages}</li>
                                <li>Publisher: {publisher}</li>
                                <li>Year of Publishing: {yearOfPublishing}</li>
                                <li>rating: {rating}</li>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => handleApplyBook()} className="btn">Read</button>
                            <button onClick={() => handleApplyWishlist()} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;