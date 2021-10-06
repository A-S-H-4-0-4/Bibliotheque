



export const setUserDetails = () => {
  
  
}



// SignUpData data

export const SData = () => {

  const response = localStorage.getItem("signUpData");
  
  const {email} = response;
  
  console.log(email);
  return response?true:false;

}