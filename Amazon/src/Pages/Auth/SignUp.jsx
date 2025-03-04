import React from 'react';
import classes from "./SignUp.module.css";
import {Link} from "react-router-dom";


function Auth() {
  return (
        <section className={classes.login}>
          {/* Logo */}
          <Link>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png"
          alt="Amazon" />
          </Link>
           
          <div className={classes.login_container}>
            
            <h1>Sign In</h1>
            <form action="">

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>

              <button>

                Sign In

              </button>



            </form>



          </div>
  
  
        </section>
   
     
    
  )
}

export default Auth
