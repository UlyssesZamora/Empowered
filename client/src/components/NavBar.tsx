import { Location, useLocation, useNavigate } from "react-router-dom";
import NavBarStyle from "../styles/NavBarStyle.module.css";
import jwtDecode from "jwt-decode";
import { useState } from "react";
import search from "../assets/search-svgrepo-com.svg";
import bell from "../assets/bell-svgrepo-com.svg";
import userIcon from "../assets/user-01-svgrepo-com.svg";
import styles from "../styles/NavBarStyle.module.css";
import UserNotifications from "./userNotifications";

const NavBar = () => {
  const [modalOpen, setOpenModal] = useState(false);

  const location: Location = useLocation();
  const navigate: any = useNavigate();
  let pwd: string = location.pathname;

  // whereTo function is used to differentiate between user and company
  const whereTo = (pR: string) => {
    if (pR === "Profile") {
      let tok: any = jwtDecode(localStorage.getItem("jwt")!);
      const k: number = tok.key;
      console.log(k);
      navigate(`/userprofile/${k}`);
    }
  };
  /* HOME */
  if (pwd === "/") {
    return (
      <nav className={NavBarStyle.nav}>
        <a href="/">
          <img
            id="logo"
            src="/images/img_empowerd1.png"
            className={NavBarStyle.logo}
          />
        </a>
        <button onClick={() => {}} className={NavBarStyle.waitlistbutton}>
          {" "}
          Join the Waitlist
        </button>
      </nav>
    );
  } else if (pwd === "/loginpage") {
    /* LOGIN PAGE */
    return (
      <nav className={NavBarStyle.nav}>
        <a href="/">
          <img
            id="logo"
            src="/images/img_empowerd1.png"
            className={NavBarStyle.logo}
          />
        </a>
        <button onClick={() => {}} className={NavBarStyle.waitlistbutton}>
          {" "}
          Join the Waitlist
        </button>
      </nav>
    );
  } else if (pwd.includes("userprofile")) {
    /*USER PROFILE*/
    return (
      <div className={styles.header}>
        {modalOpen && <UserNotifications closeModal={setOpenModal} />}
        <div className={styles.inp_and_img}>
          <div className={styles.empowerd1}></div>
          <div>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Search"
            />
            <img src={search} alt="" className={styles.svg} />
          </div>
        </div>
        <button
          onClick={() => navigate("/coffeechat")}
          className={NavBarStyle.userProfilebutton}
        >
          Chai Now
        </button>
        <div className={styles.bell_and_prof}>
          <img
            src={bell}
            alt="Bell icon"
            onClick={() => setOpenModal(true)}
            className={styles.bell}
          />
          <img
            src={userIcon}
            alt="user icon"
            className={`${styles.bell} ${styles.user}`}
          />
        </div>
      </div>
    );
  } else if (pwd.includes("companyprofile")) {
    /*COMPANY PROFILE*/
    return (
      <div className={styles.header}>
        {modalOpen && <UserNotifications closeModal={setOpenModal} />}
        <div className={styles.inp_and_img}>
          <div className={styles.empowerd1}>
            <a href="/">
              <img
                id="logo"
                src="/images/img_empowerd1.png"
                className={NavBarStyle.logo}
              />
            </a>
          </div>
          <div>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Search"
            />
            <img src={search} alt="" className={styles.svg} />
          </div>
        </div>
        <button
          onClick={() => navigate("/coffeechat")}
          className={NavBarStyle.userProfilebutton}
        >
          Chai Now
        </button>
        <div className={styles.bell_and_prof}>
          <img
            src={bell}
            alt="Bell icon"
            onClick={() => setOpenModal(true)}
            className={styles.bell}
          />
          <img
            src={userIcon}
            alt="user icon"
            className={`${styles.bell} ${styles.user}`}
          />
        </div>
      </div>
    );
  } else if (pwd.includes("coffeechat")) {
    /*COFFEE CHAT*/
    return (
      <div className={styles.header}>
        {modalOpen && <UserNotifications closeModal={setOpenModal} />}
        <div className={styles.inp_and_img}>
          <div className={styles.empowerd1}></div>
          <div>
            <input
              className={styles.inputField}
              type="text"
              placeholder="Search"
            />
            <img src={search} alt="" className={styles.svg} />
          </div>
        </div>
        <button
          className={NavBarStyle.coffeechatbutton}
          onClick={() => whereTo("Profile")}
        >
          Profile
        </button>
        <div className={styles.bell_and_prof}>
          <img
            src={bell}
            alt="Bell icon"
            onClick={() => setOpenModal(true)}
            className={styles.bell}
          />
          <img
            src={userIcon}
            alt="user icon"
            className={`${styles.bell} ${styles.user}`}
          />
        </div>
      </div>
    );
  }
};

export default NavBar;
