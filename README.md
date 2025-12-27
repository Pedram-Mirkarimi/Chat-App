# pulsechat — Realtime Chat (Learning Project)

> **Learning / practice project (Lern-/Übungsprojekt).**  
> Built to strengthen my fundamentals for an **Ausbildung as Fachinformatiker/in für Anwendungsentwicklung (FIAE)** (start: **from 08/2026**).

A simple realtime group chat web app to practice **Node.js**, **Express**, **Socket.io**, and **MongoDB**.
Focus: clean structure, easy setup, and core functionality.

---

## ✅ What you can do
- Register / login (basic authentication)
- Create / join a group chat
- Send and receive realtime messages

<details>
<summary><b>Optional / extra practice features</b></summary>

- Location sharing (practice feature)
- JWT-based auth (practice topic)

</details>

---

## 🧰 Tech (learning focus)
- Node.js, Express
- Socket.io
- MongoDB (Mongoose)
- EJS (views)

---

## ▶️ Quick start

### Prerequisites
- Node.js installed
- MongoDB running locally (or a MongoDB connection string)

### Install
```bash
npm install
````

### Environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/chat-app
JWT_SECRET=yourStrongJwtSecret
```

### Run

```bash
npm start
```

### Dev mode

```bash
npm run dev
```

---

## 📁 Project structure (overview)

```text
pulsechat/
├─ app.js
├─ models/
├─ routes/
├─ utils/
├─ views/
├─ public/
└─ package.json
```

<details>
<summary><b>Realtime events (Socket.io)</b></summary>

This project uses basic Socket.io events for:

* joining groups/rooms
* sending messages
* optional location messages

</details>

---

## ⚠️ Notes

* This is a **learning project** and not intended as a production-ready application.
* Do not commit secrets. Keep `.env` local.

---

## Author

Seyed AmirMohammad Mirkarimi
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)
