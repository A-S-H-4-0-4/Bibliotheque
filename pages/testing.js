// import Footer from "../components/FooterBox"
import {ProductBox} from "../components/ProductBox"
const Testing = ()=>{

const styles= {
    height:"100vh",
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",


}

    return(

        <div style={styles}>
           {<ProductBox/>}
        </div>
    )
}

export default Testing 

