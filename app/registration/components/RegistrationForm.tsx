"use client";

import * as yup from "yup";
import { useFormik } from "formik";

export default function RegistrationForm() {
  interface FormValues {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
    email: string;
  }

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    address: yup.string(),
    phone: yup.string(),
    email: yup.string().email().required("Email is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/*FIRST NAME*/}

      <div>
        {/* <label htmlFor="firstName">Name</label> */}
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </div>

      {/*LAST NAME*/}

      <div>
        {/* <label htmlFor="lastName">Last name</label> */}
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Surname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </div>

      {/*ADDRESS*/}

      <div>
        {/* <label htmlFor="address">Address</label> */}
        <input
          id="address"
          name="address"
          type="text"
          placeholder="Address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}
      </div>

      {/*PHONE*/}

      <div>
        {/* <label htmlFor="phone">Phone</label> */}
        <input
          id="phone"
          name="phone"
          type="text"
          placeholder="Phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}
      </div>

      {/*EMAIL*/}

      <div>
        {/* <label htmlFor="email">Email</label> */}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit" disabled={!formik.isValid}>
        Submit
      </button>
    </form>
  );
}
