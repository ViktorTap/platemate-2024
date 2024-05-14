"use client";

import Link from "next/link";

import loginUser from "../actions/auth";

import * as Yup from "yup";
import { Formik, Form, useField } from "formik";

interface CustomTextInputTypes {
  name: string;
  id?: string;
  label: string;
  type: string;
}

const CustomTextInput: React.FC<CustomTextInputTypes> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-box">
      <input
        className="text-input"
        id={meta.touched && meta.error ? "text-input-error" : ""}
        {...field}
        {...props}
      />
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error && (
        <span className="input-error-message">{meta.error}</span>
      )}
    </div>
  );
};

export default function LogIn() {
  interface LogInValues {
    email: string;
    password: string;
  }

  return (
    <>
      <Formik<LogInValues>
        initialValues={{
          email: "",
          password: "",
        }}
        validateOnMount
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string().required("Please enter a password"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          try {
            const res = await loginUser(values.email, values.password);

            if (typeof res === "object" && "message" in res) {
              console.log(res.message);
            } else {
              console.log("Log in might be successful. Check server logs.");
            }
          } catch (error) {
            console.error("Error in logging in:", error);
          }

          setSubmitting(false);
        }}
      >
        {(formik) => {
          return (
            <Form className="form-container">
              <CustomTextInput label="Email" name="email" type="email" />
              <CustomTextInput
                label="Password"
                name="password"
                type="password"
              />

              <button
                className="submit-button"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Log In
              </button>

              <button className="mt-2 w-3/4">
                <Link href="/account/registration" className="">
                  I want to register
                </Link>
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
