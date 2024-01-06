import React from "react";
import { Facebook, Google } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <section className="section__signin">
      <div className="signin">
        <div className="content">
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              <input type="text" required /> <i>Username</i>
            </div>
            <div className="inputBox">
              <input type="password" required /> <i>Password</i>
            </div>
            <div className="links">
              <Link href="#">Forgot Password</Link> <Link href="#">SIGN UP</Link>
            </div>
            <div className="group__login__with">
              <Link className="icon__login">
                <Google />
              </Link>
              <Link className="icon__login">
                <Facebook />
              </Link>
            </div>
            <div className="inputBox">
              <input type="submit" defaultValue="Login" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
