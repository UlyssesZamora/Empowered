-- -----------------------------------------------------
-- Schema empowerd
-- -----------------------------------------------------

drop SCHEMA if exists empowerd;
CREATE SCHEMA empowerd;
use empowerd;

-- -----------------------------------------------------
-- Table community
-- -----------------------------------------------------
CREATE TABLE community (
  id BIGINT NOT NULL AUTO_INCREMENT,
  createdBy BIGINT NOT NULL,
  communityName VARCHAR(45) NOT NULL,
  communityCreatedDate DATETIME(6) NOT NULL,
  memberCount BIGINT NOT NULL,
  communitySummary TINYTEXT NOT NULL,
  PRIMARY KEY (id)
  );


-- -----------------------------------------------------
-- Table company
-- -----------------------------------------------------
CREATE TABLE  company (
  id BIGINT NOT NULL AUTO_INCREMENT,
  companyName VARCHAR(45) NULL DEFAULT NULL,
  companyEmail VARCHAR(45) NULL DEFAULT NULL,
  companyPassword VARCHAR(100) NULL DEFAULT NULL,
  companyRegisteredDate DATETIME(6) NULL DEFAULT NULL,
  companyLastLogin DATETIME(6) NULL DEFAULT NULL,
  companyLocation VARCHAR(45) NULL,
  companyMission TEXT NULL,
  companyWorkModel VARCHAR(45) NULL,
  companyLogo LONGTEXT NULL,
  PRIMARY KEY (id)
  );

-- -----------------------------------------------------
-- Table userinfo
-- -----------------------------------------------------
CREATE TABLE userinfo (
  id BIGINT NOT NULL AUTO_INCREMENT,
  userFirstName VARCHAR(45) NOT NULL,
  userLastName VARCHAR(45) NOT NULL,
  userDateOfBirth Date,
  userEmail VARCHAR(45) NOT NULL,
  userPassword VARCHAR(100) NOT NULL,
  userProfilePicture LONGTEXT NULL,
  userReferral VARCHAR(45) NOT NULL,
  userRegisteredDate DATETIME(6) NULL DEFAULT NULL,
  userLastLogin DATETIME(6) NULL DEFAULT NULL,
  userCompanyName VARCHAR(45) NULL DEFAULT NULL,
  salary INT NULL,
  userActive TINYINT(1) NOT NULL,
  PRIMARY KEY (id)
  );
  
-- -----------------------------------------------------
-- Table userExternal
-- -----------------------------------------------------
CREATE TABLE userexternal (
  id BIGINT NOT NULL AUTO_INCREMENT,
  userLocation VARCHAR(45) NULL,
  userPreferredLocation VARCHAR(45) NULL,
  userPreferredWorkModel VARCHAR(45) NULL,
  userHobby VARCHAR(45) NULL,
  userExternalcol VARCHAR(45) NULL,
  userSalaryRange VARCHAR(45) NULL,
  userAbout TEXT NULL,
  userId BIGINT NOT NULL,
  userActive TINYINT(1) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT userexternal1 FOREIGN KEY (userId) REFERENCES userinfo (id) 
  ON DELETE NO ACTION
  );

-- -----------------------------------------------------
-- Table referral
-- -----------------------------------------------------
CREATE TABLE referral (
  id BIGINT NOT NULL AUTO_INCREMENT,
  referralCode VARCHAR(45) NOT NULL,
  referralCreatedDate DATETIME NOT NULL,
  referralUsedDate DATETIME NULL DEFAULT NULL,
  referredBy VARCHAR(45) NOT NULL,
  userinfoId BIGINT,
  PRIMARY KEY (id),
  CONSTRAINT referral1 FOREIGN KEY (userinfoId) REFERENCES userinfo (id) 
  ON DELETE NO ACTION
  );


-- -----------------------------------------------------
-- Table resumedata
-- -----------------------------------------------------
CREATE TABLE resumedata (
  Id BIGINT NOT NULL AUTO_INCREMENT,
  userId BIGINT NOT NULL,
  companyName VARCHAR(45) NULL DEFAULT NULL,
  jobTitle VARCHAR(45) NULL DEFAULT NULL,
  startDate DATE NULL DEFAULT NULL,
  endDate DATE NULL DEFAULT NULL,
  resumeDescription VARCHAR(150) NULL DEFAULT NULL,
  resumeEmail VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (Id),
  CONSTRAINT resumedata1 FOREIGN KEY (userId) REFERENCES userinfo (id)
  ON DELETE NO ACTION
  );


-- -----------------------------------------------------
-- Table review
-- -----------------------------------------------------
CREATE TABLE review (
  id BIGINT NOT NULL AUTO_INCREMENT,
  reviewCreatedDATE DATETIME NOT NULL,
  score INT NOT NULL,
  reviewDescription VARCHAR(250) NOT NULL,
  salary INT NOT NULL,
  companyId BIGINT,
  userId BIGINT,
  PRIMARY KEY (id),
  CONSTRAINT review1 FOREIGN KEY (companyId) REFERENCES company (id)
  ON DELETE NO ACTION,
  CONSTRAINT review2 FOREIGN KEY (userId) REFERENCES userinfo(id)
    ON DELETE NO ACTION
);


-- -----------------------------------------------------
-- Table company_has_community
-- Table to connect company and community for many-to-many relationship
-- -----------------------------------------------------
CREATE TABLE company_has_community (
  companyId BIGINT NOT NULL,
  communityId BIGINT NOT NULL,
  PRIMARY KEY (companyId, communityId),
  CONSTRAINT company_has_community1 FOREIGN KEY (companyId)REFERENCES company (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT company_has_community2 FOREIGN KEY (communityId) REFERENCES community (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table userinfo_has_community
-- Table to connect userinfo and community for many-to-many relationship
-- -----------------------------------------------------
CREATE TABLE userinfo_has_community (
  userinfoId BIGINT NOT NULL,
  communityId BIGINT NOT NULL,
  PRIMARY KEY (userinfoId, communityId),
  CONSTRAINT userinfo_has_community1 FOREIGN KEY (userinfoId) REFERENCES userinfo (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT userinfo_has_community2
    FOREIGN KEY (communityId) REFERENCES community (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table communityfollower
-- -----------------------------------------------------
CREATE TABLE communityfollower (
  id BIGINT NOT NULL AUTO_INCREMENT,
  userId BIGINT NULL,
  companyId BIGINT NULL,
  startDate DATE NULL,
  endDate DATE NULL,
  PRIMARY KEY (id),
  CONSTRAINT communityfollower1 FOREIGN KEY (userId) REFERENCES userinfo (id)
    ON DELETE CASCADE,
  CONSTRAINT communityfollower2 FOREIGN KEY (companyId) REFERENCES company (id)
    ON DELETE NO ACTION);


-- -----------------------------------------------------
-- Table userEducation
-- -----------------------------------------------------
CREATE TABLE usereducation (
  id BIGINT NOT NULL AUTO_INCREMENT,
  userSchoolName VARCHAR(45) NOT NULL,
  userMajor VARCHAR(45) NOT NULL,
  userStartDate DATE NOT NULL,
  userEndDate VARCHAR(45) NULL,
  userDegree VARCHAR(45) NOT NULL,
  resumedataId BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT usereducation1 FOREIGN KEY (resumedataId) REFERENCES resumedata (Id)
  ON DELETE NO ACTION);

  
-- -----------------------------------------------------
-- Table vettedReview
-- -----------------------------------------------------
  CREATE TABLE vettedreview (
  id BIGINT NOT NULL AUTO_INCREMENT,
  vettedReviewDescription VARCHAR(250) NOT NULL,
  reviewScore INT NOT NULL,
  userWhoGotReview BIGINT,
  userInfoReviewerId BIGINT,
  PRIMARY KEY (id),
  FOREIGN KEY (userWhoGotReview) REFERENCES userinfo(id)   
  ON DELETE NO ACTION,
  FOREIGN KEY (userInfoReviewerId) REFERENCES userinfo (id)   
  ON DELETE NO ACTION
);

-- -----------------------------------------------------
-- Table Skill
-- -----------------------------------------------------
CREATE TABLE skills(
  id BIGINT NOT NULL AUTO_INCREMENT,
  skill VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO skills(skill) 
Values ("Adobe Creative Suite"), ("Agile Methodologies"), ("Branding & Identity"), ("Business Development"), 
  ("Business Operations"), ("Cloud Computing"), ("Communications"), ("Content Strategy"), ("Copywriting"),
  (" Creative Problem Solving"), ("CRM"), ("Customer Service"), ("Data Analysis"), ("Design"), 
  ("Emotional Intelligence"), ("Engineering Management"), ("Finance"), ("Full-stack Development"), 
  ("Java"), ("Leadership"), ("Learning and Development"), ("Machine Learning, Marketing"), ("Mentoring"), 
 ("People Management"), ("Program Management"), ("Project Management"), ("Prototyping"),(" Python"), 
  ("React"), ("Research"), ("Sales"), ("SEO"), ("Social Media Marketing"), ("Software Development"),
  ("SQL"), ("Strategic Planning"), ("Teamwork"), ("Usability Testing"), ("User Experience (UX)"), ("User Interface (UI)");

-- -----------------------------------------------------
-- Table userSkill
-- -----------------------------------------------------
CREATE TABLE userskill (
  id INT NOT NULL AUTO_INCREMENT,
  skillId BIGINT NOT NULL,
  userInfoId BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT userskill1 FOREIGN KEY (userInfoId) REFERENCES userinfo(id)
  ON DELETE NO ACTION,
  CONSTRAINT userskill2 FOREIGN KEY (skillId) REFERENCES skills (id)
  ON DELETE NO ACTION);

 -- -----------------------------------------------------
-- Table Interests
-- -----------------------------------------------------
CREATE TABLE interests(
  id BIGINT NOT NULL AUTO_INCREMENT,
  interest VARCHAR(45),
   PRIMARY KEY (id)
);

CREATE TABLE userfollowers (
    id BIGINT NOT NULL AUTO_INCREMENT,
    followerId BIGINT NOT NULL,
    followedId BIGINT NOT NULL,
    status ENUM('pending', 'accepted', 'rejected') NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (followerId) REFERENCES userinfo (id),
    FOREIGN KEY (followedId) REFERENCES userinfo (id)
);

INSERT INTO interests(interest) 
Values ("Art"), ("Backpacking"), ("Baking"),("Baseball"), ("Beaches") ,("Beer"),("Books"), ("Cars"),("Cats"),("Coffee"), 
("Community Service"), ("Concerts"), ("Cooking"), ("Cricket"), ("Cycling"), ("Dancing"), ("Dogs"), ("Exercise"), ("Family"), 
("Fishing"), ("Football"), ("Gaming"), ("Gardening"), ("Golf"), ("Hiking"), ("Karaoke"), ("Kids"), ("Language"), ("Learning"), ("Meditation"),
("Mentorship"), ("Movies"), ("Museums & Galleries"), ("Music"), ("Outdoors"), ("Photography"), ("Pizza"), ("Podcasts"), ("Reading"), 
("Real Estate"), ("Religion"), ("Road Trips"), ("Rock Climbing"), ("Running"), ("Skiing"), ("Soccer"), ("Stock Market"),( "Surfing"),
("Sushi"), ("Tea"), ("Television"), ("Theater"), ("Traveling"),("Vegan"), ("Vegetarian"), ("Whiskey"), ("Wine");

-- -----------------------------------------------------
-- Table userInterest
-- -----------------------------------------------------
CREATE TABLE userinterest (
  id INT NOT NULL AUTO_INCREMENT,
  interestId BIGINT NOT NULL,
  userInfoId BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT userinterest1 FOREIGN KEY (userInfoId) REFERENCES userinfo(id)
  ON DELETE NO ACTION,
  CONSTRAINT userinterest2 FOREIGN KEY (interestId) REFERENCES interests (id)
  ON DELETE NO ACTION);

   -- -----------------------------------------------------
-- Table Values
-- -----------------------------------------------------
CREATE TABLE valueslist(
  id BIGINT NOT NULL AUTO_INCREMENT,
  valueList VARCHAR(45),
   PRIMARY KEY (id)
);

INSERT INTO valueslist(valueList) 
Values ("Authenticity"), ("Achievement"), ("Adventure"), ("Authority"), ("Autonomy"), ("Balance"), ("Beauty"), ("Boldness"), 
("Compassion"), ("Challenge"), ("Citizenship"), ("Community"), ("Competency"), ("Contribution"), ("Creativity"), ("Curiosity"), 
("Determination"),("Fairness"), ("Faith"), ("Fame"), ("Friendships"), ("Fun"), ("Growth"), ("Happiness"), ("Honesty"), ("Humor"), 
("Influence"), ("Inner Harmony"), ("Justice"), ("Kindness"), ("Knowledge"), ("Leadership"), ("Learning"), ("Love"), ("Loyalty"), 
("Meaningful Work"), ("Openness"), ("Optimism"),("Peace"),("Pleasure"), ("Poise"),("Popularity"), 
("Recognition"), ("Religion"), ("Reputation"), ("Respect"), ("Responsibility"), ("Security"), ("Self-Respect"), ("Service"), 
("Spirituality"), ("Stability"), ("Success"), ("Status"), ("Trustworthiness"), ("Wealth"), ("Wisdom");

-- -----------------------------------------------------
-- Table userValues
-- -----------------------------------------------------
CREATE TABLE uservalue (
  id INT NOT NULL AUTO_INCREMENT,
  uservalueId BIGINT NOT NULL,
  userInfoId BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT uservalue1 FOREIGN KEY (userInfoId) REFERENCES userinfo(id)
  ON DELETE NO ACTION,
  CONSTRAINT uservalue2 FOREIGN KEY (uservalueId) REFERENCES valueslist (id)
  ON DELETE NO ACTION);

-- -----------------------------------------------------
-- Table roomID
-- -----------------------------------------------------
  CREATE TABLE roomID (
  id BIGINT NOT NULL AUTO_INCREMENT,
  uuid VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- -----------------------------------------------------
-- Table prolist
-- -----------------------------------------------------
  CREATE TABLE prolist(
  Id BIGINT NOT NULL AUTO_INCREMENT,
  pro VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO prolist(pro) 
Values ("Good"), ("Safe place"), ("Employee friendly");

-- -----------------------------------------------------
-- Table companypro
-- -----------------------------------------------------
CREATE TABLE companypro(
  id INT NOT NULL AUTO_INCREMENT,
  companyProId BIGINT NOT NULL,
  companyId BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT companypro1 FOREIGN KEY (companyId) REFERENCES company(id)
  ON DELETE NO ACTION,
  CONSTRAINT companypro2 FOREIGN KEY (companyProId) REFERENCES prolist (id)
  ON DELETE NO ACTION);

-- -----------------------------------------------------
-- Table conlist
-- -----------------------------------------------------
  CREATE TABLE conlist(
  Id BIGINT NOT NULL AUTO_INCREMENT,
  con VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO conlist(con) 
Values ("Overloaded Work"), ("Not much diversity"), ("No Paid Time Off");

-- -----------------------------------------------------
-- Table companycon
-- -----------------------------------------------------
CREATE TABLE companycon(
  id INT NOT NULL AUTO_INCREMENT,
  companyConId BIGINT NOT NULL,
  companyId BIGINT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT companycon1 FOREIGN KEY (companyId) REFERENCES company(id)
  ON DELETE NO ACTION,
  CONSTRAINT companycon2 FOREIGN KEY (companyconId) REFERENCES conlist (id)
  ON DELETE NO ACTION);

-- -----------------------------------------------------
-- Table department
-- -----------------------------------------------------
  CREATE TABLE department(
  id BIGINT NOT NULL AUTO_INCREMENT,
  departmentName VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department(departmentName) 
Values ("departmentWest"), ("departmentEast"), ("departmentNorth"),('Development'),('Testing'),('Management'),('Human Resources'),('Business Development');

-- -----------------------------------------------------
-- Table companyDepartment
-- -----------------------------------------------------
  CREATE TABLE companydepartment(
  id BIGINT NOT NULL AUTO_INCREMENT,
  departmentID BIGINT,
  companyId BIGINT,
  PRIMARY KEY (id),
  CONSTRAINT  companydepartment1 FOREIGN KEY (companyId) REFERENCES  company(id)
  ON DELETE NO ACTION,
   CONSTRAINT  companydepartment2 FOREIGN KEY (departmentID ) REFERENCES  department(id)
);

-- -----------------------------------------------------
-- Table departmentreview
-- -----------------------------------------------------
  CREATE TABLE departmentreview(
  id BIGINT NOT NULL AUTO_INCREMENT,
  companydepartmentId BIGINT,
  reviewOfCompany BIGINT,
  reviewer BIGINT,
  reviewDescription VARCHAR(250) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT  departmentreview1 FOREIGN KEY (companydepartmentId) REFERENCES    companydepartment(id)
  ON DELETE NO ACTION,
  CONSTRAINT  departmentreview2 FOREIGN KEY (reviewer) REFERENCES   userinfo(id)
  ON DELETE NO ACTION,
CONSTRAINT  departmentreview3 FOREIGN KEY (reviewOfCompany) REFERENCES   company(id)
  ON DELETE NO ACTION
);