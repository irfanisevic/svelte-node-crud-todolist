# Fullstack HTML + Node.js Template 🚀

Simple reusable fullstack template using:

- HTML, CSS, Vanilla JS (Frontend)
- Node.js
- Express
- CORS
- Nodemon (for development)
- EJS (optional, if needed later)

---

## 📁 Project Structure

my-fullstack-template/
│
├── backend/
│   ├── package.json
│   ├── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── .gitignore
└── README.md

---

## ⚙️ Installation

### 1️⃣ Install Node.js

Download & install Node.js from:
https://nodejs.org

Check installation:

node -v
npm -v

---

### 2️⃣ Setup Backend

Go to backend folder:

cd backend

Initialize project:

npm init -y

Install dependencies:

npm install express cors

Install dev dependencies:

npm install --save-dev nodemon

Optional (if using template engine later):

npm install ejs

---

## 📝 Setup package.json Scripts

Add this inside package.json:

"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js"
}

---

## ▶️ Running the Project

### Development Mode (with nodemon)

npm run dev

### Production Mode

npm start

---

## 🌐 Frontend

Open:

frontend/index.html

Make sure backend is running on:

http://localhost:3000

---

## 📌 Default Backend Route

GET /

Returns:

{
  "message": "Backend is running 🚀"
}

---

## 🔁 Reusing This Template

1. Copy this folder
2. Rename the project
3. Run `npm install` inside backend
4. Start developing 🚀

---

## 🎯 Purpose

This template is built for:

- Practicing fullstack development
- Testing API + frontend integration
- Rapid project prototyping
- Learning real-world workflow

---

Happy Coding 🔥