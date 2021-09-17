// import Footer from "../components/FooterBox"
import {BookDetails} from "../components/BookDetails"
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
           {<BookDetails/>}
        </div>
    )
}

export default Testing 

