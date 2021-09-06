// styles
import CBox from "../styles/components/CategoryBox.module.css";

// category data
import { categories } from "../data/category";

const list = (category,index) => {
  return( <li> < a href="https://www.bookswagon.com/cookery-food-wine-books" key={index}> 
  {category}
  </a>
  </li>)
}

export const CategoryBox = () => {
    return (
      <div className={CBox.box}> 
      <h2>Browse By Category </h2>
      <ul>
      {categories.map(list)}
      </ul>
      </div>
    )
}