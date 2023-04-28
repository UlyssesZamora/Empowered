import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
import { PopupButton } from "react-calendly";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {

  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };
  useEffect(() => {
    const element = document.getElementById("root");
    if (element instanceof HTMLElement) {
      setRootElement(element);
    }
  }, []);

  // Define the configuration object as a constant
  const calendlyConfig = {
  url: 'https://calendly.com/dreasachz02',
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: true
};

  return isOpen ? (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
      <div className={styles.modalContainer}>
      <div className={styles.modalLeft}>
        <div className={styles.modalLeftTop}>
        
          <img className={CoffeeChatStyle.connectionCardAvatar}
                    src="/images/avatar.png"
          />
           <div>
            <p className={CoffeeChatStyle.connectionCardNameModal}>
              Profile Name
            </p>
            <p className={CoffeeChatStyle.connectionCardJobTitleModal}>
                job title
                </p>
           </div>
        </div>
        <div className={styles.modalLeftBottom}>
{/* Featured Skills */}
<div className={styles.modalSmallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
               </div>

                {/* Common Interests */}
               <div className={styles.modalSmallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>
        </div>

      </div>

      <div className={styles.modalRight}>
        {/* Upcoming Availability */}
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={CoffeeChatStyle.smallContainer}>
          
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="images/leftArrow.png" />
               </button>

                 {/* Availability 1 */}
                <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  9
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  10
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  JAN
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="images/rightArrow.png" />
               </button>
                </div>

              <div className ={CoffeeChatStyle.connectionCardDateSelected}>
              JAN 10
              </div>

              <div className ={styles.modalSmallContainer}>
                <div className = {CoffeeChatStyle.connectionCardTimeSlotsTag}>
                9:30-10:30
                </div>
                <div className = {CoffeeChatStyle.connectionCardTimeSlotsTag}>
                9:30-10:30
                </div>
                <div className = {CoffeeChatStyle.connectionCardTimeSlotsTag}>
                9:30-10:30
                </div>
                <div className = {CoffeeChatStyle.connectionCardTimeSlotsTag}>
                9:30-10:30
                </div>
                <div className = {CoffeeChatStyle.connectionCardTimeSlotsTag}>
                9:30-10:30
                </div>
                <div className = {CoffeeChatStyle.connectionCardTimeSlotsTag}>
                9:30-10:30
                </div>
        
              </div>


               <div className = {CoffeeChatStyle.smallContainerRequestMeeting}>
               <button className={CoffeeChatStyle.scheduleMeetingButton}>
               Request a meeting time
               </button>
                {/* <div>
                {rootElement && (
                  <PopupButton
                    url="https://calendly.com/dreasachz02"
                    rootElement={rootElement}
                    text="Click here to schedule!"
                    className = {CoffeeChatStyle.scheduleMeetingButton}
                  />
                )}
                </div> */}

               </div>
               <div className = {CoffeeChatStyle.smallContainerRequestMeetingCalendly}>
                <div>
                {rootElement && (
                  <PopupButton
                    url="https://calendly.com/usertestemail100"
                    rootElement={rootElement}
                    text="connect with Calendly"
                    className = {CoffeeChatStyle.scheduleMeetingCalendlyButton}
                  />
                )}
                </div>

               </div>

      </div>

        <div className={styles.content}>{children}</div>
      </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

