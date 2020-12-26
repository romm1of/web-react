import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { actionCreators } from "../redux/actions";
import { useDispatch } from "react-redux";

const Checkout = () => {
  let history = useHistory();

  const dispatch = useDispatch();

  const handleSuccess = () => {
    history.push("/cart/checkout/success");
    dispatch(actionCreators.clearItems());
  };

  return (
    <Container className="pt-5 mt-5 justify-content-center">
      <Row className="justify-content-center">
        <h3>Checkout</h3>
      </Row>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          phone: Yup.string()
            .matches(new RegExp("[0-9]{10}"))
            .required("Phone number is required"),
        })}
        onSubmit={handleSuccess}
        render={({ errors, status, touched }) => (
          <Form
            className="justify-content-between"
            style={
              {
                //   flex: "0 10%"
              }
            }
          >
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                type="text"
                style={{
                  width: "100%",
                }}
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
                type="text"
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
              <label htmlFor="phone">Phone</label>
              <Field
                name="phone"
                type="text"
                className={
                  "form-control" +
                  (errors.phone && touched.phone ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field
                name="address"
                type="text"
                className={
                  "form-control" +
                  (errors.address && touched.address ? " is-invalid" : "")
                }
              />
              <ErrorMessage
                name="address"
                component="div"
                className="invalid-feedback"
              />
            </div>
            <div className="form-group">
              <Button type="submit" variant="danger" className="mr-2">
                Submit
              </Button>
            </div>
          </Form>
        )}
      />
    </Container>
  );
};

export default Checkout;
