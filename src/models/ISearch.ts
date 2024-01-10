interface SearchOption {
  label: string;
  value: string;
}

export interface SearchProps {
  placeholder: string;
  showDropdown?: boolean;
  searchDropdownOptions?: SearchOption[];
  searchDropdownValue?: SearchOption;
  setSearchDropdownValue?: (value: SearchOption) => void;
  handleCategoryDropdownChange?: (value: SearchOption) => void;
}
