// styles

import ABox from "../styles/components/AuthorBox.module.css";

// images

const authorimg1 = "/images/gayle-forman.jpg"

export const AuthorBox = () => {
  return (
    <div className={ABox.box}>
      
        <img src={authorimg1} />
        
          <p>Gayle Forman</p>
      </div>
      )
}



