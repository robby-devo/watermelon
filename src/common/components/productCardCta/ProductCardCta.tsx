import React, { useState } from "react";
import styles from "./ProductCardCta.module.scss";
import { IProductCardCtaProps } from "../../../models/IProductWithCart";

const ProductCardCta = ({ value, setValue, width }: IProductCardCtaProps) => {
  const [showAddItemValue, setShowAddItemValue] = useState(false);
  // console.log("value", value);

  const handleClick = () => {
    if (value === 0) {
      setValue(1);
      setShowAddItemValue(true);
    } else {
      setValue(0);
      setShowAddItemValue(false);
    }
  };

  const handlePositive = () => {
    setValue(value + 1);
  };

  const handleNegative = () => {
    if (value > 1) {
      setValue(value - 1);
    } else {
      setShowAddItemValue(false);
      setValue(1);
    }
  };
  return (
    <div style={{ width: width }} className={styles.productCardCtaContainer}>
      <button
        data-testid="add-button"
        className={`${styles.ctaButton} ${
          showAddItemValue ? styles.hideCta : ""
        }`}
        onClick={handleClick}
      >
        Add
      </button>
      {showAddItemValue && (
        <div
          data-testid="item-value-container"
          className={`${styles.addItemValueContainer} ${styles.showItemValueContainer}`}
        >
          <button
            data-testid="minus-button"
            className={`${styles.addItemValueButton} ${styles.minus}`}
            onClick={handleNegative}
          >
            -
          </button>
          <input
            data-testid="item-value"
            className={styles.addItemValue}
            value={value}
            onChange={(e) => {
              if (/^\d*$/.test(e.target.value)) {
                setValue(Number(e.target.value));
              }
            }}
          />
          <button
            data-testid="plus-button"
            className={`${styles.addItemValueButton} ${styles.plus}`}
            onClick={handlePositive}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCardCta;
