Todo‑app – Unit Testing Documentation

Overview
This repository contains the implementation and unit testing for the Todo‑app developed for Scenario B.  
The application includes core features such as:

- Adding new tasks  
- Deleting existing tasks  
- Marking tasks as completed  
- Submitting a contact form  

Unit tests were written using Jest and React Testing Library to ensure that all components behave as expected and that the user experience remains consistent.

Testing Tools
- Jest – JavaScript testing framework  
- React Testing Library – For testing UI interactions and component behavior  
- npm test – Runs all test suites

Unit Tests Included

✔ Add Task Test
Validates that a new task is added to the list and displayed correctly after user input.

#✔ Toggle Completion Test
Ensures that clicking a task toggles its `completed` state and updates the UI accordingly.

✔ Contact Form Test
Checks that the form requires name, email, and message before submission, preventing incomplete form submissions.

How to Run Tests

npm install
npm test

Test Evidence
- All test files are located in `src/tests/`
- Screenshots of passed tests are included in the `/testing-screenshots` folder (if applicable)

Reflection
Unit testing helped identify logic errors early and improved the reliability of the application.  
By testing user interactions such as adding tasks, toggling completion, and submitting forms, the app became more stable and aligned with the intended user stories.
