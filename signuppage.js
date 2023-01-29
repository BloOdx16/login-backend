import React from "react";
import Loginform from "./loginform.js";
import Background from "./background.js";
import Footer from "./footer.js";
import './loginform.css';
const Signup = () => {
    return ( 
        <>
        <div className='bgrd'>
          <Background></Background>
        
         
        
          <div className="form">
            <Loginform></Loginform>
          </div>
        </div> 
        
        <Footer></Footer> 
        </>
     );
}
 
export default Signup;