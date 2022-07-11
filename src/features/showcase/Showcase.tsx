import React from "react";
import styles from "./showcase.module.css";
import { useGetImagesQuery } from "./showcase.api";

const Showcase = () => {
  const { data, isLoading } = useGetImagesQuery("/photos");
  return isLoading ? (
    <></>
  ) : (
    data && (
      <>
        <div className="w3-row-padding" style={{ marginTop: "64px" }}></div>

        <div className={styles.row}>
          {data.slice(0, 3).map((image: any, index: number) => (
            <img
              key={`data-row-1-${index}`}
              src={image.url}
              style={{ width: "100%" }}
              className="w3-hover-opacity"
              alt="A tablet"
            />
          ))}
        </div>
        <div className={styles.row}>
          {data.slice(3, 6).map((image: any, index: number) => (
            <img
              key={`data-row-2-${index}`}
              src={image.url}
              style={{ width: "100%" }}
              className="w3-hover-opacity"
              alt="A tablet"
            />
          ))}
        </div>
        <div className={styles.row}>
          {data.slice(6).map((image: any, index: number) => (
            <img
              key={`data-row-3-${index}`}
              src={image.url}
              style={{ width: "100%" }}
              className="w3-hover-opacity"
              alt="A tablet"
            />
          ))}
        </div>
      </>
    )
  );
};

export default Showcase;
