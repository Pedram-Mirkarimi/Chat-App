# 💬 Real-Time Chat Application

A full-featured, real-time chat application built with **Node.js**, **Express**, and **Socket.io**. This project provides a seamless and interactive chatting experience with features like user authentication, group chats, and a responsive user interface rendered using EJS templates.

---

## ✨ Key Features

- 🔐 **User Authentication**: Secure user registration and login system using `bcryptjs` for password hashing.
- 🚀 **Real-Time Messaging**: Instantaneous two-way communication powered by WebSockets through the **Socket.io** library.
- 👥 **Group Chat Rooms**: Users can create new chat groups or join existing ones to communicate with multiple people simultaneously.
- 📱 **Responsive Design**: The user interface is built with pure CSS and EJS, making it adaptable to both desktop and mobile browsers.
- ⚙️ **Modular Architecture**: The backend code is neatly organized into models, routes, and utility modules for better maintainability and scalability.
- 💬 **Formatted Messages**: Messages are timestamped using `moment.js` for a better user experience.

---

## 🛠️ Tech Stack

This project utilizes the following technologies:

| Category                    | Technology                    |
| --------------------------- | ----------------------------- |
| **Backend**                 | Node.js, Express.js           |
| **Real-Time Communication** | Socket.io                     |
| **Templating Engine**       | EJS (Embedded JavaScript)     |
| **Frontend**                | HTML, CSS, Vanilla JavaScript |
| **Authentication**          | bcryptjs                      |
| **Utilities**               | moment.js                     |

---

## 📂 Project Structure

The repository is organized as follows to ensure a clean separation of concerns:

```
Chat-App/
│
├── app.js              # Main application entry point
├── package.json        # Project dependencies and scripts
│
├── public/             # Static assets (CSS, client-side JS, images)
│   ├── css/
│   ├── js/
│   └── ...
│
├── routes/
│   └── route.js        # Express routes for authentication and page rendering
│
├── utils/              # Helper modules for managing users, groups, and messages
│   ├── groups.js
│   ├── messages.js
│   └── users.js
│
└── views/              # EJS templates for the UI
    ├── chat.ejs
    ├── group.ejs
    ├── index.ejs
    ├── register.ejs
    └── 404.ejs
```

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Pedram-Mirkarimi/Chat-App.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd Chat-App
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```

### Running the Application

Execute the following command to start the server:

```sh
npm start
```

The application will be available at `http://localhost:3000`.

---

## 💡 How to Use

1.  **Register a new account** or **log in** with existing credentials.
2.  After logging in, you can **create a new chat group** or **join an existing one** from the list.
3.  Start sending and receiving messages in real-time!

---

## 🔮 Future Enhancements

This project has a solid foundation that can be extended with more advanced features, such as:

- **Database Integration**: Persist users, messages, and groups using a database like MongoDB or PostgreSQL.
- **Private Messaging**: Implement one-on-one private chats between users.
- **File Sharing**: Allow users to share images and other files in the chat.
- **User Profiles**: Add customizable user profiles with avatars and status messages.

---
