
// session key
import { generate } from "../sessionKey";




export const setUserSignIn = (values) => {

if (typeof values==="object") {
  localStorage.setItem("userObejct",JSON.stringify(values));
  return true;
}
return false;

}



// check login data
export const userLogin = (values) => {
  let user = localStorage.getItem("userObject");
  const sessionKeys = localStorage.getItem("sessionKeys")?JSON.parse(localStorage.getItem("sessionKeys")):[]
  if (user) {
       user = JSON.parse(user)
        if (user.email === values.email && user.password===values.password) {
          while(true){
            let sessionKey = generate()
             if (sessionKeys.indexOf(sessionKey)!== -1) {
               const newSessionKeys = [...sessionKeys]
               newSessionKeys.push(sessionKey)
               localStorage.setItem("sessionKeys", JSON.stringify(newSessionKeys));
               localStorage.setItem("sessionKey",sessionKey);
               break;
             }
          }
        } else {
          return false;      
        }
  } else {
    return false; 
  }
}