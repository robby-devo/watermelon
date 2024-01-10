import React, { useState } from "react";
import styles from "./ProductCardWithCart.module.scss";
import likedImage from "../../../assets/images/favourite-filled.svg";
import unlikedImage from "../../../assets/images/favourite.svg";
import watermelonApproved from "../../../assets/images/watermelon-approved.svg";
import offerImage from "../../../assets/images/offer.svg";
import newProductImage from "../../../assets/images/new.svg";
import ProductCardCta from "../productCardCta/ProductCardCta";
import productPlaceholder from "../../../assets/images/placeholder.svg";
import Dropdown from "../dropdown/Dropdown";
import { IProductCardWithCart } from "../../../models/IProductWithCart";

const bundleOptions = [
  {
    id: 1,
    value: "4",
    label: "4 bundles",
  },
  {
    id: 2,
    value: "3",
    label: "3 bundles",
  },
  {
    id: 3,
    value: "2",
    label: "2 bundles",
  },
  {
    id: 4,
    value: "1",
    label: "1 bundle",
  },
];
const ProductCardWithCart = (item: IProductCardWithCart) => {
  const {
    productName,
    productImage,
    outOfstockStatus,
    offerPercentage = 0,
    supllierType,
    delivered,
    TBC,
    countryFlag,
    countryName,
    offerPrice,
    actualPrice,
    supplierName,
    quantity = 5,
  } = item;
  const [value, setValue] = useState(bundleOptions[0]);
  const [count, setCount] = useState(0);

  const [favorite, setFavorite] = React.useState(false);
  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  const handleDropdownChange = (value: any) => {
    setValue(value);
  };
  const actualPriceValue = offerPrice
    ? offerPrice.toString().split(".")[0]
    : actualPrice?.toString().split(".")[0];

  const decimalprice = offerPrice
    ? offerPrice?.toString().split(".")[1]
    : actualPrice?.toString().split(".")[1];

  return (
    <>
      <div
        className={`${styles.productCardWithCartContainer} ${
          outOfstockStatus ? styles.disableCard : ""
        }${delivered ? styles.deliveredHeight : ""}`}
      >
        <div className={styles.backgroundImage}>
          {productImage ? (
            <img
              alt="productImage"
              className={styles.tinyLogo}
              src={productImage}
            />
          ) : (
            <img
              alt="productImage"
              className={styles.tinyLogoPlaceholder}
              src={productPlaceholder}
            />
          )}
          <div className={styles.imgHeader}>
            {TBC && <div className={styles.tbcContainer}>{TBC}</div>}
            {supllierType === "online" && !delivered && (
              <div
                data-testid="favourite-icon"
                className={styles.wishlist}
                onClick={() => handleFavorite()}
              >
                {favorite ? (
                  <img src={unlikedImage} alt="heart-filled" />
                ) : (
                  <img src={likedImage} alt="heart" />
                )}
              </div>
            )}
          </div>
          {offerPercentage > 0 && (
            <div className={styles.offerContainer}>
              <span className={styles.offerDetails}>Upto</span>
              <div className={styles.offerText}>
                <span className={styles.offerValue}>{offerPercentage}</span>
                <span className={styles.offerOff}>% off</span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.horizontalDivider} />
        <div className={styles.productDetailsCard}>
          <span className={styles.productName}>{productName}</span>
          <div className={styles.productDetailsTags}>
            <div className={styles.countryFlag}>
              <img src={countryFlag} alt="country-flag" />
            </div>
            <span className={styles.countryName}>{countryName}</span>
            {supllierType === "online" && (
              <>
                <div className={styles.verticalDivider} />
                <div className={styles.countryFlag}>
                  <img src={watermelonApproved} alt="country-flag" />
                </div>
                <div className={styles.countryFlag}>
                  <img src={offerImage} alt="country-flag" />
                </div>
                <div className={styles.countryFlag}>
                  <img src={newProductImage} alt="country-flag" />
                </div>
              </>
            )}
          </div>
          <div className={styles.priceSupplierNameContainer}>
            <div className={styles.priceContainer}>
              <div className={styles.salePriceContainer}>
                <span>AED</span>
                <span data-testid="actual-price" className={styles.salePrice}>
                  {actualPriceValue}
                </span>
                <span>.{decimalprice}</span>
              </div>
              {supllierType === "online" && (
                <div className={styles.originalPriceContainer}>
                  <span>AED</span>
                  <span className={styles.originalPrice}>{actualPrice}</span>
                </div>
              )}
            </div>
            {supllierType === "online" && (
              <div className={styles.supplierName}>{supplierName}</div>
            )}
          </div>
          {delivered ? (
            <div className={styles.delivered}>{quantity} x 100gm</div>
          ) : (
            <div className={styles.buttonContainer}>
              {outOfstockStatus ? (
                <div className={styles.outOfStockButton}>
                  <span>Out of Stock</span>
                </div>
              ) : (
                <div className={styles.addToCartButton}>
                  <Dropdown
                    onChange={handleDropdownChange}
                    minWidth={"96px"}
                    overlayWidth={"96px"}
                    height={"34px"}
                    defaultLabel="one"
                    selectedValue={value}
                    label=""
                    options={bundleOptions}
                    id="dropdown-bundle-options"
                  />
                  <ProductCardCta
                    value={count}
                    setValue={setCount}
                    width="96px"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCardWithCart;
