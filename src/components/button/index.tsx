import React from "react";
import styles from "./button.module.css";
import PulseLoader from "react-spinners/PulseLoader";

const Button = ({
  type,
  disabled,
  variation,
  isLoading,
  text,
  onClick,
}: {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  variation: "primary" | "secondary";
  isLoading?: boolean;
  text: string;
  onClick: any;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={styles[variation]}
      disabled={disabled}
    >
      {isLoading ? (
        <span>
          <span style={{ marginRight: "5px" }}>Loading</span>
          <PulseLoader
            color={variation === "primary" ? "#fff" : "#000"}
            loading={isLoading}
            size={5}
          />
        </span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
