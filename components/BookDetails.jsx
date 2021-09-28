// STYLES
import BD from "../styles/components/BookDetails.module.css";

// hooks
import { useState } from "react";

// router
import { useRouter } from "next/router";
// local storage
import { setBookData } from "../api/bookStorage";

// icons
const starR = "/icons/star-red.gif";
const starG = "/icons/star-gray.gif";
const action_left = "/icons/action-left.gif";
const like = "/icons/like.png";
const safeshopiing = "/icons/safe-shopping-ico.gif";
const card = "/icons/buyonline-ico.gif";
const globe = "/icons/globe.png";
const dollar = "/icons/dollar-symbol.png";

export const BookDetails = (props) => {
  const router = useRouter();
  const { book } = props;
  const { saleInfo,volumeInfo, id } = book;
  const {
    description = "",
    title = "",
    authors = "",
    publishedDate = "",
    imageLinks = {},
  } = volumeInfo;
  const { retailPrice = {} } = saleInfo;
  const { amount = 500 } = retailPrice;
  const { thumbnail = "" } = imageLinks;
  const [bookDescription, setBookDescription] = useState(true);
  const s_h_d = bookDescription ? "Hide Details" : "Show Details";

  // const [bookObject,setBookObject] = useState({});

  const addToCart = () => {
    // const newBookObject = {...bookObject,book}
    const response = setBookData(book);
    if (response) {
      alert("Successfully added book in cart");
      return router.reload();
    } else {
      return alert("Error while adding the book to cart");
    }
    // return setBookData(newBookObject)
  };

  return (
    <div className={BD.box}>
      {/* about book box */}
      <div className={BD.aboutbooks}>
        {/* top box */}
        <div className={BD.topbox}>
          <span> Home </span>
          &gt; <span>Computer & Internet </span>
          &gt; <span> Computer science </span>
          &gt; <span>Signal processing </span>
          &gt;
          <small>{title}</small>
        </div>

        {/* bottom */}
        <div className={BD.bottombox}>
          {/* right box of bottom box */}

          <div className={BD.rightbox}>
            {/* book img */}
            <div className={BD.innerrightbox}>
              <img src={thumbnail} />
              <div className={BD.like}>
                <img src={like} />
                <small>लाइक करें </small>
              </div>
            </div>
            {/* about book */}
            <div className={BD.summary}>
              <div className={BD.bookname}>
                <span>{title}</span>

                <small> (Paperback) </small>

                <small>
                  By: <span> {authors[0]} </span> (Author) | Publisher:{" "}
                  <span>Kodansha Comics </span>| Released: {publishedDate} |
                  Publisher Imprint: Kodansha Comics
                </small>
              </div>

              <div className={BD.rating}>
                <img src={starR} />
                <img src={starR} />
                <img src={starR} />
                <img src={starR} />
                <img src={starG} />
                &nbsp; &nbsp; | &nbsp;<small> 1 Review(s) </small>&nbsp; |&nbsp;{" "}
                <small>Post a Review </small>
              </div>

              <div className={BD.bookdetails}>
                <div className={BD.price}>
                  <s>₹847</s>
                  <span> ₹{amount} </span>
                </div>

                <div className={BD.discount}>
                  <span>
                    {" "}
                    <b>35% </b> OFF{" "}
                  </span>
                </div>

                <img src={action_left} />

                <div className={BD.edition}>
                  <span> International Edition</span>
                  <p>
                    Ships within <strong>14-16 Business Days </strong> Free
                    Shipping in India and low cost Worldwide.
                  </p>
                </div>
              </div>

              <div className={BD.action_btn}>
                <button type="button">
                  <span>Buy Now</span>
                </button>
                <button
                  className={BD.button1}
                  type="button"
                  onClick={addToCart}
                >
                  <span>Add to Cart </span>
                </button>
              </div>
            </div>
          </div>

          {/* left box of bottom box */}
          <div className={BD.leftbox}>
            <div className={BD.innerbox}>
              <span>Safe & Secure Shopping</span>
              <div className={BD.securepay}>
                <img src={safeshopiing} alt="" />
                <span>
                  Payment accepted by All Major Credit and Debit cards, lnternet
                  banking, Paypal, Cash-on-Delivery.
                </span>
              </div>

              <div className={BD.cards}>
                <img src={card} alt="" />
              </div>

              <div className={BD.cashdelivery}>
                <div className={BD.globe}>
                  <img src={globe} alt="" />
                  <small>Worldwide Shipping Available</small>
                </div>
                <div className={BD.dollar}>
                  <img src={dollar} alt="" />
                  <small>
                    Cash on Delivery Available in India at ₹30(additional)
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={BD.description}>
        <div className={BD.heading}>
          <span>About The Book </span>{" "}
          <small
            onClick={() => {
              setBookDescription(!bookDescription);
            }}
          >
            {s_h_d}
          </small>
        </div>
        {bookDescription && <div className={BD.about}>{description}</div>}
      </div>
    </div>
  );
};
