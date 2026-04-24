# 📝 **HARU — Todo & Daily Flow App**  
A warm, handcrafted-style productivity app designed to help users organize their daily tasks with clarity and intention.  
Built as a solo full‑stack project to practice real‑world development, UI/UX design, and REST API architecture.

---

## 🚀 **Live Demo**  
https://harunz.netlify.app


---

## 📚 **Overview**

HARU blends the simplicity of a classic to‑do list with a soft, handmade aesthetic.  
It allows users to create, complete, save, and revisit their daily tasks while maintaining a calm, journal‑like experience.

This project was created to strengthen my full‑stack development skills and explore how design can influence user emotion and productivity.

---

## 🛠️ **Tech Stack**

### **Frontend**
- React  
- JavaScript / JSX  
- Vite  
- CSS Modules  
- React Router  

### **Backend**
- Node.js  
- Express  
- MongoDB / Mongoose  

### **Testing**
- Jest / React Testing Library  

---

## ✨ **Features**
- Add, edit, complete, and delete todos  
- Save daily todo lists  
- View previously saved lists  
- Protected routes (Login / Signup)  
- Profile & Settings pages  
- Clean, warm UI inspired by handmade textures  
- Fully responsive layout  

---

## 📁 **Project Structure**

### **Frontend**
```
src/
 ├─ assets/
 ├─ tests/
 ├─ components/
 │   ├─ Footer.jsx
 │   ├─ NavigationAuth.jsx
 │   ├─ NavigationGuest.jsx
 │   ├─ TodoForm.jsx
 │   ├─ TodoItem.jsx
 ├─ pages/
 │   ├─ HomePage.jsx
 │   ├─ TodoPage.jsx
 │   ├─ SavePage.jsx
 │   ├─ ProfilePage.jsx
 │   ├─ SettingsPage.jsx
 │   ├─ AboutPage.jsx
 │   ├─ ContactPage.jsx
 │   ├─ ContactSentPage.jsx
 │   ├─ LoginPage.jsx
 │   ├─ SignUp.jsx
 ├─ ProtectedRoute.jsx
 ├─ App.jsx
 ├─ index.js
```

### **Backend**
```
server/
 ├─ controllers/
 ├─ models/
 ├─ routes/
 ├─ middleware/
 └─ server.js
```

---

## 🔌 **API Endpoints**

### **GET /todos**  
Fetch all todos.

### **POST /todos**  
Create a new todo.

### **PUT /todos/:id**  
Update or toggle completion.

### **DELETE /todos/:id**  
Delete a todo.

---

## 🧪 **How to Run Locally**

### 1. Clone the repository
```
git clone https://github.com/sojunz/todo-app.git
```

### 2. Install dependencies

#### Frontend
```
cd frontend
npm install
npm run dev
```

#### Backend
```
cd server
npm install
npm run dev
```

### 3. Environment Variables  
Create `.env` in the backend:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## 📸 **Screenshots**

- **Home Page (HARU intro)**  
- **Todo Page (Add + Complete + Save)**  
- **Saved Lists Page**

---

## 🧠 **What I Learned**
- Structuring a full‑stack application  
- Designing RESTful APIs  
- Managing component state and props  
- Building protected routes  
- Creating a cohesive UI/UX theme  
- Debugging server–client interactions  
- Deploying full‑stack apps  

---

## 🌱 **Future Improvements**
- Dark mode  
- Drag & drop sorting  
- Categories / tags  
- Mobile‑first redesign  
- Multi‑list support  

---

## 👩‍💻 **Author**
**SoHyung** — Web Developer  
Based in New Zealand  
