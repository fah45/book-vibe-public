import toast from "react-hot-toast"

export const getBookDetails = () =>{
    let books = []
    const storedBook = localStorage.getItem('book')
    if(storedBook) {
         books = JSON.parse(storedBook)
    }

    return books
}

// save
export const saveBook = book => {
    let books = getBookDetails()
    const isExist = books.find(b => b.id === books.id)
    if (isExist) {
      return toast.error('Already Bookmarked!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Bookmarked Successfully!')
  }


// delete
export const deleteBook = id => {
    let books = getBookDetails()
    const remaining = books.filter(b => b.id !== id)
    localStorage.setItem('books', JSON.stringify(remaining))
    toast.success('Book Removed from Bookmark!')
  }