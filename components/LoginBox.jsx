// styles
import LB from "../styles/components/LoginBox.module.css";

// icons

const google = "/icons/google.gif"
const fb = "/icons/fb.gif"

// local storage
import { setUserDetails, SData } from "../api/userDetails";

// hooks
import React from "react";

// router
import { useRouter } from "next/router";

// link
// import Link from "next/link";

// validation
import { validateEmail } from "../validation";


export const LoginBox = () => {
  const router = useRouter();


  const [values, setValues] = React.useState({ email: "", password: "", confirmPassword: "", })


  const getValues = (event) => {

    setValues((newGetValues) => ({
      ...newGetValues,
      [event.target.name]: event.target.value,
    }))


  }


  // for sinup 
  const submit = () => {

    if (validateEmail(values.email)) {
      if (values.password.length >= 6) {
        if (values.password === values.confirmPassword) {
          localStorage.setItem("signUpData", JSON.stringify(values));

          if (SData()) {
            return router.push("/home")
          }

          else {
            alert("SORRY!! There is some error....")
          }
        }
        
      else {
        alert("password does not match")
      }
      }
      else {
        alert("password must be at least 6 characters")
      };
    }

    else {
      alert("please enter a valid email")
    };




  }







  return (
    <div className={LB.box}>
      <div className={LB.title}>
        <span>My Account</span>
      </div>

      <div className={LB.lsBox}>
        <div className={LB.login}>
          <div className={LB.heading}>
            <span>Existing Customers</span>
          </div>

          <div className={LB.detail}>
            <span>If you already have an account, please sign in for faster checkout.</span>
          </div>

          <div className={LB.email}>
            <span>Your Email Address:</span>
            <input type="email" placeholder="eg. bookswagon@gmail.com" ></input>
          </div>
          <div className={LB.password}>
            <span>Password:</span>
            <input type="password" />
          </div>

          <div className={LB.forgotpass}>
            <span>Forgot Password ?</span>
          </div>

          <div className={LB.lbutton}  >
            <span >Login</span>
          </div>

        </div>



        <div className={LB.signup}>
          <div className={LB.heading}>
            <span>New Customers</span>
          </div>

          <div className={LB.detail}>
            <span> Create a new account to make future purchases even faster.</span>

          </div>

          <div className={LB.email} >
            <span>Your Email Address:</span>
            <input type="email" name="email" onChange={getValues} value={values.email} />
          </div>

          <div className={LB.password} >
            <span>Password:</span>
            <input type="password" name="password" onChange={getValues} value={values.password} />
          </div>

          <div className={LB.Cpassword} >
            <span>Confirm Password:</span>
            <input type="password" name="confirmPassword" onChange={getValues} value={values.confirmPassword} />
          </div>


          <div className={LB.sbutton} >
            <span onClick={submit}>Create Account</span>
          </div>



        </div>


        <div className={LB.signin}>
          <div className={LB.heading}>
            <span>Or sign-in using your existing account with...</span>
          </div>

          <div className={LB.Soption}>
            <div className={LB.google}>
              <img src={google} alt="" />
            </div>
            <div className={LB.fb}>
              <img src={fb} alt="" />
            </div>

          </div>


        </div>




      </div>
    </div>
  )

}