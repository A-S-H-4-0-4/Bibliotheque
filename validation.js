// validations

// local storage
// import { setUserDetails,SData } from "../api/userDetails";


// validation for email  format

export const validateEmail= (email) => {
 const Eformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(email.match(Eformat))
  {return true}
}