import styles from "../styles/referralPage.module.css";

const ReferralCode = ({
  formData,
  setFormData,
  page,
  setPage,
}: {
  formData: any;
  setFormData: Function;
  page: any;
  setPage: any;
}) => {
  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.topTextContainer}>
          <h2 className={styles.logInText}>Welcome</h2>
          <span className={styles.welcomeBack}>
            To sign up, please enter your access code.
          </span>
        </div>
        <div className={styles.userPassContainer}>
          <div className={styles.userBackground}>
            <input
              type="text"
              placeholder="Enter your code"
              className={styles.userInput}
              value={formData.referralCode}
              onChange={(event) =>
                setFormData({ ...formData, referralCode: event.target.value })
              }
            ></input>
          </div>

          <span className={styles.forgotPass}>
            Don't have an access code? <br />
            Join our waitlist
          </span>
          <button className={styles.logInBtn} onClick={handleNextPage}>
            Get Access
          </button>
        </div>
      </div>
    </>
  );
};

export default ReferralCode;
