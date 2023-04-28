import a from "../styles/profilePicChange.module.css";
import userIcon from "../assets/user-01-svgrepo-com.svg";
import UserProfileStyle from "../styles/UserProfileStyle.module.css";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
const UserNotifications = ({
  closeModal,
}: {
  closeModal: (arg: boolean) => void;
}) => {

    const { id } = useParams();
    let lol: any = jwtDecode(localStorage.getItem("jwt")!);
    const [pendingFollowers, setPendingFollowers] = useState<any[]>([]);
    const navigate = useNavigate();


    const getPendingFollowers = () => {
        axios
        .get(`https://goldfish-app-wb78d.ondigitalocean.app/getPendingFollowers/${lol.key}`)
        .then((res:any) => {
            setPendingFollowers(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const onAcceptFollower = (followerId:any) => {
        axios
        .put("https://goldfish-app-wb78d.ondigitalocean.app/acceptFollowers", {followedId:lol.key, followerId:followerId})
        .then((res:any) => {
            console.log(res)
            window.location.reload()
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getPendingFollowers();
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "unset";
        };
      }, [])

      console.log(pendingFollowers)

  return (
    <div className={a.modalBackground} style={{marginTop:'715px'}}>
      <div className={a.modalContainer} style={{width:'495px', height:'611px'}}>
        <div className={a.titleCloseBtn}>
          <div style={{marginRight:'320px'}}>
            Notifications
          </div>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>

        <div style={{ backgroundColor: "black", height: "1px", marginLeft:'-24px', marginRight:'-24px' }}></div>
        <p style={{fontFamily:'Montserrat'}}>Connection Requests</p>

        {pendingFollowers.map((follower:any) => (
        <>
            <div style={{display:'flex', marginTop:'5px', marginBottom:'5px'}}>
                <img src={follower.userProfilePicture ? follower.userProfilePicture: userIcon} style={{width:'13%', borderRadius:'50%'}} alt="user icon"/>
                <div style={{marginLeft:'10px'}}>
                    <p style={{fontFamily:'Montserrat', cursor:'pointer'}} onClick={() => {navigate(`/userprofile/${follower.followerId}`); window.location.reload()}}>{follower.userFirstName + " "+ follower.userLastName}</p>
                    <p style={{fontFamily:'Montserrat', fontSize:'10px', marginTop:'-15px'}}>{follower.userCompanyName}</p>
                </div>
                <div style={{marginLeft:'auto', display:'flex'}}>
                    <p style={{fontFamily:'Montserrat'}}>Ignore</p>
                    <button  className={UserProfileStyle.rightTag} style={{cursor:'pointer', marginLeft:'10px', fontFamily:'Montserrat', marginTop:'11px', paddingTop:'1px'}} onClick={() => onAcceptFollower(follower.followerId)}>Accept</button>
                </div>
            </div>
            <div style={{ backgroundColor: "black", height: "1px", marginLeft:'-24px', marginRight:'-24px' }}></div>
        </>
        ))}

      </div>
    </div>
  );
};

export default UserNotifications;
