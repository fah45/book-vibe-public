import toast from "react-hot-toast";

export const getWishlist = () =>{
    let readWishlist = []
    const storedWishlist = localStorage.getItem('Wishlist')
    if(storedWishlist) {
         readWishlist = JSON.parse(storedWishlist)
    }

    return readWishlist
}

// save
export const saveWishlist = singleBook => {
    let Wishlist = getWishlist()
    const isExist = Wishlist.find(b => b.bookId === singleBook.bookId)
    if (isExist) {
      return toast.error('Already Added!')
    }
    Wishlist.push(singleBook)
    console.log(Wishlist)
    localStorage.setItem('Wishlist', JSON.stringify(Wishlist))
    toast.success('Wishlist marked Successfully!')
  }
