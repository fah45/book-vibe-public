import toast from "react-hot-toast"

export const getBookDetails = () =>{
    let readBooks = []
    const storedBook = localStorage.getItem('book')
    if(storedBook) {
         readBooks = JSON.parse(storedBook)
    }

    return readBooks
}

// save
export const saveBook = singleBook => {
    let books = getBookDetails()
    const isExist = books.find(b => b.bookId === singleBook.bookId)
    if (isExist) {
      return toast.error('Already Added!')
    }
    books.push(singleBook)
    console.log(books)
    localStorage.setItem('book', JSON.stringify(books))
    toast.success('Book marked Successfully!')
  }
