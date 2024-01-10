import productImageDummy from "../../assets/images/product-image.png";
import countryFlag from "../../assets/images/flag.png";
import freshFruits from "../../assets/images/fresh-food.svg";
import productImage from "../../assets/images/product-image2.png";
import productImage1 from "../../assets/images/product-image3.png";
import productImage2 from "../../assets/images/product-image4.png";
import styles from "./ProductListingPage.module.scss";

import React, { useEffect } from "react";
import SideNav from "../../common/components/sideNav/SideNav";
import Header from "../../common/components/header/Header";
import ProductListing from "../buyer/productListing/ProductListing";
import Button from "../../common/components/button/Button";
import CategoryCard from "../../common/components/categoryCard/CategoryCard";
import CheckboxButton from "../../common/components/checkbox/CheckboxButton";
import RadioButton from "../../common/components/radio/RadioButton";
import BasicSwitch from "../../common/components/switch/Switch";
import UserSwitch from "../../common/components/userSwitch/UserSwitch";
import PaginationComponent from "../../common/components/pagination/Pagination";
import ProductCardCta from "../../common/components/productCardCta/ProductCardCta";
import ProductCardWithCart from "../../common/components/productCardWithCart/ProductCardWithCart";

const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      productName: "Blue T-Shirt",
      productImage: productImageDummy,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 10,
      actualPrice: 25.99,
      offerPrice: 23.39,
      productDeliveryStatus: false,
      productQuantity: 5,
      supplierName: "Fashion Hub",
      supllierType: "online",
    },
    {
      id: 2,
      productName: "Black Jeans",
      productImage: productImage,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 49.99,
      offerPrice: 49.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Denim World",
      supllierType: "offline",
    },
    {
      id: 3,
      productName: "Red Sneakers",
      productImage: productImage1,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 79.99,
      offerPrice: 67.99,
      productDeliveryStatus: true,
      productQuantity: 3,
      supplierName: "Sporty Feet",
      supllierType: "online",
    },
    {
      id: 4,
      productName: "Green Backpack",
      productImage: productImage2,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 39.99,
      offerPrice: 39.99,
      productDeliveryStatus: true,
      productQuantity: 0,
      supplierName: "Travel Gear",
      supllierType: "offline",
    },
  ];
  const [value, setValue] = React.useState(0);
  const [showCommonComponent, setShowCommonComponent] = React.useState(true);
  const [checked, setChecked] = React.useState(true);
  useEffect(() => {
    console.log("useEffect", setShowCommonComponent);
  }, []);
  return (
    <div className={styles.app}>
      <SideNav userType="buyer" />
      <div className={styles.bodyContainer}>
        <Header />
        {showCommonComponent ? (
          <ProductListing />
        ) : (
          <div className={styles.commonComponent}>
            <div>
              <h1>Buttons</h1>
              <div className={styles.buttonComponent}>
                <Button label="Primary Button" handleClick={() => {}} />
                <Button label="Primary Button" large handleClick={() => {}} />
                <Button
                  label="Primary Button"
                  disabled
                  handleClick={() => {}}
                />
                <Button label="Secondary Button" handleClick={() => {}} />
                <Button label="Secondary Button" large handleClick={() => {}} />
                <Button
                  label="Secondary Button"
                  disableSecondary
                  handleClick={() => {}}
                />
                <Button label="Link Button" link handleClick={() => {}} />
              </div>
            </div>
            <div>
              <h1>Category Card</h1>
              <CategoryCard
                imgSrc={freshFruits}
                handleCardClick={() => {}}
                title="Fresh Food"
                id={1}
              />
            </div>
            <div>
              <h1>Checkbox</h1>
              <div style={{ display: "flex", gap: "20px" }}>
                <CheckboxButton checked={checked} setChecked={setChecked} />
                <CheckboxButton partiallySelected setChecked={setChecked} />
                <CheckboxButton disabled />
              </div>
            </div>
            <div>
              <h1>Radio</h1>
              <div style={{ display: "flex", gap: "20px" }}>
                <RadioButton checked={checked} setChecked={setChecked} />
                <RadioButton disabled />
              </div>
            </div>
            <div>
              <h1>Switch</h1>
              <div style={{ display: "flex", gap: "20px" }}>
                <BasicSwitch checked={checked} setChecked={setChecked} />
                <BasicSwitch
                  checked={false}
                  setChecked={setChecked}
                  switchType="dual"
                />
                <BasicSwitch disabled />
              </div>
            </div>
            <div>
              <h1>User Switch</h1>
              <div style={{ display: "flex", gap: "20px" }}>
                <UserSwitch />
              </div>
            </div>
            <div>
              <h1>Pagination</h1>
              <div style={{ display: "flex", gap: "20px" }}>
                <PaginationComponent
                  count={30}
                  page={1}
                  handlePagination={() => {}}
                />
              </div>
            </div>
            <div>
              <h1>Product Card CTA</h1>
              <div
                style={{ display: "flex", gap: "20px", position: "relative" }}
              >
                <ProductCardCta
                  value={value}
                  setValue={setValue}
                  width="96px"
                />{" "}
              </div>
            </div>
            <div>
              <h1>Product Card </h1>
              <div
                style={{ display: "flex", gap: "20px", position: "relative" }}
              >
                {products &&
                  products.map((product) => (
                    <ProductCardWithCart
                      key={product.id}
                      supllierType={product.supllierType}
                      delivered={product.productDeliveryStatus}
                      productName={product.productName}
                      productImage={product.productImage}
                      offerPercentage={product.offerPercentage}
                      offerPrice={product.offerPrice}
                      actualPrice={product.actualPrice}
                      liked={product.liked}
                      outOfstockStatus={product.outOfstockStatus}
                      TBC="TBC"
                      countryFlag={countryFlag}
                      countryName="IND"
                      productQuantity={product.productQuantity}
                      supplierName={product.supplierName}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
