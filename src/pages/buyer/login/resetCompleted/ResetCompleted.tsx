import LoginBackground from "../../../../components/login/LoginBackground";
import styles from "./resetCompleted.module.scss";
import { LOGIN_PAGE_STRINGS } from "../../../../common/constants/stringConstants";
import ResetIcon from "../../../../assets/images/login/ResetIcon.svg";
import Button from "../../../../common/components/button/Button";
import { useNavigate } from "react-router-dom";

const ResetAccount = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.accountVerification}>
        <div className={styles.accountVerification__body}>
          <div className={styles.icon}>
            <img src={ResetIcon} alt="mail" />
          </div>
          <div className={styles.headerText}>
            {LOGIN_PAGE_STRINGS.RESET_COMPLETED}
          </div>
          <div className={styles.subheaderText}>
            {LOGIN_PAGE_STRINGS.RESET_COMPLETED_TEXT}
          </div>

          <div className={styles.resetComplete_button}>
            <Button
              width={"100%"}
              label={LOGIN_PAGE_STRINGS.SIGNIN}
              large={true}
              handleClick={() => {
                navigate("/signin");
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const ResetCompleted = () => {
  return (
    <LoginBackground
      form={
        <>
          <ResetAccount />
        </>
      }
    ></LoginBackground>
  );
};

export default ResetCompleted;
