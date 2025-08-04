# ✅ ToDo Application — Full Stack (React + .NET + PostgreSQL)

A modern, full-featured ToDo app using **React** (frontend), **.NET Core** (backend), and **PostgreSQL** (database).  
Backend is hosted on **Render**, frontend on **Vercel**. This README has a clear folder structure, copy buttons for commands, and all setup steps explained.

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios, React Router  
- **Backend:** ASP.NET Core Web API, Entity Framework Core  
- **Database:** PostgreSQL (Render-hosted)  
- **Deployment:** Render (backend), Vercel/Netlify (frontend)

---

## 📦 Folder Structure

```
todo-app-dotnet-react/
│
├── backend/               # ASP.NET Core API
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Migrations/
│   ├── appsettings.json
│   └── Program.cs
│
├── frontend/              # React app
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── index.css
│   │   ├── LoginForm.css
│   │   ├── LoginForm.jsx
│   │   ├── main.jsx
│   │   ├── Register.css
│   │   ├── Register.jsx
│   │   ├── Todo.css
│   │   └── Todo.jsx
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

**Structure Notes:**  
- Components like `Header`, `LoginForm`, `Register`, and `Todo` are separated into their own `.jsx` and `.css` files.  
- The `assets/` folder contains static images/icons.  
- You can further modularize with folders like `components/`, `pages/`, and `hooks/` for better scalability.

---

## 🚀 Features

- ✅ Add, edit, delete ToDo items  
- ✅ Seamless frontend/backend integration  
- ✅ Cloud deployed and production ready

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/J-S-Nafeez/dotnet-crud.git
cd dotnet-crud
```

### 2. Setup Backend

```bash
cd TodoApi
dotnet restore
dotnet ef database update
dotnet run
```

Update your PostgreSQL credentials in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Host=your_host;Port=5432;Database=your_db;Username=your_user;Password=your_password;"
}
```

### 3. Setup Frontend

```bash
cd ../Fend
npm install
npm start
```

Create a `.env` file based on `.env.example` and add your backend API URL:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

---

## 🌐 Deployment

- **Backend:** Deploy on [Render](https://render.com/)
- **Frontend:** Deploy on [Vercel](https://vercel.com/) 
---

## 📄 License

MIT License — feel free to use and modify!

---
