import styles from "../styles/loginPage.module.css"
import LogInCard from "../components/LogInCard";
import ReferralCode from "../components/ReferrralCode";
import UserSignUpCard from "../components/UserSignUpCard";
import FirstLastName from "../components/FNameLNameCard";
import React, {useState} from "react";
import { useLocation } from "react-router-dom";

const TestPage = () => {
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        referralCode: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const location = useLocation();
    
    return (
        <>
        <div className={styles.pageContainer}>
          <div className={styles.nav}>
            <img src="images/img_empowerd1.png" className={styles.navImg} />
            <button className={styles.navBtn}> Join the Waitlist</button>
          </div>
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
                    {page === 0 && (
                        <ReferralCode formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>
                    )}

                    {page === 1 && (
                        <FirstLastName formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>
                    )}
                    
                    {page === 2 && (
                        <UserSignUpCard formData={formData} setFormData={setFormData} page={page} setPage={setPage}/>
                    )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default TestPage;