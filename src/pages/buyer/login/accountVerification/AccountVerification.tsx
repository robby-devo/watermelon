import React from "react";
import LoginBackground from "../../../../components/login/LoginBackground";
import styles from "./accountVerfifcation.module.scss";

import mailIcon from "../../../../assets/images/login/mailIcon.svg";

import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import { useNavigate } from 'react-router-dom';
import { routeConfig } from "../../../../common/constants/routeConfig";


const VerifyAccount = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className={styles.accountVerification}>
        <div className={styles.accountVerification__body}>
          <div className={styles.icon}>
            <img src={mailIcon} alt="mail" />
          </div>
          <div className={styles.headerText}>
            {LOGIN_PAGE_STRINGS.VERIFY_ACCOUNT_LABEL}
          </div>
          <div className={styles.subheaderText}>
            {LOGIN_PAGE_STRINGS.VERIFY_ACCOUNT_TEXT}
            <span className={styles.email}>E*am*pl*@****.co*</span>
            <br />
            {LOGIN_PAGE_STRINGS.VERIFY_ACCOUNT_TEXT2}
          </div>
          <div className={styles.resendSection}>
            {LOGIN_PAGE_STRINGS.DIDNT_REC_MAIL}
            <span className={styles.link_primary}>
              {LOGIN_PAGE_STRINGS.RESEND}
            </span>
          </div>
        </div>

        <div className={styles.accountVerification__footer}>
          <div className={styles.link_primary} onClick={()=>{
            navigate(routeConfig.signin)

          }}>
            {LOGIN_PAGE_STRINGS.LOGIN_WITH_ACC}
          </div>
        </div>
      </section>
    </>
  );
};

export const AccountVerification = () => {
  return (
    <LoginBackground
      form={
        <>
          <VerifyAccount />
          {/* <ResetLink/> */}
        </>
      }
    ></LoginBackground>
  );
};

export default AccountVerification;
