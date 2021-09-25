// header component

// API
import { callAPI } from "../api/API";

// storage
import { getQuantity } from "../api/bookStorage";

// router
import { useRouter } from "next/router";

// random data
const currencies = [
  "inr",
  "dollar",
  "aed",
  "euro",
  "pound",
  "all",
  "afn",
  "awg",
  "azn",
  "Bam",
  "bbd",
  "bdt",
  "bgn",
  "bhd",
  "bif",
  "bmd",
  "bnd",
];

// icons
const cartimg = "/icons/shopping-cart.png";
const search = "/icons/search.png";
const login = "/icons/login.png";
const home = "/icons/home-img.png";

// hooks
import React from "react";

import Link from "next/link";

// styles
import HS from "../styles/components/header.module.css";

// logo
const logo = "/logo/logo.png";

export const Header = () => {
  const [currency, setCurrency] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [books, setBooks] = React.useState([]);
  const [quantity,setQuantity] = React.useState(0)
  const router = useRouter();

  React.useEffect(()=>{
    if (typeof window !== 'undefined') {
      return setQuantity(getQuantity())
    }
  },[])

  const searchBooks = (searchQuery) => {
    // console.log("in after component mount");
    try {
      const response = callAPI(searchQuery);
      // console.log(response);
      if (response) {
        const onResolve = (resolvedData) => {
          console.log(resolvedData);
          const { items } = resolvedData;

          return setBooks(items.slice(0, 4));
        };
        const onReject = (rejectData) => {};
        response.then(onResolve, onReject);
      } else {
        return alert("Sorry some server error");
      }
    } catch (error) {}
  };

  const currencyOptions = (value, index) => {
    return (
      <option key={index} value={value}>
        {value.toUpperCase()}
      </option>
    );
  };

  const changeSearch = (event) => {
    const { target } = event;
    const { value } = target;
    setSearchQuery(value);
    if (value.length > 3) {
      return searchBooks(value);
    }
  };

  const showBookName = (book, index) => {
    const { volumeInfo, id } = book;
    const { title } = volumeInfo;
    const onBookClick = ()=>{
      setBooks([])
      return router.pathname.startsWith('/book_details/')?router.replace(`/book_details/${id}/`):router.push(`/book_details/${id}`)
    }
    return (
      <small
        key={index}
        onClick={onBookClick}
      >
        {title}{" "}
      </small>
    );
  };

  const showAuthorName = (book, index) => {
    const { volumeInfo, id } = book;
    const { authors } = volumeInfo;

    return (
      <small
        key={index}
        onClick={() => {
          router.push({ pathname: "book_details", query: { id } });
        }}
      >
        {authors}{" "}
      </small>
    );
  };

  return (
    <div className={HS.header}>
      <div className={HS.upperHeader}>
        <img src={logo} className={HS.logo} />
        <div className={HS.searchBox}>
          <div className={HS.search}>
            <input
              placeholder="Search by Title, Author, Publisher or ISBN"
              value={searchQuery}
              onChange={changeSearch}
            />
            <img src={search} />
          </div>
          {books.length > 0 && searchQuery.length > 3 && (
            <div className={HS.searchResult}>
              <span>Book(S) </span>
              <div className={HS.title}>{books.map(showBookName)}</div>
              <span>Author(S) </span>
              <div className={HS.author}>{books.map(showAuthorName)}</div>
            </div>
          )}
        </div>
        <div className={HS.login}>
          <img src={login} />
          <div className={HS.Login}>Login</div>
          <div className={HS.signup}>Signup</div>
        </div>
        <Link href ="/cart">
        <div className={HS.cart}>
          <img src={cartimg} />
          <div>{quantity}</div>
        </div>
        </Link>
      </div>
      <div className={HS.bottomHeader}>
        <div className={HS.bottomHeaderNav}>
          <Link href="/home">
            <div>
              <img src={home} />
            </div>
          </Link>
          <div>Books</div>
          <Link href="/newarrivals">
            <div>New Arrivals</div>
          </Link>
          <Link href="PreOrder">
            <div>Pre-Order</div>
          </Link>
          <Link href=" BestSeller">
            <div>BestSeller</div>
          </Link>
          <Link href="TextBook">
            <div>TextBook</div>
          </Link>
          <Link href="AwardWinners">
            <div>Award Winners</div>
          </Link>
          <div>Featured Authors</div>
        </div>
        <div className={HS.currency}>
          <p>Currency</p>
          <select
            name=""
            id=""
            value={currency}
            onChange={(event) => {
              setCurrency(event.target.value);
            }}
          >
            {currencies.map(currencyOptions)}
          </select>
        </div>
      </div>
    </div>
  );
};
