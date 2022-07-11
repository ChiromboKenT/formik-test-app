import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Modal from "../../components/popup";
import ContactForm from "../../features/contact-form/ContactForm";
import { selectContact } from "../../features/contact-form/contactSlice";
import styles from "./Contact.module.css";
const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { isSubmitted } = useAppSelector(selectContact);
  useEffect(() => {
    isSubmitted && setModalOpen(true);
  }, [isSubmitted]);
  return (
    <div className={styles.container}>
      <Modal
        isOpen={modalOpen}
        setIsOpen={() => setModalOpen((modalOpen) => !modalOpen)}
      />

      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
