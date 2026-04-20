---

```md
# CodeVault Frontend

CodeVault is a modern code snippet manager that lets you create, search, and manage code snippets with a clean UI and smooth experience.

This is the frontend built using React + Tailwind CSS, connected to a Node.js + MongoDB backend API.

---

## Live Demo

 https://codevault-frontend-phi.vercel.app

---

## Tech Stack

- React.js
- Tailwind CSS
- Axios
- Vite

---

## Features

- Add code snippets (title, language, tags, code)
- Real-time search (title, language, tags)
- Delete snippets
- Copy code to clipboard
- Clean responsive UI with Tailwind CSS
- Fast API integration with backend

---

## 📁 Project Structure

```

src/
├── components/
│    ├── SearchBar.jsx
│    ├── SnippetForm.jsx
│    └── SnippetList.jsx
├── services/
│    └── api.js
├── App.jsx
└── main.jsx

````

---

## Getting Started

### 1. Clone the repo

```bash
git clone <your-frontend-repo-url>
cd codevault-frontend
````

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run locally

```bash
npm run dev
```

---

##  Backend Connection

Make sure your backend API URL is correctly set in:

```js
// src/services/api.js
```

```js
const API = axios.create({
  baseURL: "https://codevault-backend-7ph6.onrender.com/api",
});
```

---

## Deployment

* Frontend: Vercel
* Backend: Render

---

## Author

Built by **Kajol** 

---

```
