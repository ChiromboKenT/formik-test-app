import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../components/button";
import styles from "./ContactForm.module.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectContact, submit } from "./contactSlice";

const ContactForm = () => {
  const initialValues = useAppSelector(selectContact);
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {} as any;
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        dispatch(submit(values));
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting, submitForm }) => (
        <Form className={styles.form}>
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder="example@example.com"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            className={styles.input}
            type="message"
            as="textarea"
            placeholder="Enter Message"
            name="message"
          />
          <ErrorMessage name="message" component="div" />

          <Button
            onClick={submitForm}
            type="button"
            text="submit"
            disabled={false}
            isLoading={isSubmitting}
            variation="primary"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
