"use client";
import Link from "next/link";

import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam) {
      setError(errorParam);
    }
  }, [searchParams]);

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
          const res = await signIn("credentials", {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "/",
          });

          if (res?.error) {
            setError(res.error);
          } else {
            setError(null);
            if (res?.url) {
              window.location.href = res.url;
            }
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
              {/* CSS  ! ! ! */}
              {error && <div className="form-error">{error}</div>}
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
