
// session key
import { generate } from "../sessionKey";




export const setUserSignIn = (values) => {
  
 

  if (typeof values === "object") {
    let user = localStorage.getItem("userObject");
    user = JSON.parse(user);
    
    if (user !== null) {
        alert("you already have an account")
    }
    else {
      localStorage.setItem("userObject", JSON.stringify(values));
      return true;
    }
  }

  return false;

}



// check login data
export const userLogin = (loginValues) => {
  let user = localStorage.getItem("userObject");
  const sessionKeys = localStorage.getItem("sessionKeys") ? JSON.parse(localStorage.getItem("sessionKeys")) : []
  if (user) {
    user = JSON.parse(user)
    if (loginValues.email === user.email && loginValues.password === user.password) {
      while (true) {
        let sessionKey = generate()
        if (sessionKeys.indexOf(sessionKey) === -1) {
          let newSessionKeys = [...sessionKeys]
          newSessionKeys.push(sessionKey)
          localStorage.setItem("sessionKeys", JSON.stringify(newSessionKeys));
          localStorage.setItem("sessionKey", sessionKey);
          break;
        }
      }

      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }



}
