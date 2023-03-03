// styles
import BB from "../styles/components/BookBox.module.css";


// images

const img1 = '/images/bookimg1.jpg'
// next image
import Image  from "next/image";



export const BookBox = () =>{
  return(
   <div className={BB.Box}>
   <div className={BB.imgBox}>
  
        <Image src={img1} />
      
    </div>

    <div className={BB.price}>
      $200
    </div>
    <div className={BB.heading}>
      Attack Of Titans 1
    </div>
    <div className={BB.Sheading}>
      Hajime Isayama
    </div>
    </div>
  )
}