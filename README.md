# MeetUp

### This is NOT a complete project. I am actively working on much of the functionality.

MeetUp is an application to schedule meetings with other users.

---- Tech Stack ----

Frontend: React, React Context, Material UI, Formik, Yup, FullCalendar

Backend: Java Spring Boot, PostgreSQL


---- Working Features ----

- Login and Register forms
- Dashboard page for each user with functional sidebar component
- Dark mode/Light mode toggle, persisted in local storage and uses browser preference as default
- Calendar on dashboard to display user events
- Modal form to schedule meetings with other users
- Settings page to view and update user information
- Friends list displays current friends with option to remove

---- Todo ----

Calendar:
- Popover with event information and option to remove event
- Correctly store event from API in context to display on calendar

Schedule Meeting Modal:
- Option to pick a friend to add to meeting + connect to API

Search:
- Implement endpoint and functionality to find users to add to friends lsit

General:
- Add option to upload profile picture (store with S3 bucket)
- Add landing page
- API should set JWT in response header, currently needs to be manually put in axios instance after logging in


This is a current image of the main dashboard component. The design will change significantly as I add functionality: 

![MeetUp](https://github.com/DanGraham23/MeetUp/assets/59900510/434d6a22-9c6b-488d-b86e-841aa004b735)
