export interface IProductCardWithCart {
  id?: string | number;
  supllierType: "online" | "offline" | any;
  delivered?: boolean;
  productName?: string;
  productImage?: string;
  offerPercentage?: number;
  offerPrice?: number;
  actualPrice?: number;
  liked?: boolean;
  outOfstockStatus?: boolean;
  TBC?: string;
  countryFlag?: string;
  countryName?: string;
  productQuantity?: number;
  supplierName?: string;
  quantity?: number;
  bundleOptions?: IBundleOptions[];
  handleDropdown?: (e: any) => void;
}

export interface IProductCardCtaProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  width?: string;
}

export interface IBundleOptions {
  id: string | number;
  label: string;
  value: any;
}
