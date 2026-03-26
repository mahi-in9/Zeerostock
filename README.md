# Zeerostock

Zeerostock allows buyers to search surplus inventory across multiple suppliers.

This project implements a full-stack inventory search feature, divided into two parts:

Part A → In-memory backend + frontend
Part B → Database-integrated backend

---

## Project Structure

```
Zeerostock/
│
├── part-A/
│   ├── backend/
│   └── frontend/
│
├── part-B/
│   └── backend/
│
```

---

# Part A – Full Stack (Without Database)

## Backend

### Tech Stack

- Node.js
- Express.js

### Architecture

The backend follows a **layered MVC-inspired structure**:

- **Routes** → Handle API endpoint mapping
- **Controller** → Handles request/response lifecycle
- **Service** → Contains filtering logic (core business logic)
- **Data Layer** → Static product dataset

This separation ensures:

- Maintainability
- Testability
- Clear responsibility boundaries

---

### API Endpoint

```
GET /search
```

### Query Parameters

| Parameter | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| q         | string | Partial match on product name |
| category  | string | Exact category filter         |
| minPrice  | number | Minimum price filter          |
| maxPrice  | number | Maximum price filter          |

---

### Filtering Behavior

- Supports **partial search** (case-insensitive)
- Allows **multiple filters simultaneously**
- Returns **all products if no query is provided**
- Filtering is implemented using **array methods (HOFs like filter, includes)**

---

### Run Backend

```
npm install
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

## Frontend

### Tech Stack

* React (Vite)
* Tailwind CSS
* Axios

---

### Features

* Displays products in **tabular format**
* Search by product name
* Filter by category
* Price range filtering
* Real-time API-driven updates

---

### Key Implementation Notes

* Controlled inputs for filters
* API integration using Axios
* State-driven UI rendering
* Clean separation between UI and data-fetching logic

---

# Part B – Backend with Database

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv

---

## Architecture

Follows a more **production-grade MVC structure**:

* **Config** → Database connection setup
* **Models** → Mongoose schemas
* **Controllers** → Request handling
* **Routes** → API definitions

---

## Enhancements Over Part A

* Persistent data storage using MongoDB
* Scalable query handling
* Environment-based configuration using `.env`

---

## Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## Run Backend

```
npm install
npm run dev
```

---

# Key Design Decisions

### 1. Separation of Concerns

Business logic is isolated in the service layer (Part A) and controller/model layers (Part B), improving scalability.

### 2. Flexible Filtering System

Designed to support:

* Composable filters
* Partial search
* Extensibility (e.g., sorting, pagination)

### 3. Progressive Enhancement

* Part A → Logic-focused (no DB)
* Part B → Production-ready with persistence

---


# Summary

This project demonstrates:

* REST API design
* Filtering logic implementation
* MVC architecture
* React-based UI with API integration
* Transition from in-memory to database-driven backend

---
