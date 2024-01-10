import LoginBackground from "../../../../components/login/LoginBackground";
import styles from "./resetLink.module.scss";
import mailIcon from "../../../../assets/images/login/mailIcon.svg";
import arrowLeft from "../../../../assets/images/login/arrowLeft.svg";

import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import { useNavigate } from "react-router-dom";
import { routeConfig } from "../../../../common/constants/routeConfig";

const ResetLinkComp = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.resetLink}>
        <div className={styles.resetLink__goback} id="back">
          <img
            src={arrowLeft}
            alt="arrow"
            onClick={() => {
              navigate(routeConfig.forgotPassword);
            }}
          />
          <span>{LOGIN_PAGE_STRINGS.BACK}</span>
        </div>
        <div className={styles.accountVerification__body}>
          <div className={styles.icon}>
            <img src={mailIcon} alt="mail" />
          </div>
          <div className={styles.headerText}>
            {LOGIN_PAGE_STRINGS.RESET_LINK_LABEL}
          </div>
          <div className={styles.subheaderText}>
            {LOGIN_PAGE_STRINGS.RESET_LINK_TEXT}
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

        <div
          className={styles.accountVerification__footer}
          onClick={() => {
            navigate(routeConfig.forgotPassword);
          }}
        >
          <div className={styles.link_primary}>
            {LOGIN_PAGE_STRINGS.CHANGE_EMAIL}
          </div>
        </div>
      </section>
    </>
  );
};

const ResetLink = () => {
  return (
    <LoginBackground
      form={
        <>
          <ResetLinkComp />
        </>
      }
    ></LoginBackground>
  );
};

export default ResetLink;
