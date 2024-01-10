import { useState } from "react";
import styles from "./Header.module.scss";
import wishlistHeaderIcon from "../../../assets/images/wishlish-header.svg";
import wishListHoverIcon from "../../../assets/images/wishlistHeaderhover.svg";
import cartHeaderIcon from "../../../assets/images/headerCart.svg";
import cartHeaderHoverIcon from "../../../assets/images/headerCartHover.svg";
import Search from "../search/Search";
import Dropdown from "../formFields/dropdown/dropdown";
import dropDownIcon from "../../../assets/images/icons-home-dollar.svg";
import { HeaderDropdownOptions, HeaderProps } from "../../../models/IHeader";

const countryDropdownOptions: HeaderDropdownOptions[] = [
  {
    id: 1,
    label: "Al-Baraha",
    value: "Al-Baraha",
  },
  {
    id: 2,
    label: "India",
    value: "India",
  },
  {
    id: 3,
    label: "USA",
    value: "USA",
  },
  {
    id: 4,
    label: "UK",
    value: "UK",
  },
];
const allCategoriesDropdownOptions: HeaderDropdownOptions[] = [
  {
    id: 1,
    label: "All Categories",
    value: "All Categories",
  },
  {
    id: 2,
    label: "Fruits",
    value: "Fruits",
  },
  {
    id: 3,
    label: "Vegetables",
    value: "Vegetables",
  },
  {
    id: 4,
    label: "Meat",
    value: "Meat",
  },
  {
    id: 5,
    label: "Seafood",
    value: "Seafood",
  },
];
const Header = ({ cartValue = 1 }: HeaderProps) => {
  const [isWishlistHover, setIsWishlistHover] = useState(false);
  const [isCartHover, setIsCartHover] = useState(false);
  const [value, setValue] = useState(countryDropdownOptions[0]);
  const [searchDropdownValue, setSearchDropdownValue] = useState(
    allCategoriesDropdownOptions[0]
  );
  const handleDropdownChange = (value: HeaderDropdownOptions) => {
    setValue(value);
  };
  const handleCategoryDropdownChange = (value: HeaderDropdownOptions) => {
    setSearchDropdownValue(value);
  };
  // const [scroller, initScroller] = useState(0);
  // const handleScroll = (event: any) => {
  //   const height = event.currentTarget.clientHeight;
  //   const barHeight = event.currentTarget.scrollHeight;
  //   const scrollTop = event.currentTarget.scrollTop;
  //   initScroller(((scrollTop + height) / barHeight) * 100);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.dropdownContainer}>
        <Dropdown
          id="countryDropdown"
          margin="0"
          icon={dropDownIcon}
          onChange={handleDropdownChange}
          minWidth="133px"
          label=""
          selectedValue={value}
          options={countryDropdownOptions}
          defaultLabel=""
          isDropdownOutlineRequired={true}
          customClass="countryDropdown"
        />
      </div>
      <div className={styles.searchContainer}>
        <Search
          searchDropdownValue={searchDropdownValue}
          setSearchDropdownValue={setSearchDropdownValue}
          searchDropdownOptions={allCategoriesDropdownOptions}
          handleCategoryDropdownChange={handleCategoryDropdownChange}
          showDropdown={true}
          placeholder="Search for your supply soulmate!"
        />
      </div>
      <div className={styles.ctaContainer}>
        <div
          className={styles.wishlist}
          onMouseOver={() => setIsWishlistHover(true)}
          onMouseLeave={() => setIsWishlistHover(false)}
        >
          {isWishlistHover ? (
            <img src={wishListHoverIcon} alt="wishlist-icon-hover" />
          ) : (
            <img src={wishlistHeaderIcon} alt="wishlist-icon" />
          )}
        </div>
        <div
          data-testid="cart"
          className={styles.cart}
          onMouseOver={() => setIsCartHover(true)}
          onMouseLeave={() => setIsCartHover(false)}
        >
          {isCartHover ? (
            <img src={cartHeaderHoverIcon} alt="cart-icon-hover" />
          ) : (
            <img src={cartHeaderIcon} alt="cart-icon" />
          )}
          {cartValue > 0 && (
            <div data-testid="cartValue" className={styles.badge}>
              {cartValue}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
