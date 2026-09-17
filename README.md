# MERN Stack Book Management System

A full-stack, decoupled Book Management application built using the MERN stack (MongoDB, Express, React, Node.js) with **TypeScript** across both the backend and frontend.

This repository was created to demonstrate a production-ready, modular layered architecture, clean code practices, and RESTful API integration.

## 🚀 Purpose & Features

* **Full CRUD Operations:** Create, read, update, and delete book entries with real-time feedback.
* **Decoupled Architecture:** Strict separation between the backend API and frontend client.
* **Modular Layered Backend:** Layered pattern separating Routes, Controllers, Services, Repositories, and Mongoose Models.
* **Type Safety:** Built entirely with end-to-end TypeScript interfaces.
* **Containerized Database:** Local development powered by Dockerized MongoDB.

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, Vite, Axios
* **Backend:** Node.js, Express.js, TypeScript, Mongoose
* **Database:** MongoDB (via Docker container)
* **API Architecture:** RESTful API with JSON payload

## 📁 Project Architecture

```text
mern-book-crud/
├── client/                     # React Frontend Single Page Application
│   ├── src/
│   │   ├── api/               # Typed Axios API Client
│   │   ├── components/        # UI Components (Forms, Lists)
│   │   └── types/             # Frontend TypeScript interfaces
│   └── package.json
│
└── server/                     # Node.js + Express REST API (Modular Architecture)
    ├── src/
    │   ├── config/            # Database Connection
    │   └── modules/book/      # Modular Domain Layer (Controller, Service, Repo, Model)
    └── package.json
