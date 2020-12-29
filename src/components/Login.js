import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const history = useHistory();
  const handleAuthentication = () => {
    localStorage.setItem("access_token", "mock_token");
    props.setAuth(true);
  };

  const handleSubmit = () => {
    history.push("/");
  };

  return (
    <Container
      className="pt-5 mt-5 pb-5"
      style={{
        maxWidth: "400px",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={handleSubmit}
        render={({ errors, status, touched }) => (
          <Form>
            <h3>Log In</h3>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className={
                  "form-control" +
                  (errors.email && touched.email ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                className={
                  "form-control" +
                  (errors.password && touched.password ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              onClick={handleAuthentication}
            >
              Log In
            </button>
            <p className="forgot-password text-right">
              Not a member?
              <Link exact to="/register">
                <a href="/register"> Register</a>
              </Link>
            </p>
          </Form>
        )}
      />
    </Container>
  );
};

export default Login;
