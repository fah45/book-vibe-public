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
                        <p>By: {author}</p>
                        <p>{category}</p>
                        <h1>Tags: {tags}</h1>
                        <div>
                            <h1>Number of Pages: {totalPages}</h1>
                            <h1>Publisher:: {publisher}</h1>
                            <h1>Year of Publishing: {yearOfPublishing}</h1>
                            <h1>rating: {rating}</h1>
                        </div>
                        <div className="flex gap-4">
                        <button onClick={()=>handleApplyBook(books)} className="btn btn-primary">Read</button>
                        <button onClick={()=>handleApplyBook(books)} className="btn btn-primary">Wishlist</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BookDetails;