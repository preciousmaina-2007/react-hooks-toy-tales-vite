# Toy Tales

Toy Tales is a React CRUD application that allows users to view, add, like, and donate toys. The application connects a React frontend to a backend API using fetch requests and demonstrates full CRUD functionality.

---

## Features

- Display all toys on page load
- Add a new toy
- Like a toy
- Donate/delete a toy
- Dynamic updates without refreshing the page

---

## Technologies Used

- React
- JavaScript
- CSS
- JSON Server
- Vite

---

## Project Structure

```bash
src/
│
├── components/
│   ├── ToyCard.jsx
│   ├── ToyContainer.jsx
│   └── ToyForm.jsx
│
├── App.jsx
└── main.jsx
Setup Instructions
1. Clone the repository
git clone <your-github-repo-url>
2. Navigate into the project folder
cd toy-tales
3. Install dependencies
npm install
4. Start the backend server
npm run server

OR

json-server --watch db.json --port 3001
5. Start the React app
npm run dev
CRUD Operations
GET

Fetch and display all toys when the page loads.

POST

Add a new toy through the form.

PATCH

Increase toy likes when the like button is clicked.

DELETE

Donate/remove a toy from the collection.


Learning Goals

This project demonstrates:

React state management with useState
Side effects with useEffect
Fetch requests
Full CRUD functionality
Component structure and props
Updating UI dynamically
Author

Preshi

License

This project is licensed under the MIT License.


