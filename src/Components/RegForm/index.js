import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Google from "../../Assets/Icons/google.svg";
import Facebook from "../../Assets/Icons/facebook.svg";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function RegForm({ type }) {
  const [control, setControl] = useState({});
  const history = useHistory();

  const handleChange = ({ target }) => {
    setControl({
      ...control,
      [target.name]: target.value,
      role: type === "user" ? "user" : type === "doctor" ? "doctor" : "pharmacy"
    });
  };

  const register = () => {
    console.log(control);
    const endpoint = "https://medphar.000webhostapp.com/api/create_user.php";
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(control),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(`Registered ${control.firstname} ${control.lastname} as ${control.role}.
        Login to continue`);
        history.push("/login");
      })
      .catch((err) => alert("An error occured, please try again."));
  };

  return (
    <Form id="register">
      <h3 className="form_title">
        Welcome! Create an <span className="blue">account</span> to get started
      </h3>
      <Form.Group className="form_group">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="input"
          name="firstname"
          className="w-100 custom-input"
          placeholder="Please enter your fullname"
        />
      </Form.Group>
      <Form.Group className="form_group">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="input"
          name="lastname"
          className="w-100 custom-input"
          placeholder="Please enter your fullname"
        />
      </Form.Group>
      <Form.Group className="form_group">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="email"
          name="email"
          className="w-100 custom-input"
          placeholder="Please enter a valid email address"
        />
      </Form.Group>
      {type === "user" ? (
        <Form.Group className="form_group">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="password"
            name="password"
            className="w-100 custom-input"
            placeholder="Please create a password"
          />
        </Form.Group>
      ) : (
        <Form.Group className="form_group">
          <Form.Label>License Number</Form.Label>
          <Form.Control
            onChange={handleChange}
            required
            type="text"
            name="licence_number"
            className="w-100 custom-input"
            placeholder="Enter your licence number for verification"
          />
        </Form.Group>
      )}
      {/* <Form.Group className="form_group">
        <Form.Label>
          {type === "user" ? "Re-enter password" : "Password"}
        </Form.Label>
        <Form.Control
          onChange={handleChange}
          required
          type="password"
          name={type === "user" ? "re_enter_password" : "password"}
          className="w-100 custom-input"
          placeholder="Please create a password"
        />
      </Form.Group> */}
      <div className="d-flex flex-column justify-content-center">
        <p className="text-center faded">Or Sign up with</p>
        <div className="d-flex justify-content-center align-items-center">
          <img
            alt="google"
            src={Google}
            className="my-2 mx-4"
            width="30px"
            height="30px"
          />
          <img
            alt="facebook"
            src={Facebook}
            className="my-2 mx-4"
            width="30px"
            height="30px"
          />
          <Link to="https://quabbly.live/6a39b4be-d5a0-4b48-af41-13e6acf205d2">Quabbly</Link>
        </div>
      </div>
      <div className="t_and_c_container text my-4 d-flex  align-items-center">
        <span className="d-flex align-items-center justify-content-center my-0">
          <FormCheckInput />
        </span>
        I agree to the
        <Link to="#" className="mx-1">
          Terms and Conditions
        </Link>
      </div>
      <Button
        className="w-100 form_btn d-flex justify-content-center align-items-center"
        onClick={register}
      >
        Create Account
      </Button>
      <p className="text my-4 text-center">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </Form>
  );
}
