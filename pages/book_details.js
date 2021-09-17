// hooks
import { useState, useEffect } from "react";

// router
import { useRouter } from "next/router";

// API
import { callAPI } from "../api/API";

// styles
// import BD from "Book_details";

const styles = {
  height: "auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

// component
import { BookDetails } from "../components/BookDetails";
import { Header } from "../components/header";
import Footer from "../components/FooterBox";

const Book_details = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({});

  useEffect(()=>{
    try {
        const response = callAPI(id);
        // console.log(response);
        if (response) {
          const onResolve = (resolvedData) => {
            console.log(resolvedData);
            const { items } = resolvedData;
            setBook(items[0]);
            return setLoading(false);

          };
          const onReject = (rejectData) => { };
          response.then(onResolve, onReject);
        } else {
          return alert("Sorry some server error");
        }
      } catch (error) { }
  },[])

  const renderedObject = loading ? <small>Loading...</small> : <BookDetails book={book} />;

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
