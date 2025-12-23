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
- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [🖥️ Pages](#️-pages)
- [🧩 Realtime Events (Socket.io)](#-realtime-events-socketio)
- [🛣️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [👤 Author](#-author)

---

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

## 📁 Project Structure

```txt
Chat-App-main/
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
└─ package.json
````

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js installed
* MongoDB running locally (or a MongoDB connection string)

### 📥 Install

```bash
npm install
```

### ▶️ Run

```bash
npm start
```

### 🧪 Dev Mode (auto-restart)

```bash
npm run dev
```

---

## 🔐 Environment Variables

This project uses `dotenv`. Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/chat-app
JWT_SECRET=yourStrongJwtSecret
```

---

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

## 🛣️ Roadmap

* [ ] Add a REST API for groups/users (optional)
* [ ] Add message persistence in DB (store chat history)
* [ ] Add typing indicator + read receipts
* [ ] Add file/image sending
* [ ] Add rate limiting + security headers (Helmet)
* [ ] Add tests for auth & socket events

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add: your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)
