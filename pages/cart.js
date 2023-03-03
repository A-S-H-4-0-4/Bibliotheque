// hooks
import { useState, useEffect } from "react";

// storage API
import { getBookData, setQuantity } from "../api/bookStorage";

// router
import { useRouter } from "next/router";

// styles
import cart from "../styles/components/cart.module.css";


// icons
const cartimg = "/icons/cart.png"

// next link
import Link from "next/link";

// next image
import Image  from "next/image";


// component
import { CartBox } from "../components/CartBox";
import { Header } from "../components/header";
import Footer from "../components/FooterBox";

const Cart = () => {
  const [books, setBooks] = useState([]);
  const router = useRouter();
  let totalPrice = 0;
  let totalQuantity = 0;
  useEffect(() => {
    try {
      const books = getBookData("books");

      if (typeof books === "object") {
        return setBooks(books);
      }
    } catch (error) {
      return setBooks([]);
    }
  }, []);
  
  const increment = (id, quantity) => {
    quantity++;
    const response = setQuantity(id, quantity);
    return response
    ? router.reload()
    : alert("Problem while adding the quantity");
  };
  const decrement = (id, quantity) => {
    quantity--;
    const response = setQuantity(id, quantity);
    return response
    ? router.reload()
    : alert("Problem while decreasing the quantity");
  };
  
  const showBooks = () => { 
    
    let count = 0;
    for (const book of books) {
      if (book) {
        count++;
        break;
      
      }
    }
    if (count > 0) {
      const renderBooks = [];
      for (const book of books) {
        if (!book) { continue };
        const { quantity, saleInfo } = book;
        const { retailPrice = {} } = saleInfo;
        const { amount = 500 } = retailPrice;
        totalPrice += parseInt(quantity) * parseInt(amount);
        totalQuantity += parseInt(quantity);
        renderBooks.push(
          <CartBox
            book={book}
            key={book.id}
            increment={increment}
            decrement={decrement}
          />
        );
      }

      return renderBooks;
    }

    else if (count === 0) {
      return (
        <div className={cart.empty}>
          <Image src={cartimg} />
          <strong>Your cart is empty.&nbsp;</strong>
          <Link href="/home">
            <span>  Start Shopping</span>
          </Link>
        </div>
      )
    }
// console.log(books)

  };
  return (
    <div className={cart.box}>
      <Header />

      <div className={cart.shoppingcart}>
        <div className={cart.heading}>
          <span>Shopping Cart</span>
          <small>Price</small>
        </div>



        {showBooks()}


        <div className={cart.subtotal}>
          <span>
            Subtotal ({totalQuantity} books): <strong> ₹{totalPrice} </strong>
          </span>
        </div>
        <div className={cart.paymentBox}>
          <div className={cart.paymentBoxProceed}>
            <p>Items Subtotal({totalQuantity}): ₹{totalPrice}</p>
            <div>proceed to pay</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
