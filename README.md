# MeetUp

## MeetUp is an application to schedule meetings with other users.

---- Tech Stack ----

Frontend: React, React Context, Material UI

- Formik and Yup are used for the form design and validation
- FullCalendar is used as the main calendar component

Backend: Java Spring Boot, PostgreSQL


---- Features ----

Authentication:
- Users login/register and are authenticated with Spring Security 3
- Access to secure endpoints is granted with a valid JWT

Calendar:
- A user's calendar displays their current events (host and guest events)
- Events can be clicked to see more information or to cancel the event
- There are options to filter by month, week, and day provided by FullCalendar
- Modal to schedule new meetings and pick a guest from a user's friendslist to add to the meeting

Sidebar:
- Dark mode toggle switch persisted in local storage and defaults to browser preference
- Several tabs to navigate between various dashboard features, Friends, Help Center, etc.

Settings:
- Users can change their current settings by providing a valid current password with their request

Search:
- Search functionality to find users who are not friends in order to add them
- Displays based on the current email prefix, Ex, "sa" will display "sam @ email . com" and "sarah @ email . com"

---- Future Plans ----

- Currently the site is working as an MVP, however I plan to redesign and improve the site as I create new features
- There is no landing page, which I am currently designing
- Profile pictures are the default MUI ones, which I plan to change by integrating with AWS S3 for file uploads
- As I test the site I will improve error handling with some of the API endpoints when users enter invalid information

These are some current images of the site. I will likely create a demo or host the site after working out some of the bugs.
![image](https://github.com/DanGraham23/MeetUp/assets/59900510/f8f8074f-d167-496d-985b-9c537f1b3bd4)
![image](https://github.com/DanGraham23/MeetUp/assets/59900510/7192e526-c83b-423c-b90e-7aed737a40b9)
![image](https://github.com/DanGraham23/MeetUp/assets/59900510/e81d496e-9d72-4bf2-8312-120008cf7505)
![image](https://github.com/DanGraham23/MeetUp/assets/59900510/9f5e9398-f8f7-40b8-af40-ab872f15c12e)
![image](https://github.com/DanGraham23/MeetUp/assets/59900510/1b0cceaa-2e4d-4723-b20d-45d93bc5a390)



