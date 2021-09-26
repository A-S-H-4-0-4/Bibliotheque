// file for localy storing the data
// set data

export const setBookData = (object, modified = false) => {
  let newBooks = [];
  
  if (!modified) {
    const booksObject = getBookData("books");
    const bookIndexes = getBookData("bookIndexes")?getBookData("bookIndexes"):{}
    const id = object.id
    if (booksObject !== null) {
        const bookIndex = bookIndexes[id]
        if (bookIndex) {
          object["quantity"] = booksObject[bookIndex-1].quantity+1
          newBooks = [...booksObject];
          newBooks[bookIndex-1] = object
        }else{
            object["quantity"] = 1
            newBooks = [...booksObject, object]; 
            bookIndexes[id] = newBooks.length
        }
      
    } else if (booksObject === null) {
      object["quantity"] = 1
      newBooks = [object];
      bookIndexes[id] = 1 
    }
  
    try {
      localStorage.setItem("books", JSON.stringify(newBooks));
      localStorage.setItem("bookIndexes", JSON.stringify(bookIndexes));
  
      return true;
    } catch (error) {
      return false;
    }
  }else{
    newBooks = [...object]
    try {
      localStorage.setItem("books", JSON.stringify(newBooks));
      return true
    } catch (error) {
      return false;
    }
  }
  
};

// get data
export const getBookData = (key) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return null;
  }
  return JSON.parse(data);
};

export const setQuantity = (id,updatedQuantity) => {
console.log(updatedQuantity);
console.log(id);
const bookIndex = getBookData("bookIndexes")?getBookData("bookIndexes")[id]:null;
if (bookIndex && typeof parseInt(bookIndex)==='number') {

  const books = getBookData("books") || []
  const book = books[bookIndex-1]
  if (book) {
    book['quantity'] = updatedQuantity
    books[bookIndex-1] = book
    const response = setBookData(books,true)
    
    return response?true:false;
      
    }
    
  }
return false;
}



export const getQuantity = () => {
let sum = 0;
const books = getBookData("books");
books && books.forEach((book)=>{sum+=parseInt(book.quantity)})
return sum

}
