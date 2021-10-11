// styles

import login from "../styles/components/login.module.css";



// components
import { Header } from "../components/header";
import { LoginBox } from "../components/LoginBox"





const Login = () => {
  return (
    <div >
      
        <Header />
      
      <div className={login.lbox}>
        <LoginBox />
      </div>

    </div>
  )
}

export default Login