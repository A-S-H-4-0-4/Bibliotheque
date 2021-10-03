// styles
import LB from "../styles/components/LoginBox.module.css";

// icons

const google = "/icons/google.gif"
const fb = "/icons/fb.gif"

// hooks
import React from "react";



export const LoginBox = () => {

  const [format, setFormat] = React.useState("")


  const emailformat = (event, format) => {
    const { target } = event;
    const { value } = target;

    const EFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      if (value.match(EFormat)) {
        alert("format")
      }
      else {
        alert("format2")
      }
    }


  const passwordformat = (event) => {
    const { target } = event;
    const { value } = target;
    if (value.length === 1) {
      return true;

    }

  }



  const submit = () => {
 

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
            <input type="email" placeholder="eg. bookswagon@gmail.com" onChange={emailformat} ></input>
          </div>
          <div className={LB.password}>
            <span>Password:</span>
            <input type="text" onChange={passwordformat} />
          </div>

          <div className={LB.forgotpass}>
            <span>Forgot Password ?</span>
          </div>

          <div className={LB.lbutton} onClick={submit} >
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

          <div className={LB.email}>
            <span>Your Email Address:</span>
            <input type="text" />
          </div>

          <div className={LB.password}>
            <span>Password:</span>
            <input type="text" />
          </div>

          <div className={LB.Cpassword}>
            <span>Confirm Password:</span>
            <input type="text" />
          </div>


          <div className={LB.sbutton}>
            <span>Create Account</span>
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