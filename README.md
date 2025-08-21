# Library App

A simple RESTful API built with **Express.js** and **MongoDB** (via Mongoose) for managing a collection of books.  
This project is intended for learning and practicing the basics of Node.js, Express, MongoDB, and CRUD operations.

---

## Features

- Connects to MongoDB Atlas using environment variables
- Implements CRUD operations for books:
  - Create a new book
  - Read all books or a single book by ID
  - Update a book by ID
  - Delete a book by ID
- Basic error handling and status codes

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- A MongoDB Atlas account (or local MongoDB instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/library-app.git
   cd library-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string and port:
     ```
     DATABASE=your-mongodb-connection-string
     PORT=3000
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   Or, for development with auto-reload:
   ```bash
   npx nodemon server.js
   ```

---

## API Endpoints

Base URL: `/api/v1/books`

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| GET    | `/`      | Get all books       |
| POST   | `/`      | Create a new book   |
| GET    | `/:id`   | Get a book by ID    |
| PATCH  | `/:id`   | Update a book by ID |
| DELETE | `/:id`   | Delete a book by ID |

### Example Book Object

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasy",
  "publishedYear": 1937,
  "rating": 5
}
```

---

## Notes

- **Do not commit your `.env` file** (add it to `.gitignore`).
- This project is for educational purposes and does not include authentication or advanced validation.

---
