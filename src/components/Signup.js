import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = (props) => {
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
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string().required("Password is required"),
          confirmPassword: Yup.string()
            .required("Please confirm your password")
            .when("password", {
              is: (password) =>
                password && password.length > 0 ? true : false,
              then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password doesn't match"
              ),
            }),
        })}
        onSubmit={handleSubmit}
        render={({ errors, status, touched }) => (
          <Form>
            <h3>Registration</h3>
            <div className="form-group">
              <label htmlFor="email">First Name</label>
              <Field
                name="firstName"
                type="text"
                className={
                  "form-control" +
                  (errors.firstName && touched.firstName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                type="text"
                className={
                  "form-control" +
                  (errors.lastName && touched.lastName ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="invalid-feedback"
              />
            </div>

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
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  "form-control" +
                  (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              onClick={handleAuthentication}
            >
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered?
              <Link exact to="/login">
                <a href="/login"> Log In</a>
              </Link>
            </p>
          </Form>
        )}
      />
    </Container>
  );
};

export default Signup;
