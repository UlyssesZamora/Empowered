import styles from "../styles/accountPage.module.css";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";
import { AccountSelected } from "../accountSelection";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AccountSelection = () => {
  const navigate = useNavigate();

  function setStatuesUser() {
    AccountSelected.currentLogin = 0;
    navigate("/loginpage");
  }

  function setStatuesCompany() {
    AccountSelected.currentLogin = 1;
    navigate("/loginpage");
  }

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <NavBar></NavBar>
      <div className={styles.pageContainer}>
        <div className={styles.midPageContainer}>
          <div className={styles.midPageContainerInner}>
            <div className={styles.topText}>
              <h4 className={styles.supportiveText}>Supportive</h4>
              <div className={styles.leftLine}></div>

              <h4 className={styles.trustedText}>Trusted</h4>
              <div className={styles.rightLine}></div>

              <h4 className={styles.inclusiveText}>Inclusive</h4>
            </div>
            <div className={styles.mainBodyContainer}>
              <div className={styles.mainBodyContainerInner}>
                <div className={styles.textContainer}>
                  <h1 className={styles.empoweredTitle}>Empowered</h1>
                  <h3 className={styles.inspoText}>
                    a vetted community for women & allies Empowering opportunity
                  </h3>
                </div>
                <div className={styles.imageContainer}>
                  <div className={styles.imageContainerInner}></div>
                  <div className={styles.ladyImgContainer}>
                    <img
                      src="images/img_screenshot20230222.png"
                      className={styles.ladyImg}
                    />
                  </div>
                  <div className={styles.roundedCircleContainer}>
                    <img
                      src="images/img_group7.svg"
                      className={styles.roundedCircle}
                    />
                    <div className={styles.medImgContainer}>
                      <img
                        src="images/img_screenshot20230222_124x129.png"
                        className={styles.medImg}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.topTextContainer}>
                  <h2 className={styles.accountText}>Choose an account</h2>
                  <span className={styles.welcomeBack}>
                    Welcome back! Please enter your details
                  </span>
                </div>
                <div className={styles.userPassContainer}>
                  <button
                    className={styles.selectAccount}
                    onClick={setStatuesUser}
                  >
                    <h1>Empowerd ID</h1>
                    <h6>Personal account </h6>
                  </button>

                  <button
                    className={styles.selectAccount}
                    onClick={setStatuesCompany}
                  >
                    <h1>Recruiter ID</h1>
                    <h6>Company or organization account </h6>
                  </button>

                  <a className={styles.cancel}>Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AccountSelection;
