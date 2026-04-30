# 🚀 CollabX – Team Collaboration SaaS

CollabX is a full-stack SaaS-based team collaboration platform where users can create workspaces, invite members, assign roles, and manage tasks efficiently.

---

## 🧠 Overview

CollabX is designed to simplify teamwork by providing:

- Secure authentication using Google OAuth
- Workspace-based collaboration (multi-user system)
- Role-based access control (OWNER / MANAGER / MEMBER)
- Task and project management features

---

## ✨ Features

- 🔐 Google Authentication (OAuth)
- 🏢 Workspace creation & management
- 👥 Invite members via link
- 🛡 Role-based access control
- 📋 Task management system
- 📊 Clean and responsive UI

---

## 🏗 Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- MongoDB Atlas

### Authentication
- Google OAuth (Passport.js)
- Session-based authentication

---

## 📂 Project Structure

```
CollabX/
│
├── backend/        # Backend (API, authentication, database)
├── client/         # Frontend (UI)
├── .gitignore
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/abhishek99sharma/CollabX.git
cd CollabX
```

### 2. Install dependencies
```
cd backend
npm install

cd ../client
npm install
```

### 3. Setup environment variables

Create `.env` file inside backend folder:

```
PORT=8000
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_secret

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback

FRONTEND_ORIGIN=http://localhost:3000
```

---

### 4. Run the project

Backend:
```
cd backend
npm run dev
```

Frontend:
```
cd client
npm run dev
```

---

## 🧠 Key Concepts

- SaaS Architecture (multi-user system)
- Role-Based Access Control (RBAC)
- REST API communication
- Session-based authentication
- MongoDB document relationships

---

## 🚀 Future Improvements

- Payment & subscription system
- Real-time updates using WebSockets
- Notifications system
- Mobile optimization

---

## 👨‍💻 Author

Abhishek Sharma  
GitHub: https://github.com/abhishek99sharma

---

## 📌 Note

Do not upload `.env` file to GitHub. Use `.env.example` for reference.

---

### ⭐ Tagline

CollabX – Work together. Build faster.
