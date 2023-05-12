import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FilterBy from "../components/FilterBy";
import Calendar from "../components/Calendar";
import styles from "../styles/Calendar.module.css";

const CoffeeChat = () => {

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // const [email, setEmail] = useState<string[]>([]);


  const onSelectSkills = (skillArr: string[]) => {
    setSelectedSkills(skillArr);
  };

  const onSelectInterests = (interestArr: string[]) => {
    setSelectedInterests(interestArr);
  };

  const onSelectValues = (valueArr: string[]) => {
    setSelectedValues(valueArr);
  };


  /// Can be changed to switch case ////

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOpen2 = () => {
    setIsOpen2(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClose2 = () => {
    setIsOpen2(false);
  };
// Define the configuration object as a constant
const calendlyConfig = {
  url: 'https://calendly.com/dreasachz02',
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: true
};

  const redirectToVideoChat = () => {
    window.location.href = "https://monkfish-app-envaa.ondigitalocean.app/";
  }



  return (
    <div className={CoffeeChatStyle.pageBackground}>
      {/* @ts-expect-error Server Component */}
      <NavBar></NavBar>


      {/* body */}
      <div className={CoffeeChatStyle.container}>

        {/* title card */}
        <div className={CoffeeChatStyle.containerRow}>
          <div className={CoffeeChatStyle.coffeeChatTopCard }>
              <p className={CoffeeChatStyle.coffeeChatText}>
                Chai Time
              </p>

              <p className={CoffeeChatStyle.coffeeChatSubText}>
              Connect. Schedule. Chat. Empower.
              </p>
          </div>
        </div>
        <div className={CoffeeChatStyle.secondContainerRow}>
          <div className={CoffeeChatStyle.leftcontainer}>
           
            {/* Chai Now & Connection Cards */}

            <div className={CoffeeChatStyle.leftCard}>

            {/* chai now  start*/}

              {/* chai now card */}
              <div className={CoffeeChatStyle.chaiNowCard}>
                <div className={CoffeeChatStyle.connectionCardTop}> </div>

               <div className={CoffeeChatStyle.smallContainer}>
              <p className={CoffeeChatStyle.chaiNowCardTitle}>
                Chai Now
              </p>
              <p className={CoffeeChatStyle.chaiNowCardDescription}>
              Do you have a minute to connect? 
              <br>
              </br>
              Chat with other members instantly!
              </p>
              </div>
              <div className = {CoffeeChatStyle.smallContainerChatNow}>
              <button className={CoffeeChatStyle.chatNowButton} onClick={redirectToVideoChat}>
               Chat Now
              </button>
              </div>

              </div>
              {/* chai now end */}

              {/* connection card */}
              <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="images/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Nichole Anderson
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    Software Engineer
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>Cloud Computing</div>
                <div className={CoffeeChatStyle.connectionTag}>React</div>
                <div className={CoffeeChatStyle.connectionTag}>SQL</div>
                <div className={CoffeeChatStyle.connectionTag}>Java</div>

               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>Art</div>
                <div className={CoffeeChatStyle.connectionTag}>Baking</div>
                <div className={CoffeeChatStyle.connectionTag}>Fishing</div>
                <div className={CoffeeChatStyle.connectionTag}>Movies</div>
               </div>

                {/* Upcoming Availability */}

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
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  12
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  13
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="images/rightArrow.png" />
               </button>

                </div>


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button onClick= {handleOpen} className={CoffeeChatStyle.scheduleMeetingButton}>
               Schedule a meeting
               </button>
              
               </div>

              </div>

            {/*connection card end*/}

            {/* connection card */}
              <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="images/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Deborah Katzer
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    Chief Financial Officer
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>Finance</div>
                <div className={CoffeeChatStyle.connectionTag}>Mentoring</div>
                <div className={CoffeeChatStyle.connectionTag}>Research</div>
                <div className={CoffeeChatStyle.connectionTag}>Leadership</div>
               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>Golf</div>
                <div className={CoffeeChatStyle.connectionTag}>Music</div>
                <div className={CoffeeChatStyle.connectionTag}>Tea</div>
                <div className={CoffeeChatStyle.connectionTag}>Vegan</div>
               </div>

                {/* Upcoming Availability */}

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
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  12
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  13
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="images/rightArrow.png" />
               </button>

                </div>


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button className={CoffeeChatStyle.scheduleMeetingButton} >
               Schedule a meeting
               </button>


               </div>
              </div>

            {/*connection card end*/}

            {/* connection card */}
            <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="images/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Ivan Ortiz 
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    Marketing Manager
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>Design</div>
                <div className={CoffeeChatStyle.connectionTag}>Prototyping</div>
                <div className={CoffeeChatStyle.connectionTag}>Teamwork</div>
                <div className={CoffeeChatStyle.connectionTag}>Copywriting</div>
               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>Theater</div>
                <div className={CoffeeChatStyle.connectionTag}>Art</div>
                <div className={CoffeeChatStyle.connectionTag}>Music</div>
                <div className={CoffeeChatStyle.connectionTag}>Sushi</div>
               </div>

                {/* Upcoming Availability */}

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
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  11
                 </div>                
                </div>

                 {/* Availability 2 */}
                 <div className={CoffeeChatStyle.connectionDateMiddleTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  MAU
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  12
                 </div>                
                </div>

                  {/* Availability 3 */}
                  <div className={CoffeeChatStyle.connectionDateTag}> 
                 <div className={CoffeeChatStyle.connectionAvailabilityMonth}> 
                  MAY
                 </div>
                 <div className={CoffeeChatStyle.connectionAvailabilityDay}> 
                  13
                 </div>                
                </div>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="images/rightArrow.png" />
               </button>

                </div>

               {/* divider */}


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button className={CoffeeChatStyle.scheduleMeetingButton}>
               Schedule a meeting
               </button>
               </div>

              </div>
          {/*connection card end*/}

          {/* Schedule a Meeting Command */}
          <Modal isOpen={isOpen} onClose={handleClose}>
          </Modal>
             
            </div>   
          </div>
          {/*connection card end*/}
          

          {/* rightContainer */}
          <div className={CoffeeChatStyle.rightContainer}>
            <div className={CoffeeChatStyle.rightCard}>

              {/* <img
                className={CoffeeChatStyle.editIcon}
                src="images/edit.png"
              /> */}

              {/* Interests */}
              <p className={CoffeeChatStyle.rightCardHeading}>Filter by category 
              <button onClick= {handleOpen2} className={CoffeeChatStyle.filterButton}>
               <img src="images/filter.png" />
              </button>
              {/* <FilterByTest isOpen2={isOpen2} onClose2={handleClose2} interestList={undefined}>
               </FilterByTest> */}

              {/* <FilterBy isOpen2={isOpen2} onClose2={handleClose2}>
               </FilterBy>  */}
              <FilterBy isOpen2={isOpen2} onClose2={handleClose2} 
              onSelectSkills={onSelectSkills} onSelectInterests={onSelectInterests} 
              onSelectValues= {onSelectValues} />

      {/* Render FilterBy component and pass onSelectInterests prop */}
      {/* Render other components and pass selectedInterests as props */}


               
              </p>

              <div className={CoffeeChatStyle.smallContainerRight}>
                <div className = {CoffeeChatStyle.rightCardCategories}>Interests</div>
                <div>
                  {selectedInterests.map((interest) => (
                    <div className={CoffeeChatStyle.rightTag}>{interest}</div>
                  ))}
                </div>

              </div>


              {/* Values */}
              <div className={CoffeeChatStyle.smallContainerRight}>
                <div className = {CoffeeChatStyle.rightCardCategories}>Values</div>
                {/* <div className={CoffeeChatStyle.rightTag}>value</div>
                <div className={CoffeeChatStyle.rightTag}>value</div> */}
                <div>
                  {selectedValues.map((values) => (
                    <div className={CoffeeChatStyle.rightTag}>{values}</div>
                  ))}
                </div>
              </div>


              {/* Skills */}
              <div className={CoffeeChatStyle.smallContainerRight}>
                <div className = {CoffeeChatStyle.rightCardCategories}>Skills</div>
                {/* <div className={CoffeeChatStyle.rightTag}>skill</div>
                <div className={CoffeeChatStyle.rightTag}>skill</div> */}
                <div>
                  {selectedSkills.map((skill) => (
                    <div className={CoffeeChatStyle.rightTag}>{skill}</div>
                  ))}
                </div>
              </div>            

            </div>
            {/* CALENDAR START */}
            <div className={styles.calendarContainer}>
              <div className={styles.calendar}>
            <Calendar />
              </div>

              <div className={styles.buttonContainer}>
              <button className={styles.connectToCalendlyButton}>Connect to calendly</button>
              </div>

            </div>
            {/* CALENDAR END  */}

          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default CoffeeChat;
