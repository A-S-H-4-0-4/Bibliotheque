// styles

import LU from "../styles/components/locationUpdate.module.css";


// hooks
import React from "react";



// local storage
import { setLocation } from "../api/Updatelocation";



const locationUpdate = () => {
  const [values, setValues] = React.useState({ date: "", time: "", place: "", message: "", })


  const getValues = (event) => {
    const value = event.target.value
    const name = event.target.name

    const newGetValues = { ...values, [name]: value }
    return setValues(newGetValues)
  }

  const update = () => {

    const response = setLocation(values);
    if (response) {
      alert("successfully updated")
      
    } else {
      return alert('Sorry unable to update')
    }
  }


  return (
    <div className={LU.page}>
      <div className={LU.box}>

        <div className={LU.heading}>
          <span>  Package Location </span>
        </div>
        <div className={LU.date}>
          <span>Date: </span>
          <br />
          <input type="date" name="date" onChange={getValues}></input>
        </div>

        <div className={LU.time}>
          <span>Time: </span>
          <br />
          <input type="time" name="time" onChange={getValues}></input>
        </div>

        <div className={LU.place}>
          <span >Location: </span>
          <br />
          <textarea rows="4" cols="30" placeholder="Enter location of package..." name="place" onChange={getValues}></textarea>
        </div>

        <div className={LU.message}>
          <span>Message: </span>
          <br />
          <textarea rows="4" cols="30" placeholder="Enter message..." name="message" onChange={getValues}></textarea>
        </div>

        <div className={LU.update} onClick={update}>
          <button type="button" >Update</button>
        </div>
      </div>
    </div>
  )
}


export default locationUpdate;



