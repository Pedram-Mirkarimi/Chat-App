# 💬 Chat Application
A real-time chat application built with **Node.js**, **Express**, and **Socket.io**, featuring group and private messaging, user authentication, and a responsive UI powered by **EJS templates** and **vanilla JavaScript**.

---

## 🚀 Features
- 🔐 **User Authentication** – Secure registration and login system.  
- 💬 **Real-time Messaging** – Instant communication using Socket.io.  
- 👥 **Group Chats** – Users can create and join chat groups.  
- 📱 **Responsive UI** – Optimized for desktop and mobile devices.  
- 🌐 **Multilingual Support** – Includes Farsi typing support.  
- ⚙️ **Modular Architecture** – Clean separation of models, routes, and utilities.

---

## 🧩 Project Structure
```
ChatApplication.v2-master/
│
├── app.js                  # Main application file
├── package.json            # Node dependencies
│
├── models/                 # Data models (User, Group)
│   ├── user.js
│   └── group.js
│
├── routes/                 # Express routes
│   └── route.js
│
├── utils/                  # Utility modules
│   ├── users.js
│   ├── groups.js
│   └── messages.js
│
├── public/                 # Static assets
│   ├── css/                # Stylesheets
│   ├── js/                 # Frontend scripts
│   ├── img/                # Images
│   └── fonts/              # Custom fonts
│
└── views/                  # EJS templates
    ├── index.ejs
    ├── chat.ejs
    ├── group.ejs
    ├── register.ejs
    └── 404.ejs
```

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/Pedram-Mirkarimi/ChatApplication.v2.git
cd ChatApplication.v2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the application
```bash
npm start
```

### 4. Open in browser
By default, the app runs at:
```
http://localhost:3000
```

---

## 🧠 Technologies Used

- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Web framework for routing and middleware  
- **Socket.io** – Real-time, bi-directional communication  
- **EJS** – Template engine for rendering dynamic views  
- **HTML / CSS / JavaScript** – Frontend structure and styling  

---

## 💡 Usage

1. Register or log in with your account.  
2. Create or join a group chat.  
3. Start sending messages in real time!  
4. Optionally, use Farsi typing support built into the client scripts.

---

## 📂 Environment Variables (Optional)

If you plan to deploy this app, you can add a `.env` file in the root directory for configuration:
```
PORT=3000
SESSION_SECRET=your_secret_key
```

---

## 🧱 Future Improvements

- ✅ Message persistence with MongoDB or PostgreSQL  
- ✅ File and image sharing  
- ✅ Private chat rooms  
- ✅ User profile customization  

---

## 📬 Contact

Created and maintained by **SeyedAmirMohammad Mirkarimi**  
📧 Feel free to reach out via GitHub or email for collaboration opportunities.
