import CoffeeChatStyle from "../styles/CoffeeChatStyle.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FilterBy from "../components/FilterBy";

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
    window.location.href = "http://localhost:3030/";
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
                    src="./src/assets/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Profile Name
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    job title
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>

               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>

                {/* Upcoming Availability */}

                <div className={CoffeeChatStyle.smallContainer}>
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/leftArrow.png" />
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
               <img src="./src/assets/rightArrow.png" />
               </button>

                </div>


               <div className = {CoffeeChatStyle.smallContainerScheduleMeeting}>
               <button onClick= {handleOpen} className={CoffeeChatStyle.scheduleMeetingButton}>
               Schedule a meeting
               </button>
              {/* Schedule a Meeting Command */}
               <Modal isOpen={isOpen} onClose={handleClose}>
               </Modal>
               </div>

              </div>

            {/*connection card end*/}

            {/* connection card */}
              <div className={CoffeeChatStyle.connectionCard}>
                <div className={CoffeeChatStyle.connectionCardTop}>
                  <img
                    className={CoffeeChatStyle.connectionCardAvatar}
                    src="./src/assets/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Profile Name
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    job title
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>

                {/* Upcoming Availability */}

                <div className={CoffeeChatStyle.smallContainer}>
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/leftArrow.png" />
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
               <img src="./src/assets/rightArrow.png" />
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
                    src="./src/assets/avatar.png"
                  />
                </div>
                <div>
                  <p className={CoffeeChatStyle.connectionCardName}>
                    Profile Name
                  </p>
                  <p className={CoffeeChatStyle.connectionCardJobTitle}>
                    job title
                  </p>
                </div>

                {/* Featured Skills */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Featured Skills</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
                <div className={CoffeeChatStyle.connectionTag}>skill</div>
               </div>

                {/* Common Interests */}
               <div className={CoffeeChatStyle.smallContainer}>
                <div className = {CoffeeChatStyle.connectionCardCategories}>Common Interests</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
                <div className={CoffeeChatStyle.connectionTag}>interest</div>
               </div>

                {/* Upcoming Availability */}

                <div className={CoffeeChatStyle.smallContainer}>
                   <div className = {CoffeeChatStyle.connectionCardCategories}>Upcoming Availability</div>
                </div>

               <div className = {CoffeeChatStyle.smallContainerAvailability}>

               <button className={CoffeeChatStyle.dateAvailableButton}>
               <img src="./src/assets/leftArrow.png" />
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
               <img src="./src/assets/rightArrow.png" />
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

          
              
            </div>   
          </div>
          {/*connection card end*/}
          

          {/* rightContainer */}
          <div className={CoffeeChatStyle.rightContainer}>
            <div className={CoffeeChatStyle.rightCard}>

              {/* <img
                className={CoffeeChatStyle.editIcon}
                src="./src/assets/edit.png"
              /> */}

              {/* Interests */}
              <p className={CoffeeChatStyle.rightCardHeading}>Filter by category 
              <button onClick= {handleOpen2} className={CoffeeChatStyle.filterButton}>
               <img src="./src/assets/filter.png" />
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


          </div>
        </div>
      </div>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default CoffeeChat;
