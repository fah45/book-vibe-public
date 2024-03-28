/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MarkedWish = ({ wishItem }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = wishItem
    return (
        <div className="hero bg-base-400">
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
                    <p className="py-6">Year of Publishing: {yearOfPublishing}</p>
                    <div className="flex gap-2">
                    <p>Publisher: {publisher}</p>
                    <p>TotalPages: {totalPages}</p>
                    </div>
                    <div className="flex gap-4">
                    <button className="btn btn-primary">{category}</button>
                    <button className="btn btn-primary">{rating}</button>
                    <Link to={`/bookDetails/${bookId}`} className="btn bg-green-400">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkedWish;