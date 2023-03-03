// style

import OT from "../styles/components/OTracking.module.css";

// components
import { Header } from "../components/header";
import Footer from "../components/FooterBox"


// hooks
import React from "react";


export const OTracking = () => {

  const [locationObject, setLocationObject] = React.useState("")


  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      return (setLocationObject(localStorage.getItem('locationObject')));


    }


  }, [])


  const checkLocation = () => {
    if (locationObject) {
      let track = localStorage.getItem('locationObject');
      track = JSON.parse(track);
      return ( 
        <>
      <div className={OT.date}>
        <h3>{track.date}</h3>
      </div>

      <div className={OT.location}>
        <div className={OT.time}>
          <span>{track.time}</span>
        </div>

        <div className={OT.place}>
          <span>{track.message}</span>
          <span>{track.place}</span>
        </div>
      </div>
      </>
      );
    }

    else {
      alert('location is not available')
    }

  }

  return (

    <div className={OT.box}>

      <Header />


      <div className={OT.content}>
        <div className={OT.title}>
          <h1 >Order Tracking</h1>
        </div>

         {checkLocation()}

      </div>

      <div className={OT.footer}>
        <Footer />
      </div>

    </div>


  )
}

export default OTracking;