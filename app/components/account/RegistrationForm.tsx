"use client";

import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import { registerUser } from "@/app/actions/registration";

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

export default function RegistrationForm() {
  interface FormValues {
    firstName: string;
    lastName: string;
    address: object;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };

  return (
    <>
      <Formik<FormValues>
        initialValues={{
          firstName: "",
          lastName: "",
          address: { street: "", postalCode: "", city: "" },
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnMount
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First name is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Last name is required"),

          address: Yup.object().shape({
            street: Yup.string(),
            postalCode: Yup.string().max(10, "Must be 10 characters or less"),
            city: Yup.string(),
          }),

          phone: Yup.string().max(15, "Must be 15 characters or less"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password: Yup.string()
            .required("Please enter a password")
            .min(8, "Password must have at least 8 characters")
            .matches(/[0-9]/, getCharacterValidationError("digit"))
            .matches(/[a-z]/, getCharacterValidationError("lowercase"))
            .matches(/[A-Z]/, getCharacterValidationError("uppercase")),

          confirmPassword: Yup.string()
            .required("Please re-type your password")
            .oneOf([Yup.ref("password")], "Passwords does not match"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const res = await registerUser(values);

            if (typeof res === "object" && "message" in res) {
              console.log(res.message);
            } else {
              console.log(
                "Registration might be successful. Check server logs."
              );
            }
          } catch (error) {
            console.error("Error in registration:", error);
          }

          setSubmitting(false);
        }}
      >
        {(formik) => {
          return (
            <Form className="form-container">
              <CustomTextInput
                label="First Name"
                name="firstName"
                type="text"
              />
              <CustomTextInput label="Last Name" name="lastName" type="text" />
              <CustomTextInput
                label="Street"
                name="address.street"
                type="text"
              />
              <CustomTextInput
                label="Postal Code"
                name="address.postalCode"
                type="text"
              />
              <CustomTextInput label="City" name="address.city" type="text" />
              <CustomTextInput label="Phone" name="phone" type="text" />
              <CustomTextInput label="Email" name="email" type="email" />
              <CustomTextInput
                label="Password"
                name="password"
                type="password"
              />
              <CustomTextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />

              <button
                className="submit-button"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Register Me
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
