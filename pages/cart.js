// styles
import cart from "../styles/components/cart.module.css";



// component
import { CartBox } from "../components/CartBox"
import { Header } from "../components/header"
import Footer from "../components/FooterBox"

const Cart = () => {
  return (<div className={cart.box}>
    <Header />

    <div className={cart.shoppingcart}>

      <div className={cart.heading}>
        <span>Shopping Cart</span>
        <small>Price</small>
      </div>

      <CartBox />
      <CartBox />

      <div className={cart.subtotal}>
        <span>Subtotal (2 items): <strong> ₹21,140.00 </strong></span>
      </div>

    </div>

    <Footer />

  </div>)
}


export default Cart