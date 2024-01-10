import { constants } from "../../../constants/constants";
import Dropdown from "../dropdown/dropdown";
import styles from "./mobileNumberField.module.scss";

const MobileNumberField = ({
    label,
    selectedCountry = null,
    onCountryChange,
    onMobileNumberChange,
    errorMessage,
    registerMobileNumber,
    value
}: any) => {

    const countryList = constants.itemListTemp

    return (
        <>
            <div className={`${styles.inputLabelStyles} ${errorMessage ? styles.errorStyle : null}`}>{label}</div>
            <div className={`${styles.fieldWrapper} ${errorMessage ? styles.errorBorder : null}`}>
                <Dropdown
                    label=""
                    options={countryList}
                    defaultLabel={"Select an option"}
                    minWidth={"80px"}
                    selectedValue={selectedCountry ?? countryList[0]}
                    onChange={onCountryChange}
                    overlayWidth={"400px"}
                    id={"dropdown"}
                    isDropdownOutlineRequired={false}
                    isCountryList={true}
                />
                <div className={styles.rowSeperator}></div>
                <input
                    type={"phone"}
                    value={value}
                    data-testid={"phone"}
                    className={styles.inputField}
                    {...registerMobileNumber}
                    placeholder={"Enter your phone number"}
                    onChange={onMobileNumberChange}
                />
            </div>
            {errorMessage ? (
                <div className={styles.errorMessage}>
                    {errorMessage.toString()}
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default MobileNumberField;
