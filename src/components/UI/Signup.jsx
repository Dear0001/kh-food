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
              <input type="text" required /> <i>Full Name</i>
            </div>
            <div className="inputBox">
              <input type="text" required /> <i>Email</i>
            </div>
            <div className="inputBox">
              <input type="password" required /> <i>Password</i>
            </div>
            <div className="inputBox">
              <input type="password" required /> <i>Confirm</i>
            </div>
            <div className="links">
              <Link href="#">Have alreaddy an accout?</Link>{" "}
              <Link href="#">SIGN IN</Link>
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
