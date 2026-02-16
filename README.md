📌 Todo-app – Scenario B Web Application
This repository contains the full implementation of the Todo Web Application developed for Assessment 2.
The application allows users to manage tasks (add, delete, complete) and submit a contact form with validation.
It is built using React, Node/Express, and MongoDB, with automated tests written using Jest and React Testing Library.

🚀 Features
✅ Core Functions
Add new tasks

Delete existing tasks

Toggle task completion

Submit a contact form with validation

🍀 Technologies Used
React – Frontend UI

Node + Express – Backend REST API

MongoDB – Data storage

Jest + React Testing Library – Unit testing

🛠️ REST API Endpoints
Method	Endpoint	Description
GET	    /api/todos	Fetch all todos
POST	/api/todos	Add a new todo
DELETE	/api/todos/:id	Delete a todo
POST	/api/contact	Submit contact form

🎨 UX Improvements
Several UX enhancements were implemented to improve clarity and usability:

Loading state (“Loading your todos...”)

Clear placeholders such as “Add a new task”

Form validation to prevent incomplete submissions

Visual feedback for completed tasks

Stable layout for smoother navigation

📁 Project Structure
Code
todo-app/
  public/
  src/
    assets/
    tests/
      Contact.test.js
      Todo.test.js
    AboutPage.jsx
    App.jsx
    ContactPage.jsx
    ContactSentPage.jsx
    HomePage.jsx
    LoginPage.jsx
    NavigationAuth.jsx
    NavigationGuest.jsx
    ProfilePage.jsx
    ProtectedRoute.jsx
    SavePage.jsx
    SettingsPage.jsx
    TodoPage.jsx
    *.css
  server/
    routers/
    model/
    index.mjs
▶️ How to Run the Project
Frontend
Code
cd todo-app
npm install
npm start
Backend
Code
cd server
npm install
node index.mjs
MongoDB must be running locally.

🧪 Unit Testing
This project includes automated tests for both the Todo feature and the Contact form.

✔ Tests Included
Todo.test.js
Renders todo list

Adds a new todo

Deletes a todo

Toggles completion state

Contact.test.js
Validates required fields

Displays error messages

Allows successful submission

✔ Test Results
(These screenshots are included in the Word document as required.)

🧩 Challenges & Solutions
Proxy / CORS Issue
React and Express run on different ports.
Solution: added a proxy configuration to route API requests correctly.

CSS Not Applying
The SettingsPage stylesheet was not loading due to a filename mismatch.
Webpack is case-sensitive, so renaming the file to match the import fixed the issue.

Testing Environment Setup
Initial DOM-related errors were resolved by configuring Jest and React Testing Library properly.

🎯 Conclusion
This project demonstrates a complete full-stack implementation with React, Express, MongoDB, and automated testing.
All required features for Assessment 2 have been fully implemented, tested, and documented.