# Todo‑app – Scenario B Web Application

This repository contains the full implementation of the Todo‑app developed for Scenario B.  
The application allows users to add, delete, and complete tasks, as well as submit a contact form.  
It is built using **React**, **Node/Express**, and **MongoDB**, with unit tests written using **Jest** and **React Testing Library**.

---

## 🚀 Features

### ✅ Core Functions
- Add new tasks  
- Delete existing tasks  
- Toggle task completion  
- Submit a contact form with validation  

### 🧩 Technologies Used
- **React** – UI components  
- **Node + Express** – REST API  
- **MongoDB** – Demo data storage  
- **Jest + React Testing Library** – Unit testing  

---

## 🛠 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Fetch all todos |
| POST | `/api/todos` | Add a new todo |
| DELETE | `/api/todos/:id` | Delete a todo |
| POST | `/api/contact` | Submit contact form |

---

## 🎨 UX Improvements Implemented

During development, several UX enhancements were added:

- **Loading state** (“Loading your todos…”) to avoid confusion  
- **Clear placeholders** such as “Add a new task”  
- **Form validation** to prevent incomplete submissions  
- **Visual feedback** for completed tasks  
- **Stable layout** for smoother navigation  

---

## 🧪 Unit Testing

### ✔ Tests Included
- **Add Task Test** – Ensures new tasks appear correctly  
- **Toggle Completion Test** – Confirms UI updates when tasks are completed  
- **Contact Form Test** – Validates required fields  

### ▶ How to Run Tests
```bash
npm install
npm test
