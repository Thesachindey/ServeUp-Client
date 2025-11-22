 <h1 style="display: flex; align-items: center; justify-content: start; gap: 10px;">
  <img src="./public/icons8-boomerang-64.png" width="40" />
  <span>ServeUp</span>
</h1>


A community-driven social service event management platform where users can create, join, and track impactful activities in their local areas.

---
#### [Live-site](https://serveup.netlify.app/)
---
## 🚀 Features

* **User Authentication** with Firebase
* **Create Events** with title, description, type, location, thumbnail, and future-date validation
* **Private Routes** for event creation
* **Upcoming Events Listing**
* **Smooth Animations** using Framer Motion
* **Beautiful UI** with Tailwind CSS, DaisyUI, and Lucide Icons
* **Date Selection** using `react-datepicker`
* **Toast Notifications** using React Hot Toast
* **SweetAlert2** for confirmation and alerts

---

## 📦 Tech Stack

* **React 19**
* **Vite**
* **Tailwind CSS 4 + DaisyUI**
* **Firebase Authentication**
* **React Router v7**
* **Framer Motion**
* **Lucide React**
* **React Datepicker**
* **React Icons**
* **SweetAlert2**
* **React Hot Toast**

---

## 📁 Folder Structure

```
serveUp/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── provider/
 │   ├── hooks/
 │   └── assets/
 ├── public/
 ├── index.html
 ├── vite.config.js
 └── README.md
```

---

## 🛠 Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/serveUp.git
```

2. Install dependencies:

```
npm install
```

3. Start development server:

```
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file and include your Firebase config:

```
VITE_apiKey=your_key
VITE_authDomain=your_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_bucket
VITE_messagingSenderId=your_sender
VITE_appId=your_app_id
```

---

## ✨ Create Event Workflow

* Must be logged in
* Fill in event details
* Select a **future date only**
* Submit form → Shows success toast → Redirects to upcoming events

---

## 📦 NPM Packages Used

```
"@lottiefiles/dotlottie-react": ^0.17.7
"@tailwindcss/vite": ^4.1.17
"daisyui": ^5.5.5
"firebase": ^12.6.0
"framer-motion": ^12.23.24
"lucide-react": ^0.554.0
"react": ^19.2.0
"react-datepicker": ^8.9.0
"react-dom": ^19.2.0
"react-hot-toast": ^2.6.0
"react-icons": ^5.5.0
"react-router": ^7.9.6
"react-spinners": ^0.17.0
"sweetalert2": ^11.26.3
"tailwindcss": ^4.1.17
```

---

## 🧑‍💻 Developer

**Developed by: *The Sachin Dey***

---

## 📄 License

This project is licensed under the MIT License.

---

Thank you for using **<a href="https://serveup.netlify.app/" >ServeUp</a>**! ❤️
