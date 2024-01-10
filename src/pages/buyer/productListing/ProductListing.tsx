import React, { useState } from "react";
import styles from "./ProductListing.module.scss";
import productImageDummy from "../../../assets/images/product-image.png";
import productImage from "../../../assets/images/product-image2.png";
import productImage1 from "../../../assets/images/product-image3.png";
import productImage2 from "../../../assets/images/product-image4.png";
import productImage3 from "../../../assets/images/product-image5.png";
import productImage4 from "../../../assets/images/product-image6.png";
import productImage5 from "../../../assets/images/product-image7.png";
import ProductCardWithCart from "../../../common/components/productCardWithCart/ProductCardWithCart";
import countryFlag from "../../../assets/images/flag.png";
import PaginationComponent from "../../../common/components/pagination/Pagination";
import Button from "../../../common/components/button/Button";

const ProductListing = () => {
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
      outOfstockStatus: true,
      liked: false,
      offerPercentage: 0,
      actualPrice: 49.99,
      offerPrice: 49.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Denim World",
      supllierType: "online",
    },
    {
      id: 3,
      productName: "Red Sneakers",
      // productImage: productImage1,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 79.99,
      offerPrice: 67.99,
      productDeliveryStatus: false,
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
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Travel Gear",
      supllierType: "online",
    },
    {
      id: 5,
      productName: "White Dress",
      productImage: productImage3,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 20,
      actualPrice: 59.99,
      offerPrice: 47.99,
      productDeliveryStatus: false,
      productQuantity: 7,
      supplierName: "Elegant Fashion",
      supllierType: "online",
    },
    {
      id: 6,
      productName: "Brown Leather Wallet",
      productImage: productImage4,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 5,
      actualPrice: 29.99,
      offerPrice: 28.49,
      productDeliveryStatus: false,
      productQuantity: 2,
      supplierName: "Leather Emporium",
      supllierType: "online",
    },
    {
      id: 7,
      productName: "Pink Headphones",
      productImage: productImage5,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 34.99,
      offerPrice: 34.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Sound Waves",
      supllierType: "online",
    },
    {
      id: 8,
      productName: "Yellow Sunglasses",
      productImage: productImageDummy,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 12,
      actualPrice: 19.99,
      offerPrice: 17.59,
      productDeliveryStatus: false,
      productQuantity: 4,
      supplierName: "Fashionista Shades",
      supllierType: "online",
    },
    {
      id: 9,
      productName: "Purple Yoga Mat",
      productImage: productImage,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 29.99,
      offerPrice: 29.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Yoga Bliss",
      supllierType: "online",
    },
    {
      id: 10,
      productName: "Orange Water Bottle",
      productImage: productImage1,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 8,
      actualPrice: 12.99,
      offerPrice: 11.95,
      productDeliveryStatus: false,
      productQuantity: 9,
      supplierName: "Hydration Zone",
      supllierType: "online",
    },

    {
      id: 11,
      productName: "Blue Backpack",
      productImage: productImage2,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 39.99,
      offerPrice: 33.99,
      productDeliveryStatus: false,
      productQuantity: 6,
      supplierName: "Adventure Gear",
      supllierType: "online",
    },
    {
      id: 12,
      productName: "Black Running Shoes",
      productImage: productImage3,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 89.99,
      offerPrice: 89.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Sporty Feet",
      supllierType: "online",
    },
    {
      id: 13,
      productName: "Red Laptop Bag",
      productImage: productImage4,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 10,
      actualPrice: 54.99,
      offerPrice: 49.49,
      productDeliveryStatus: false,
      productQuantity: 5,
      supplierName: "Tech Gear",
      supllierType: "online",
    },
    {
      id: 14,
      productName: "Green Umbrella",
      productImage: productImage5,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 5,
      actualPrice: 19.99,
      offerPrice: 18.99,
      productDeliveryStatus: false,
      productQuantity: 3,
      supplierName: "Rainy Day Essentials",
      supllierType: "online",
    },
    {
      id: 15,
      productName: "White Sneakers",
      productImage: productImageDummy,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 74.99,
      offerPrice: 74.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Sporty Feet",
      supllierType: "online",
    },
    {
      id: 16,
      productName: "Brown Leather Belt",
      productImage: productImage,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 12,
      actualPrice: 29.99,
      offerPrice: 26.39,
      productDeliveryStatus: false,
      productQuantity: 4,
      supplierName: "Leather Emporium",
      supllierType: "online",
    },
    {
      id: 17,
      productName: "Pink Phone Case",
      productImage: productImage1,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 15.99,
      offerPrice: 15.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Tech Accessories",
      supllierType: "online",
    },
    {
      id: 18,
      productName: "Yellow Beach Towel",
      productImage: productImage2,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 21.99,
      offerPrice: 18.69,
      productDeliveryStatus: false,
      productQuantity: 7,
      supplierName: "Beach Vibes",
      supllierType: "online",
    },
    {
      id: 19,
      productName: "Purple Yoga Block",
      productImage: productImage3,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 12.99,
      offerPrice: 12.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Yoga Bliss",
      supllierType: "online",
    },
    {
      id: 20,
      productName: "Orange Water Bottle",
      productImage: productImage4,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 8,
      actualPrice: 12.99,
      offerPrice: 11.95,
      productDeliveryStatus: false,
      productQuantity: 9,
      supplierName: "Hydration Zone",
      supllierType: "online",
    },
    {
      id: 21,
      productName: "Blue Backpack",
      productImage: productImage5,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 39.99,
      offerPrice: 33.99,
      productDeliveryStatus: false,
      productQuantity: 6,
      supllierType: "online",
      supplierName: "Adventure Gear",
    },
    {
      id: 22,
      productName: "Black Running Shoes",
      productImage: productImageDummy,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 89.99,
      offerPrice: 89.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Sporty Feet",
      supllierType: "online",
    },
    {
      id: 23,
      productName: "Red Laptop Bag",
      productImage: productImage,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 10,
      actualPrice: 54.99,
      offerPrice: 49.49,
      productDeliveryStatus: false,
      productQuantity: 5,
      supplierName: "Tech Gear",
      supllierType: "online",
    },
    {
      id: 24,
      productName: "Green Umbrella",
      productImage: productImage1,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 5,
      actualPrice: 19.99,
      offerPrice: 18.99,
      productDeliveryStatus: false,
      productQuantity: 3,
      supplierName: "Rainy Day Essentials",
      supllierType: "online",
    },
    {
      id: 25,
      productName: "White Sneakers",
      productImage: productImage2,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 74.99,
      offerPrice: 74.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Sporty Feet",
      supllierType: "online",
    },
    {
      id: 26,
      productName: "Brown Leather Belt",
      productImage: productImage3,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 12,
      actualPrice: 29.99,
      offerPrice: 26.39,
      productDeliveryStatus: false,
      productQuantity: 4,
      supplierName: "Leather Emporium",
      supllierType: "online",
    },
    {
      id: 27,
      productName: "Pink Phone Case",
      productImage: productImage4,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 15.99,
      offerPrice: 15.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Tech Accessories",
      supllierType: "online",
    },
    {
      id: 28,
      productName: "Yellow Beach Towel",
      productImage: productImage5,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 21.99,
      offerPrice: 18.69,
      productDeliveryStatus: false,
      productQuantity: 7,
      supplierName: "Beach Vibes",
      supllierType: "online",
    },
    {
      id: 29,
      productName: "Purple Yoga Block",
      productImage: productImageDummy,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 12.99,
      offerPrice: 12.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Yoga Bliss",
      supllierType: "online",
    },
    {
      id: 30,
      productName: "Purple Yoga Block",
      productImage: productImage,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 12.99,
      offerPrice: 12.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Yoga Bliss",
      supllierType: "online",
    },
    {
      id: 31,
      productName: "Yellow Beach Towel",
      productImage: productImage5,
      outOfstockStatus: false,
      liked: true,
      offerPercentage: 15,
      actualPrice: 21.99,
      offerPrice: 18.69,
      productDeliveryStatus: false,
      productQuantity: 7,
      supplierName: "Beach Vibes",
      supllierType: "online",
    },
    {
      id: 32,
      productName: "Purple Yoga Block",
      productImage: productImageDummy,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 12.99,
      offerPrice: 12.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Yoga Bliss",
      supllierType: "online",
    },
    {
      id: 33,
      productName: "Purple Yoga Block",
      productImage: productImage,
      outOfstockStatus: false,
      liked: false,
      offerPercentage: 0,
      actualPrice: 12.99,
      offerPrice: 12.99,
      productDeliveryStatus: false,
      productQuantity: 0,
      supplierName: "Yoga Bliss",
      supllierType: "online",
    },
  ];

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const visibleProducts = products.slice(firstIndex, lastIndex);

  const handlePagination = (e: any, page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className={styles.container}>
        {/* <div className={styles.filter}></div> */}
        <div className={styles.cardsContainer}>
          {visibleProducts &&
            visibleProducts.map((product) => (
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
          <div className={styles.paginationContainer}>
            <PaginationComponent
              count={Math.ceil(products.length / itemsPerPage)}
              page={currentPage}
              handlePagination={handlePagination}
            />
          </div>
        </div>
      </div>
      <div className={styles.itemViewedPreviously}>
        <div className={styles.headingContainer}>
          <p>Items viewed previously</p>
          <Button label="View all" link handleClick={() => {}} width="auto" />
        </div>
        <div className={styles.previousItemContainer}>
          {products &&
            products
              .slice(0, 4)
              .map((product) => (
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
    </>
  );
};

export default ProductListing;
