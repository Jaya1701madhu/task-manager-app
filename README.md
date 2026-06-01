# Task Manager App

## Overview

Task Manager App is a full-stack web application that allows users to manage tasks efficiently through different stages of completion.

Users can:

- Register an account
- Login securely
- Create tasks
- Update task status
- Delete tasks
- Organize tasks into:
  - Todo
  - In Progress
  - Done

---

## Tech Stack

### Frontend

- React.js
- Vite
- Axios
- React Router DOM

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas

### Authentication

- JSON Web Token (JWT)
- bcryptjs Password Hashing

---

## Features

### Authentication

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes

### Task Management

- Create Tasks
- View Tasks
- Update Task Status
- Delete Tasks

### Task Workflow

Tasks are organized into three stages:

1. Todo
2. In Progress
3. Done

---

## Project Structure

task-manager-app/

├── client/

│ ├── src/

│ ├── pages/

│ ├── services/

│ └── App.jsx

│

├── server/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ └── server.js

│

└── README.md

---

## Installation

### Backend Setup

```bash
cd server

npm install

npm start
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## API Endpoints

### Authentication

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

### Tasks

#### Get Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

---

## Assumptions

- Each user can only access their own tasks.
- JWT token is stored in browser localStorage.
- MongoDB Atlas is used as the cloud database.

---

## Tradeoffs

- LocalStorage is used for simplicity.
- Minimal UI design was chosen to focus on functionality and assignment requirements.
- Drag-and-drop functionality was not implemented to keep the project lightweight.

---

## Deployment

### Frontend

Vercel Deployment Link:
(Add your Vercel URL here)

### Backend

Render Deployment Link:
(Add your Render URL here)

---

## GitHub Repository

(Add your GitHub Repository URL here)

---

## Author

Jaya Madhu

B.Tech – Computer Science and Business Systems

Andhra Pradesh, India
