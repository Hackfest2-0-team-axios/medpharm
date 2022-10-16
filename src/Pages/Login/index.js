import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import LoginImg from "../../Assets/Images/loginImg.svg";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./style.css";
import { auth } from "../../firebase-config"

export default function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();


  const loginUser = async () => {

  
      try {
        const users = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(users)
        history('/news-feed');
      } catch (error) {
        console.log(error)
      }
      
  

  };


  return (
    <div className="login_container d-flex">
      <h3 className="p-5 fixed">
        <Link to="/" className="logo">
          MedPharm
        </Link>
      </h3>
      <div className="login_img_container">
        <img alt="" src={LoginImg} />
      </div>
      <div className="login_form_container">
        <Form id="login">
          <h3 className="form_title">Welcome back!</h3>
          <Form.Group className="form_group">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(event) => setLoginEmail(event.target.value)}
              type="email"
              name="email"
              className="w-100 custom-input"
              placeholder="Please enter your email address"
            />
          </Form.Group>
          <Form.Group className="form_group">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(event) => setLoginPassword(event.target.value)}
              type="password"
              name="password"
              className="w-100 custom-input"
              placeholder="Please enter your password"
            />
          </Form.Group>
          <Link to="/forgot_password" className="text my-3">
            Forgot Password?
          </Link>

          <Button
            className="w-100 form_btn d-flex justify-content-center align-items-center"
            href="/news_feed"
            form="login"
            onClick={loginUser}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
