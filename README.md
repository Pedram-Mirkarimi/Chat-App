<div align="center">

# 💬 PulseChat — Realtime Group Chat App

A real-time **group chat** web application built with **Node.js**, **Express**, **Socket.io**, and **MongoDB (Mongoose)**.  
Includes **register/login**, **JWT-based auth**, **group management**, **live messaging**, and **location sharing**.

<br/>

![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-Web%20Server-000000?logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-Realtime-010101?logo=socketdotio&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Templates-A91E50)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=000)

</div>

---

## 📌 Table of Contents
- [✨ Features](#features)
- [🧰 Tech Stack](#tech-stack)
- [📁 Project Structure](#project-structure)
- [🚀 Getting Started](#getting-started)
- [🔐 Environment Variables](#environment-variables)
- [🖥️ Pages](#pages)
- [🧩 Realtime Events (Socket.io)](#realtime-events)
- [👤 Author](#author)

---

<a id="features"></a>
## ✨ Features
- 👤 **User Authentication**
  - Register / Login
  - Password hashing (`bcryptjs`)
  - Token-based auth (`jsonwebtoken`) stored on client (cookie)
- 👥 **Group Chat**
  - Create/join group chats
  - View group-related data
- 💬 **Realtime Messaging**
  - Live messages with timestamps
  - User join/leave notifications
- 📍 **Share Location**
  - Send live location messages (link-based)
- 🎨 **UI**
  - EJS views + static assets
  - Includes fonts/assets in `public/`

---

<a id="tech-stack"></a>
## 🧰 Tech Stack

| Category | Technology |
|---|---|
| Backend | Node.js, Express |
| Realtime | Socket.io |
| Database | MongoDB |
| ODM | Mongoose |
| Auth/Security | JWT, bcryptjs, validator |
| Views | EJS |
| Config | dotenv |

---

<a id="project-structure"></a>
## 📁 Project Structure

```txt
pulsechat/
├─ app.js
├─ models/
│  ├─ user.js
│  └─ group.js
├─ routes/
│  └─ route.js
├─ utils/
│  ├─ users.js
│  ├─ groups.js
│  └─ messages.js
├─ views/
│  ├─ index.ejs
│  ├─ register.ejs
│  ├─ group.ejs
│  ├─ chat.ejs
│  └─ 404.ejs
├─ public/
│  ├─ css/
│  ├─ js/
│  ├─ img/
│  └─ fonts/
├─ .gitignore
├─ .env.example
└─ package.json
````

---

<a id="getting-started"></a>

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js installed
* MongoDB running locally **or** a MongoDB connection string (e.g., Atlas)

### 📥 Install

```bash
npm install
```

### 🔑 Create `.env`

This project uses `dotenv`.

1. Copy `.env.example` → `.env`
2. Fill in your values

> Important: do **NOT** commit `.env` (it should stay local).

### ▶️ Run

```bash
npm start
```

### 🧪 Dev Mode (auto-restart)

```bash
npm run dev
```

---

<a id="environment-variables"></a>

## 🔐 Environment Variables

Create a `.env` file in the project root (or copy from `.env.example`):

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/pulsechat
JWT_SECRET=yourStrongJwtSecret
```

---

<a id="pages"></a>

## 🖥️ Pages

Routes are defined in `routes/route.js`:

| Method | Route       | Description       |
| -----: | ----------- | ----------------- |
|    GET | `/`         | Home / Login page |
|    GET | `/register` | Registration page |
|    GET | `/group`    | Group page        |
|    GET | `/chat`     | Chat room page    |
|    GET | `*`         | Custom 404 page   |

---

<a id="realtime-events"></a>

## 🧩 Realtime Events (Socket.io)

Client-side events (in `public/js/`) communicate with the server:

| Event             | Direction       | Purpose                   |
| ----------------- | --------------- | ------------------------- |
| `register`        | client → server | Create account            |
| `login`           | client → server | Login and receive token   |
| `groupName`       | client → server | Create / set group name   |
| `joinGroup`       | client → server | Join a group              |
| `join`            | client → server | Join chat room            |
| `sendMessage`     | client → server | Send chat message         |
| `sendLocation`    | client → server | Share location            |
| `message`         | server → client | Incoming message          |
| `locationMessage` | server → client | Incoming location message |
| `headerData`      | server → client | Header/UI data            |
| `groupData`       | server → client | Group related updates     |

---

<a id="author"></a>

## 👤 Author

**S. AmirMohammad Mirkarimi**
GitHub: [S-AmirMohammad-Mirkarimi](https://github.com/S-AmirMohammad-Mirkarimi)
