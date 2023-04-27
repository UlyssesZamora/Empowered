import styles from "../styles/fNameLName.module.css";
const FirstLastName = ({
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
          <h2 className={styles.logInText}>Enter your Details</h2>
          <h5 className={styles.userTxt}>First Name</h5>
        </div>
        <div className={styles.userPassContainer}>
          <div className={styles.userBackground}>
            <input
              type="text"
              className={styles.userInput}
              value={formData.firstName}
              onChange={(event) =>
                setFormData({ ...formData, firstName: event.target.value })
              }
            ></input>
          </div>
          <h5 className={styles.passTxt}>Last Name</h5>
          <div className={styles.passBackground}>
            <input
              type="input"
              className={styles.passInput}
              value={formData.lastName}
              onChange={(event) =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            ></input>
          </div>
          <button className={styles.logInBtn} onClick={handleNextPage}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstLastName;
