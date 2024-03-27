import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBook } from "../utils";



const BookDetails = () => {
    const [singleBook, setSingleBook] = useState({})
    const books = useLoaderData()
    const { bookId } = useParams()

    useEffect(() => {
        const book = books.find(book => book.bookId === +bookId)
        console.log(book)
        setSingleBook(book)
    }, [books, bookId])

    const handleApplyBook = books =>{
        // console.log(book)
        saveBook(books)
    }

    console.log(singleBook)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook

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
                        <h1 className="font-bold">Tags: {tags}</h1>
                        <div className="">
                            <ul className="font-bold">
                                <li>Number of Pages: {totalPages}</li>
                                <li>Publisher: {publisher}</li>
                                <li>Year of Publishing: {yearOfPublishing}</li>
                                <li>rating: {rating}</li>
                            </ul>
                        </div>
                        <div className="flex gap-4">
                        <button onClick={()=>handleApplyBook(books)} className="btn">Read</button>
                        <button onClick={()=>handleApplyBook(books)} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetails;