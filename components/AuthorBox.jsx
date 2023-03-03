// styles

import ABox from "../styles/components/AuthorBox.module.css";

// images
// next image
import  Image  from "next/image";


const authorimg1 = "/images/gayle-forman.jpg"

export const AuthorBox = () => {
  return (
    <div className={ABox.box}>
      
        <Image src={authorimg1} />
        
          <p>Gayle Forman</p>
      </div>
      )
}



