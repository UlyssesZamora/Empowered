import {Location, useLocation, useNavigate } from "react-router-dom";
import NavBarStyle from "../styles/NavBarStyle.module.css"
import jwtDecode from "jwt-decode";
import React, { Component, useEffect, useState } from "react";
import search from "../assets/search-svgrepo-com.svg";
import bell from "../assets/bell-svgrepo-com.svg";
import userIcon from "../assets/user-01-svgrepo-com.svg";
import styles from "../styles/NavBarStyle.module.css";
import UserNotifications from "./userNotifications";


const NavBar = () => {

const [modalOpen, setOpenModal] = useState(false);

  const location: Location = useLocation();
  const navigate: any= useNavigate();
  let pwd: string = location.pathname; 
  
  // whereTo function is used to differentiate between user and company
  const whereTo = (pR: string) => {
    if(pR === "Profile"){
      let tok: any= jwtDecode(localStorage.getItem("jwt")!);
      const k: number= tok.key;
      console.log(k)
      navigate(`/userprofile/${k}`)
    }
  }
  /* HOME */
  if(pwd === "/"){
    return (
      <nav className={NavBarStyle.nav}>
        <a href="/">
        <img id="logo" src="/images/img_empowerd1.png" className={NavBarStyle.logo}/>
        </a>
        <button onClick={() =>  {}} className={NavBarStyle.button}> Join the Waitlist</button>
      </nav>
    );
  }
  /* LOGIN PAGE */
  else if(pwd === "/loginpage"){
    return (
      <nav className={NavBarStyle.nav}>
        <a href="/">
        <img id="logo" src="/images/img_empowerd1.png" className={NavBarStyle.logo}/>
        </a>
      </nav>
    );
  }
  /*USER PROFILE*/
  else if(pwd.includes("userprofile")){
    return (
    <div className={styles.header}>
        {modalOpen && (
            <UserNotifications closeModal={setOpenModal}/>
        )}
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
      <div className={styles.bell_and_prof}>
        <img src={bell} alt="Bell icon" onClick={() => setOpenModal(true)} className={styles.bell} />
        <img
          src={userIcon}
          alt="user icon"
          className={`${styles.bell} ${styles.user}`}
        />
      </div>
    </div>
  );
  }
  /*COMPANY PROFILE*/
  else if(pwd.includes("companyprofile")){
    return (
      <nav className={NavBarStyle.nav}>
        <a href="/">
        <img id="logo" src="/images/img_empowerd1.png" className={NavBarStyle.logo}/>
        </a>
        
        {/* search box */}
        <input
          type="text"
          placeholder="Search.."
          className={NavBarStyle.search}
        />
        <button className={NavBarStyle.searchbutton}>
          <img src="./src/assets/search.png" />
        </button>
        <button onClick={() => navigate("/coffeechat")} className={NavBarStyle.button}>
        Chai Now 
        </button>
        <img
          className={NavBarStyle.logoAvatar}
          src="../src/assets/companyLogo.png"
        />
      </nav>
    );
  }
  /*COFFEE CHAT*/
  else if(pwd.includes("coffeechat")){
    return (
      <nav className={NavBarStyle.nav}>
        <a href="/">
        <img id="logo" src="/images/img_empowerd1.png" className={NavBarStyle.logo}/>
        </a>
        {/*<button className={NavBarStyle.navBtn}> Join the Waitlist</button>*/}
        
        {/* search box */}
        <input
          type="text"
          placeholder="Search.."
          className={NavBarStyle.search}
        />
        <button className={NavBarStyle.searchbutton}>
          <img src="./src/assets/search.png" />
        </button>
        <button className={NavBarStyle.button} onClick={() => whereTo("Profile")}> 
        Profile
        </button>
        <select>
        <img
          className={NavBarStyle.logoAvatar}
          src="./src/assets/avatar.png"
        />
        <option value="">Account</option>
        <a><option value="">Sign Out</option></a>
        </select>
      </nav>
    );
  }
  
};

export default NavBar;
