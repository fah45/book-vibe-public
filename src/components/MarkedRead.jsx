

const MarkedRead = ({ readItem }) => {
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = readItem
    return (
        <div className="hero bg-base-400">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">Review: {review}</p>
                    <p className="py-6">By: {author}</p>
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
                        </ul>
                    </div>
                    <div className="flex gap-4">
                    <button className="btn btn-primary">{category}</button>
                    <button className="btn btn-primary">{rating}</button>
                    <button className="btn bg-green-400">View Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MarkedRead;