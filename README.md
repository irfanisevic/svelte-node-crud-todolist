# Svelte + Node.js Todo List (Full CRUD)

Simple fullstack Todo List application built with:

* **Frontend:** Svelte (Vite)
* **Backend:** Node.js + Express
* **Architecture:** Separate frontend and backend
* **Features:** Full CRUD (Create, Read, Update, Delete)

---

# 📁 Project Structure

```
todo-svelte-node
│
├── backend
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── package.json
    ├── vite.config.js
    │
    └── src
        ├── api
        │   └── todoApi.js
        │
        ├── components
        │   ├── TodoForm.svelte
        │   └── TodoList.svelte
        │
        ├── App.svelte
        └── main.js
```

---

# 🚀 Backend Setup (Node + Express)

### 1. Go to backend folder

```
cd backend
```

### 2. Install dependencies

```
npm install
```

Required packages:

```
express
cors
```

### 3. Run backend server

```
node server.js
```

Backend will run on:

```
http://localhost:3000
```

Test API endpoint:

```
http://localhost:3000/api/todos
```

---

# 🌐 Frontend Setup (Svelte)

### 1. Go to frontend folder

```
cd frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run development server

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔌 How Frontend Connects to Backend

Frontend uses `fetch()` to call the REST API.

Example API base URL:

```
http://localhost:3000/api/todos
```

Flow:

```
Svelte Frontend (5173)
        ↓
Fetch API
        ↓
Node.js Express Backend (3000)
        ↓
JSON Response
        ↓
UI Update
```

---

# 📡 API Endpoints

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/todos     | Get all todos   |
| POST   | /api/todos     | Create new todo |
| PUT    | /api/todos/:id | Update todo     |
| DELETE | /api/todos/:id | Delete todo     |

---

# ✅ Features

* Add todo
* Toggle completed
* Edit todo
* Delete todo
* REST API
* Fullstack architecture

---

# 🧠 What This Project Demonstrates

This project demonstrates basic **fullstack web development concepts**:

* Component-based frontend (Svelte)
* REST API backend (Express)
* CRUD operations
* Client-server communication
* State updates from API responses

---

# 🔧 Possible Improvements

Future upgrades:

* Add **SQLite database**
* Add **persistent storage**
* Add **authentication**
* Add **better UI styling**
* Deploy to cloud (Render / Vercel / Railway)

---

# 📌 Notes

This project is intended for **learning and experimentation** with fullstack development using Svelte and Node.js.

---

Happy coding 🚀
