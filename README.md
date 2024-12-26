# DineIn
# Cafe Reservation Application

A **reusable, single-page application** designed for cafe owners to display their cafe information and enable reservations seamlessly. This full-stack application integrates a **MongoDB database**, with a robust backend and an interactive frontend, providing a user-friendly experience for both cafe owners and their customers.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Core framework for building the user interface.
- Libraries Used:
  - **React Scroll**: Smooth scrolling functionality.
  - **React Toastify**: Elegant notifications for user feedback.
- **Axios**: API integration for seamless data fetching.

### Backend
- **Node.js**: Runtime environment for server-side code.
- **Express.js**: Web framework for handling routes and middleware.
- **CORS**: For secure integration between the frontend and backend.

### Database
- **MongoDB**: NoSQL database for data persistence and management.

---

## 🌟 Features
- **Dynamic Content**: All data is fetched from APIs instead of being hardcoded.
- **Reservations Made Easy**: Streamlined reservation system for cafe customers.
- **Smooth Scrolling & Notifications**: Enhances user experience.
- **Full-Stack Integration**: Backend APIs serve the frontend dynamically, ensuring scalability and maintainability.

---

🔗 API Integration
The application uses an API-first approach:

API Endpoints: All data is served dynamically via backend APIs.
React components consume the API using Axios for cleaner and maintainable code.

---

🛠️ Future Enhancements
Waiting Feature if there's existing reservation | Payment gateway integration for advanced reservation systems | Admin panel for managing cafes and reservations.

---

🤝 Contributing
Contributions, issues, and feature requests are welcome!

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites
- Node.js installed on your system
- MongoDB installed and running locally or remotely
- Git for cloning the repository

---

### 🛠️ Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/cafe-reservation-app.git
   cd cafe-reservation-app

2. **Setup Backend**:
    Navigate to the backend folder:
    ```bash
    cd backend

4. **Install dependencies**:
   ```bash
   npm install

5. **Create a .env file and define the following environment variables**:
   ```bash 
   PORT=5000
   MONGO_URI=your-mongodb-connection-string

5. **Start the backend server**:
    ```bash   
    npm start

6. **Setup Frontend**:
   Navigate to the frontend folder:
    ```bash
    cd ../frontend

7. **Install dependencies**:
    ```bash   
    npm install

8. **Start the frontend application**:
    ```bash 
    npm start

---

📧 Contact
For any queries, feel free to contact at chhaya.d@northeastern.edu
