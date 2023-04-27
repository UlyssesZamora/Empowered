-- -----------------------------------------------------
-- Comments
-- -----------------------------------------------------

INSERT INTO empowerd.community ( createdBy,communityName,communityCreatedDate,memberCount,communitySummary )VALUES 
(1, 'communityName1','2023-04-14', 3, 'Backend community'),
(2, 'communityName2','2023-04-14', 10, 'Frontend community'), 
(3, 'communityName3','2023-04-14', 10, 'Fullstack community');

-- -----------------------------------------------------
-- Company
-- Note: All passwords are “123” encrypted using https://bcrypt-generator.com/
-- -----------------------------------------------------

INSERT INTO empowerd.company(
companyName, companyEmail, companyPassword, companyRegisteredDate, companyLastLogin, companyLocation, companyMission, companyWorkModel,companyLogo
)VALUES
('companyName1', 'companyEmail1@tester.com', '$2a$12$OVZhQAx2OgN36hMizz46Z.OdHvtNjgTa9h6ytpI.Rbp35WX8Trz8a', '2020-01-01', '2023-04-14', 'San Jose', 'Since they became a popular way for businesses to describe themselves in the 1980s, mission statements have advanced significantly. Today, these statements of purpose are also compared to a mantra for achieving professional success and are found throughout all of an organizations most important resources, from advertising and promotional materials to its corporate website. ', 'hybrid',NULL), 
('companyName2', 'companyEmail2@tester.com', '$2a$12$OVZhQAx2OgN36hMizz46Z.OdHvtNjgTa9h6ytpI.Rbp35WX8Trz8a', '2000-02-08', '2023-04-14' , 'Sunnyvale', 'A mission statement encapsulates the goal of your business in one sentence or paragraph. It can appear simple to come up with anything so brief because it is, but in actuality, the more room you have to define something, the harder it can be.', 'remote',NULL), 
('companyName3', 'companyEmail3@tester.com', '$2a$12$OVZhQAx2OgN36hMizz46Z.OdHvtNjgTa9h6ytpI.Rbp35WX8Trz8a', '1993-02-12' , '2023-04-14', 'Denver', 'Our goal is to maintain and enhance the unique connections you work so hard to create as an entrepreneur. No matter how much or little experience you have, we think a firm delineation of these connections through contracts establishes a reliable foundation. To provide people with the tools and business systems they require so they can stop putting their lives in danger in order to run a business.', 'hybrid',NULL);

-- -----------------------------------------------------
-- Userinfo
-- 	Note: All passwords are “123” encrypted using https://bcrypt-generator.com/
-- -----------------------------------------------------

INSERT INTO empowerd.userinfo (
  userFirstName, userLastName, userDateOfBirth, userEmail,userPassword,userProfilePicture, userReferral, userRegisteredDate, userLastLogin, userCompanyName,
salary, userActive
)VALUES
('Foo1', 'Boo1','2000-04-14', 'userEmail1@tester.com', '$2a$12$OVZhQAx2OgN36hMizz46Z.OdHvtNjgTa9h6ytpI.Rbp35WX8Trz8a',NULL,1,'2023-04-14', '2023-04-14', 'companyName1',100000,1),
('Foo2', 'Boo2','1999-02-04', 'userEmail2@tester.com', '$2a$12$OVZhQAx2OgN36hMizz46Z.OdHvtNjgTa9h6ytpI.Rbp35WX8Trz8a', Null,2,'2023-04-14', '2023-04-14', 'companyName2',200000,1),
('Foo3', 'Boo3','2007-07-24', 'userEmail3@tester.com', '$2a$12$OVZhQAx2OgN36hMizz46Z.OdHvtNjgTa9h6ytpI.Rbp35WX8Trz8a',Null, 3,'2023-04-14', '2023-04-14', 'companyName3',300000,1);

-- -----------------------------------------------------
-- userExternal
-- Note: 
-- -----------------------------------------------------

INSERT INTO 
empowerd.userExternal( userLocation, userPreferredLocation,  userPreferredWorkModel, userHobby, userExternalcol, userSalaryRange, userAbout, userId, userActive
)VALUES
('Denver', 'Denver', 'Hybrid', 'Reading', 'userExternalcol1', '100000-150000', 'Principal Internet Engineering- experienced in building and leading large teams globally, focused on delivering large scale, highly available, high performance and secure solutions.', 1,1), 
('Sunnyvale', 'Sunnyvale', 'Inperson', 'hiking', 'userExternalcol2', '200000-250000', 'Junior software engineer- Problem solver and avid knowledge seeker. Experienced developer with an eye for detail. Proficient in Guidewire Policy Center, Billing Center, and Java.', 2,1), 
('Monterey', 'US', 'Remote', 'Basketball', 'userExternalcol3', '78000-150000', 'Project Manager - Experienced Author with a demonstrated history of working in the writing and editing industry. Skilled in SQL, C#.net, Programming, Data Structures, and Software Development.', 3,1);
          
-- -----------------------------------------------------
-- referral
-- -----------------------------------------------------

INSERT INTO empowerd.referral (
  referralCode, referralCreatedDate, referralUsedDate,referredBy, userinfoId
)VALUES
('A12345', '2020-01-02 10:10:10','2020-01-02 15:10:10','referredBy1',1),
('A12789', '2022-02-06 15:10:10','2022-03-12 12:10:10','referredBy2',2),
('A12729', '2023-04-09 03:10:10','2023-04-09 10:10:10','referredBy3',1);

-- -----------------------------------------------------
-- resumedata
-- -----------------------------------------------------

INSERT INTO empowerd.resumedata (
    userId, companyName, jobTitle,startDate,endDate, resumeDescription, resumeEmail
)VALUES
(1, 'communityName1','Principal Internet Engineering','2015-02-06',NULL, 'resumeDescription1','userEmail1@tester.com'),
(2, 'communityName2','Junior software engineer','2020-02-06',NULL, 'resumeDescription2', 'userEmail2@tester.com'),
(3, 'communityName3','Project Manager','2019-08-05', NULL, 'resumeDescription2','userEmail3@tester.com');

-- -----------------------------------------------------
-- review  
-- -----------------------------------------------------

INSERT INTO empowerd.review (
reviewCreatedDATE, score, reviewDescription, salary, companyId,userid
) VALUES
('2020-07-02 10:10:10', 9, 'Great company culture, supportive management, and opportunities for growth. Highly recommend working here.', 120000, 1,1),
('2021-01-02 11:11:11', 3, 'Poor leadership, lack of communication, and no room for advancement. Would not recommend this company.', 130000, 2,1),
('2022-04-05 12:12:12', 10, 'Competitive salary, challenging projects, and collaborative team environment. A great place to grow your career.', 200000, 3, 2),
('2022-04-05 12:12:12', 10, 'Competitive salary, challenging projects, and collaborative team environment. A great place to grow your career.', 200000, 1, 3);

-- -----------------------------------------------------
-- company_has_community  
-- -----------------------------------------------------

INSERT INTO empowerd.company_has_community(
companyId, communityId
) VALUES
(1,1),
(2,2),
(3,3);

-- -----------------------------------------------------
-- userinfo_has_community  
-- -----------------------------------------------------

INSERT INTO empowerd.userinfo_has_community(
userinfoId, communityId
) VALUES
(1,1),
(2,2),
(3,3);

-- -----------------------------------------------------
-- communityfollower  
-- -----------------------------------------------------

INSERT INTO empowerd.communityfollower(
userId, companyId, startDate, endDate
) VALUES
(1,1, '2020-07-05', '2022-08-09'),
(2,2, '2021-04-07', '2023-02-06'),
(3,3, '2022-02-06', '2023-04-15');

-- -----------------------------------------------------
-- company_has_usereducation
-- -----------------------------------------------------

INSERT INTO empowerd.usereducation(
userSchoolName, userMajor, userStartDate, userEndDate, userDegree, resumedataId
) VALUES
('State University1', 'Computer Science', '2019-08-01', '2023-05-31', 'Bachelor of Science', 1),
('State University2', 'Software Engineering', '2015-08-01', '2019-05-31', 'Bachelor of Science', 2),
('State University3', 'Computer Programming', '2010-08-01', '2014-05-31', 'Bachelor of Science', 3);

-- -----------------------------------------------------
-- vettedReview
-- -----------------------------------------------------

INSERT INTO empowerd.vettedreview(
vettedReviewDescription, reviewScore, userWhoGotReview, userInfoReviewerId
) VALUES
('Reliable and hardworking team member who consistently delivers high-quality work. A pleasure to work with.', 9, 1, 2),
('Positive attitude, always willing to lend a hand, and brings a creative perspective to the team. A valuable asset.', 9, 3, 1),
('Consistently produces high-quality work, pays close attention to detail, and is always looking for ways to improve. A top performer.', 10, 2, 3);

-- -----------------------------------------------------
-- userskill
-- -----------------------------------------------------

 INSERT INTO empowerd.userskill (
  skillId, userInfoId
)VALUES
(2,1),(20,1),(14,1),(5,2),(21,2),(14,2),(2,3),(20,3),(14,3);

-- -----------------------------------------------------
-- interests
-- -----------------------------------------------------

 INSERT INTO empowerd.userinterest (
  interestId, userInfoId
)VALUES
(2,1),(20,1),(14,1),(5,2),(21,2),(14,2),(2,3),(20,3),(14,3);

-- -----------------------------------------------------
-- valueslist
-- -----------------------------------------------------

 INSERT INTO empowerd.uservalue(
  uservalueId, userInfoId
)VALUES
(2,1),(20,1),(14,1),(5,2),(21,2),(14,2),(2,3),(20,3),(14,3);

-- -----------------------------------------------------
-- companypro
-- -----------------------------------------------------
INSERT INTO empowerd.companypro (
companyProId, companyId
) VALUES
 (1,1),(2,1),(3,1),(2,2),(1,2),(3,2),(2,3),(1,3);

-- -----------------------------------------------------
-- companycon
-- -----------------------------------------------------
INSERT INTO empowerd.companycon (
companyConId, companyId
) VALUES
 (1,1),(2,2),(3,3),(2,1),(3,2),(1,3);

-- -----------------------------------------------------
-- companyDepartment
-- -----------------------------------------------------
 INSERT INTO empowerd.companydepartment(
   departmentID,
  companyId )VALUES
(4,1),(5,1),(6,1),
(1,2),(2,2),(6,2),
(2,3),(7,3),(4,3);

-- -----------------------------------------------------
-- departmentreview
-- -----------------------------------------------------
INSERT INTO empowerd.departmentreview(
companydepartmentId, reviewOfCompany, reviewer, reviewDescription
)VALUES
(1,1,1,'Best department I’ve worked at!'), (2,1,2,'Department culture is perfect.just started this role so do not know exactly how good it is but the application was fairly easy and was offered tests straight away. Do not think you can make a lot though.'), (3,1,3,'Managers are the best in this department'),
(1,1,1,'Best department I’ve worked at!'), (2,1,2,'Department culture is perfect.just started this role so do not know exactly how good it is but the application was fairly easy and was offered tests straight away. Do not think you can make a lot though.'), (3,1,3,'Managers are the best in this department'),
(1,2,1,'Best department I’ve worked at!'), (2,2,2,'Department culture is perfect'), (3,2,3,'Managers are the best in this department'),
(1,3,1,'Best department I’ve worked at!'), (2,3,2,'Department culture is perfect'), (3,3,3,'Managers are the best in this department');