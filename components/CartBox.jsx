// styles
import CB from "../styles/components/CartBox.module.css";


// images

const bookimg = "/images/bookimg3.jpg"

export const CartBox = (props) => {
  const {book,key,increment,decrement} = props
  const {quantity,volumeInfo,saleInfo,id} = book
  const {title,authors,imageLinks} = volumeInfo
  const {thumbnail} = imageLinks
  const {retailPrice={}} = saleInfo
  const {amount = 500} = retailPrice
  return (
    <div className={CB.box} key={key}>
      <div className={CB.imag}>
        <img src={thumbnail} alt="" />
      </div>
      <div className={CB.details}>

        <div className={CB.title}>
          <h3>{title}</h3>
          <strong>₹{amount}</strong>
        </div>

        <div className={CB.publisher}> <small> {authors} </small>
        </div>

        <div className={CB.stock}> <small> In stock </small>
        </div>

        <div className={CB.SoldBy}> <small> Sold by <span>University Bookstores Boston INDIA</span></small>
        </div>

        <div className={CB.quantity}>
          <div className={CB.qty}>
            <strong onClick={()=>{decrement(id,quantity)}}>-</strong>  <span>Qty: {quantity} </span><strong onClick={()=>{increment(id,quantity)}}>+</strong>
          </div>
          <div className={CB.delete}><span>Delete</span></div>
          <div className={CB.smlt}><span>See more like this</span></div>
        </div>
     
      <div className = {CB.price}>
        <span>Price of {quantity} books = {parseInt(amount)*parseInt(quantity)}</span>
      </div>
      </div>
    </div>
  )
}