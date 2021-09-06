//  styles
import PB from "../styles/components/ProductBox.module.css";

//images

const bookimg = "/images/bookimg2.jpg"
const pod = "/images/pod2.png"



export const ProductBox = () => {
  return (
    <div className={PB.box}>
      <div className={PB.serialno}>1.</div>
      <div className={PB.book}>
        <img src={bookimg} alt={"bookimg"} />
      </div>

      <div className={PB.product_summary}>

        <div className={PB.title}>
          <a href="https://www.bookswagon.com/book/windows-10-enterprise-administrators-zane/9781786462824">Windows 10 for Enterprise Administrators</a>
        </div>


        <div className={PB.author_publisher}> <strong>By:</strong><a href="https://www.bookswagon.com/author/zane-williams">Zane Williams</a>,
          <a href="https://www.bookswagon.com/author/jeff-stokes">Jeff Stokes</a>, <a href="https://www.bookswagon.com/author/manuel-singer">Manuel Singer</a>,
          <a href="https://www.bookswagon.com/author/richard-diver">Richard Diver</a>
        </div>


        <div className={PB.author_publisher}><strong> Publisher: </strong><a href="https://www.bookswagon.com/publisher/packt-publishing">Packt Publishing</a>
        </div>


        <div className={PB.price_atrib}>
          <div className={PB.price}>₹4,155</div>

          <div className={PB.atributes}>

            <li>Binding:</li>
            <li>Release:</li>
            <li>Language:</li>

          </div>
          <div className={PB.atributes1}>
            <li>Paperback</li>
            <li>08 Sep 2017</li>
            <li>English</li>

          </div>
        </div>

      </div>

      <div className={PB.action}>
        <div className={PB.available_stock}>
       <strong> International Edition </strong>
        </div>


        <div className={PB.order_info}>
        Ships within <strong> 14-16 Days </strong> <a rel="nofollow" className={PB.wws_detail_cboxElement} href="https://www.bookswagon.com/shippingpopup.aspx">Explain..</a>
        </div>

        <div className={PB.shipping_info}>
        Free Shipping in India and low cost Worldwide.
        </div>

                 <div className={PB.pod}>
                   <img src={pod}/>
                 </div>
       

        <div className={PB.action_btn}>
        <button  type="button" ><span>Buy Now</span></button>
        <button className={PB.button1}type="button" ><span>Add to Wishlist </span></button>
        
        </div>
        

      </div>
      
    </div>

  )
}