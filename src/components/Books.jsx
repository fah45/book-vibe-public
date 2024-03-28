
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const Books = () => {
    // const [books, setBooks] = useState([])
    // useEffect(()=>{
    //     fetch('/public/pages.json')
    //     .then(res => res.json())
    //     .then(data=>setBooks(data))
    // },[])

    // console.log(books)
    const books = useLoaderData()
    // console.log(books)

    return (
        <div>
            <div className="text-center" >
                <h1 className="text-5xl">Books</h1>
            </div>
            <section className="bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map(book => (<BookCard book={book} key={book.bookId}></BookCard>))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Books;