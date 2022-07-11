import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectContact } from "../../features/contact-form/contactSlice";

const Modal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  const { message, email } = useAppSelector(selectContact);
  return isOpen ? (
    <div
      id="modal01"
      className=""
      style={{ display: "fixed", left: "50%", top: "40%", zIndex: "200" }}
    >
      <span className="" title="Close Modal Image" onClick={setIsOpen}>
        ×
      </span>
      <div className="">
        {email && (
          <p id="caption" className=" w3-large">
            {email}
          </p>
        )}
        {message && (
          <p id="caption" className=" w3-large">
            {message}
          </p>
        )}
      </div>
    </div>
  ) : null;
};

export default Modal;
