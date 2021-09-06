// styles
import FB from "../styles/components/FooterBox.module.css";

const address = {
  padding: "7px",
};

// icons
const facebook = "/icons/facebook.png"
const twitter = "/icons/twitter.png"
const linkedin = "/icons/linkedin.png"
const instagram = "/icons/instagram.png"
const pinterest = "/icons/pinterest.png"
const youtube = "/icons/youtube.png"

// images
const trustpay = "/images/trustpay.png"
const card = "/images/card.jpeg"
const cod = "/images/cod.jpeg"
const mastercard = "/images/mastercard.jpeg"
const netbanking = "/images/netbanking.jpeg"
const paytm = "/images/paytm.jpeg"
const visa = "/images/visa.jpeg"
const banking = "/images/banking.jpeg"

const Footer = () => {
  return (
    <div className={FB.box}>
      <div className={FB.upperbox}>
        <div className={FB.footer_lyks}>
          <h3 className="links-heading">Company</h3>
          <div className={FB.company}>


            <ul >

              <li>
                <a href="https://www.bookswagon.com/aboutus">About Us</a></li>
              <li>
                <a href="https://www.indeedjobs.com/sr-ecommerce-factory-private-limited" target="_blank">Career</a>
              </li>
              <li>
                <a href="https://blog.bookswagon.com" target="_blank">Blog</a>
              </li>
              <li><a href="https://www.bookswagon.com/contactus">Contact Us</a>
              </li>
            </ul>

          </div>
        </div>



        <div className={FB.footer_lyks}>
          <h3 >Policies</h3>
          <div className={FB.policies}>

            <ul >
              <li><a href="https://www.bookswagon.com/privacypolicy">Privacy Policies</a></li>
              <li><a href="https://www.bookswagon.com/termsofuse">Terms of Use</a></li>
              <li><a href="https://www.bookswagon.com/safesecurehelp">Secure Shopping</a></li>
              <li><a href="https://www.bookswagon.com/copyright">Copyright Policy</a></li></ul>

          </div>
        </div>


        <div className={FB.footer_lyks}>
          <h3 >Help</h3>
          <div className={FB.help}>


            <ul >
              <li><a href="https://www.bookswagon.com/paymenthelp">Payment</a></li>
              <li><a href="https://www.bookswagon.com/termsofuse?#shipping">Shipping</a></li>
              <li><a href="https://www.bookswagon.com/returnhelp">Return</a></li>
              <li><a href="https://www.bookswagon.com/faq">FAQ</a></li></ul>
          </div>
        </div>



        <div className={FB.footer_lyks}>
          <h3 className={FB.Mischeading}>Misc</h3>
          <div className={FB.misc}>
            <ul >
              <li><a href="https://www.bookswagon.com/affiliate/login">Affiliate</a></li>
              <li><a href="https://www.bookswagon.com/requestbook">Request a Book</a></li>
              <li><a href="https://www.bookswagon.com/sitemap">Sitemap</a></li></ul>
          </div>

        </div>

        <div className={FB.FollowBox} >
          <h3 >
            <a className={FB.follow} style={{ color: "#08d", fontSize: "medium" }} href="https://www.bookswagon.com/sitemap">Follow Us</a>
          </h3>
          <div className={FB.icons}>
            <img src={facebook} />
            <img src={twitter} />
            <img src={linkedin} />
            <img src={pinterest} />
            <img src={instagram} />
            <img src={youtube} />
          </div>
        </div>
      </div>

      <div className={FB.middlebox}>
        <div className={FB.addressdiv}> <strong style={address}>Address:</strong>
          SR Ecommerce Factory Pvt. Ltd., 2/14, ground floor , Ansari road , Daryaganj Delhi 110002
          <span style={address}>|</span>
          <strong style={address}>Email:</strong>

          <a className={FB.email} style={{ color: "#08d" }} href="mailto:customerservice@bookswagon.com">customerservice@bookswagon.com</a>

          <span style={address}>|</span> <strong style={address}>Phone#:</strong>
          011-41521153<div>
          </div>
        </div>

      </div>

      <div className={FB.lowerbox}>

        <div className={FB.rightbox}>
          <div className={FB.trustpay}>
            <img src={trustpay} />
          </div>

          <div className={FB.payment}>
            <div className={FB.imgs}>

              <img src={visa} />
              <img src={mastercard} />
              <img src={netbanking} />
              <img src={banking} />
              <img src={card} />
              <img src={cod} />
              <img src={paytm} />
            </div>
            <div className={FB.text}>
             <strong> 100% Secure Payment
               </strong>
        
           <span>
             
             All major credit &amp; debit cards accepted
             </span> 
            </div>
          </div>
        </div>

        <div className={FB.leftbox}>

          <p>Copyright 2017. Bookswagon.com. All Rights Reserved</p>
          <div className={FB.copyright}>

            <a href="https://www.bookswagon.com/privacypolicy">Privacy Policy</a>

            <a href="https://www.bookswagon.com/termsofuse?#shipping">Terms &amp; conditions</a>
          </div>


        </div>
      </div>

    </div>
  )
}





// default export 
export default Footer