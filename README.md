# CareerFlow – React Job Listing App

A responsive job listing web application built with React that allows users to browse, view, add, edit, and delete job listings through a REST API.

## 🚀 Live Demo

**Frontend:**
https://react-job-listing-frontend.onrender.com/

**API:**
https://react-job-listing-as5s.onrender.com/

## ✨ Features

* Browse available job listings
* View detailed information for individual jobs
* Add new job listings
* Edit existing job listings
* Delete job listings
* Client-side routing with React Router
* Form handling and validation
* Toast notifications for user actions
* Loading spinner during API requests
* REST API integration
* Responsive UI
* Production deployment using Render

## 🛠️ Tech Stack

* **React** – UI development
* **React Router** – Client-side routing
* **JavaScript (ES6+)** – Application logic
* **Tailwind CSS** – Styling and responsive design
* **JSON Server** – REST API for job data
* **Vite** – Development and build tooling
* **React Icons** – Icons
* **React Toastify** – Toast notifications
* **Render** – Production deployment

## 📂 Project Structure

```text
src/
├── components/
├── layouts/
├── loaders/
├── pages/
├── api.js
├── jobs.json
├── App.jsx
└── main.jsx
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/ashutoshsource/react-job-listing.git
```

Navigate into the project:

```bash
cd react-job-listing
```

Install dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite.

### Run the JSON Server

In a separate terminal:

```bash
npm run server
```

The JSON Server provides the REST API used by the application.

## 🔌 API Configuration

The application uses an API base URL configured through an environment variable.

For local development, create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

For production, the deployed API URL is configured through the hosting environment.

## 🧪 Quality Checks

Before deployment, the project was checked using:

```bash
npm run lint
npm run build
```

The production build completes successfully and the application has been tested using the production preview.

## 📌 Future Improvements

* Add user authentication
* Add job search and filtering
* Add pagination
* Add backend validation
* Replace JSON Server with a production backend and database

## 👨‍💻 Author

**Ashutosh Pandey**

GitHub: https://github.com/ashutoshsource





























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
