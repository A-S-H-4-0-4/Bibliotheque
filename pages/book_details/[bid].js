// hooks
import { useState, useEffect } from "react";

// router
import { useRouter } from "next/router";

// API
import { callAPI } from "../../api/API";

// next image
import Image  from "next/image";


// styles
// import bd from "../styles/components/book_details.module.css";

// gif
const loadingGif = "/icons/loadingGif.gif";

// import BD from "Book_details";

const styles = {
  height: "auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

// component
import { BookDetails } from "../../components/BookDetails";
import { Header } from "../../components/header";
import Footer from "../../components/FooterBox";

const Book_details = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (router.isReady) {
      try {
        const { query } = router;
        console.log(query);
        const { bid } = query;
        console.log(bid);
        return setQuery(bid);
      } catch (error) {}
    }
  });

  useEffect(() => {
   if (query!=="") {
    try {
      const response = callAPI(query);
      // console.log(response);
      if (response) {
        const onResolve = (resolvedData) => {
          console.log(resolvedData);
          const { items } = resolvedData;
          setBook(items[0]);
          return setLoading(false);
        };
        const onReject = (rejectData) => {};
        response.then(onResolve, onReject);
      } else {
        return alert("Sorry some server error");
      }
    } catch (error) {}
   }
  }, [query]);

  const renderedObject = loading ? (
    <div
      style={{
        marginTop:"140px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={loadingGif} />
    </div>
  ) : (
    <BookDetails book={book} />
  );

  return (
    <div style={styles}>
      <Header />

      {renderedObject}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Book_details;
