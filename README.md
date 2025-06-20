# Todo App

This project is a simple and responsive **Todo App** built using:

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express.js  
- **Database**: MongoDB (via Mongoose)  
- Fully functional REST API for CRUD operations
---
## GitHub Repository
> https://github.com/prathambagri/todo-app

---

## APIs Created

 Method | Endpoint                | Description                
 GET    | `/api/todos`            | Fetch all todos            
 POST   | `/api/todos`            | Add a new todo             
 PUT    | `/api/todos/:id`        | Update a todo (edit text)  
 DELETE | `/api/todos/:id`        | Delete a todo              

---

How to Run the Project
=======================
Backend:---

cd backend
npm install
touch .env
npm run dev
Backend runs on http://localhost:3000

Frontend:---

cd frontend
npm install
npm run dev
Frontend runs on http://localhost:5173

---

## How to Interact with the API
You can test the endpoints using:

>Axios in the React frontend (already connected)
>Postman / curl for manual testing

Example using curl:
curl -X POST http://localhost:3000/api/todos \
     -H "Content-Type: application/json" \
     -d '{"text":"Buy groceries"}'
