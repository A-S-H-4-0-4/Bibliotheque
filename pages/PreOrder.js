// New Arrivals

// styles 
import NA from "../styles/components/PreOrder.module.css";



// components

import { ProductBox } from "../components/ProductBox";
import { Header } from "../components/header";
import Footer from "../components/FooterBox";
import { CategoryBox } from "../components/CategoryBox";



const PreOrder = () => {
  return (
    <div className={NA.PreOrder}>


      {/* header */}
      <Header />


      {/* mainbody */}
      <div className={NA.mainbox}>
        <div className={NA.leftbar}>
          <div className={NA.Cbox}>
            <CategoryBox />
          </div>
        </div>


        <div className={NA.rightbar}>
          <div className={NA.box}>
            <div className={NA.heading}>
              <h3 > New Arrivals</h3>
              <span> Showing <strong>193</strong>  results</span>
            </div>
            <div className={NA.productbox}>

              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
            </div>
          </div>
        </div>
      </div>



      {/* footer */}
      <div className={NA.footer}>
        <Footer />
      </div>
    </div>
  )
}


export default PreOrder