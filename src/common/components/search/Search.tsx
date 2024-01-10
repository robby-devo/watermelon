import styles from "./Search.module.scss";
import gobalSearchIcon from "../../../assets/images/global-search.svg";
import Dropdown from "../formFields/dropdown/dropdown";
import { SearchProps } from "../../../models/ISearch";

const Search = ({
  placeholder,
  showDropdown,
  searchDropdownOptions,
  searchDropdownValue,
  setSearchDropdownValue,
  handleCategoryDropdownChange,
}: SearchProps) => {
  return (
    <div className={styles.container}>
      {showDropdown && (
        <div className={styles.dropdownContainer}>
          <Dropdown
            onChange={handleCategoryDropdownChange}
            selectedValue={searchDropdownValue}
            customClass="searchDropdown"
            margin="0"
            label=""
            options={searchDropdownOptions}
            defaultLabel=""
            id="searchDropdown"
          />
        </div>
      )}
      <input type="search" placeholder={placeholder} />
      <div className={styles.globalSearch}>
        <img src={gobalSearchIcon} alt="global-search" />
      </div>
    </div>
  );
};

export default Search;
