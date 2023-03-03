




export const setLocation = (values) => {
  
 

  if (typeof values === "object") {

      localStorage.setItem("locationObject", JSON.stringify(values));
      return true;
    }
  
  return false;

}
