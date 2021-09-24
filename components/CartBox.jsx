// styles
import CB from "../styles/components/CartBox.module.css";


// images

const bookimg = "/images/bookimg3.jpg"

export const CartBox = () => {
  return (
    <div className={CB.box}>
      <div className={CB.img}>
        <img src={bookimg} alt />
      </div>
      <div className={CB.details}>

        <div className={CB.title}>
          <h3>React.js Book: Learning React JavaScript Library From Scratch</h3>
          <strong>₹10,570.00</strong>
        </div>

        <div className={CB.publisher}> <small> Paperback </small>
        </div>

        <div className={CB.stock}> <small> In stock </small>
        </div>

        <div className={CB.SoldBy}> <small> Sold by <span>University Bookstores Boston INDIA</span></small>
        </div>

        <div className={CB.quantity}>
          <div className={CB.qty}>
            <strong>-</strong>  <span>Qty: 1 </span><strong>+</strong>
          </div>
          <div className={CB.delete}><span>Delete</span></div>
          <div className={CB.smlt}><span>See more like this</span></div>
        </div>
      </div>
    </div>
  )
}