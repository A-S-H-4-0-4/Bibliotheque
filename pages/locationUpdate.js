// styles

import LU from "../styles/components/locationUpdate.module.css";


// hooks

const locationUpdate = () => {
  return (
    <div className={LU.page}>
      <div className={LU.box}>

        <div className={LU.heading}>
          <h2 style={{ color: 'black' }}>Package Location</h2>
        </div>
        <div className={LU.date}>
          <span>Date: </span>
          <input type="date"></input>
        </div>

        <div className={LU.place}>
          <span>Place: </span>
          <br />
          <textarea rows="4" cols="30">Enter location here..</textarea>
        </div>

        <div className={LU.message}>
          <span>Message: </span>
          <br />
          <textarea rows="4" cols="30" >Enter message here...</textarea>
        </div>

        <div className={LU.update}>
          <button type="button" >Update</button>
        </div>
      </div>
    </div>
  )
}


export default locationUpdate;



