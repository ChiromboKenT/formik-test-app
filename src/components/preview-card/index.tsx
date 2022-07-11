import React, { MouseEventHandler } from "react";

const PreviewCard = ({
  img,
  onClick,
}: {
  img: string;
  onClick: MouseEventHandler<HTMLElement>;
}) => {
  return (
    <div className="w3-col l3 m6" onClick={onClick}>
      <img
        src={img}
        style={{ width: "100%" }}
        className="w3-hover-opacity"
        alt="A tablet"
      />
    </div>
  );
};

export default PreviewCard;
