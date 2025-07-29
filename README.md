# 🎮 Full Stack Game Shop Project

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET"/>
  <img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server"/>
</p>

<p align="center">
  <img src="https://img.icons8.com/color/96/000000/shopping-cart--v2.png" width="60"/>
  <img src="https://www.shutterstock.com/image-vector/colorful-game-controller-icon-vector-600nw-2489844309.jpg" width="60"/>
  <img src="https://img.icons8.com/color/96/000000/user-group-man-man.png" width="60"/>
</p>

This repository contains a full stack web application for an online shop, built with a <img src="https://img.icons8.com/color/24/000000/react-native.png" width="20"/> React frontend and a <img src="https://img.icons8.com/color/24/000000/net-framework.png" width="20"/> .NET Web API backend.

---

## 🗂️ Project Structure

- <img src="https://img.icons8.com/color/24/000000/react-native.png" width="20"/> **react/**: The frontend application built with React.
  - 📁 `src/`: Contains React components, context, and axios API calls.
  - 🖼️ `img/`: Image assets for the frontend.
- <img src="https://img.icons8.com/color/24/000000/net-framework.png" width="20"/> **web api server/**: The backend solution built with ASP.NET Core Web API.
  - 🗄️ `server/`: Main server project with controllers and configuration.
  - 🧠 `BL/`: Business Logic layer.
  - 💾 `DAL/`: Data Access Layer, including models and data services.
  - 🔄 `DTO/`: Data Transfer Objects for API communication.

---

## ✨ Features

- 🔐 User authentication (login/signup)
- 🗂️ Product categories and games management
- 🛒 Shopping cart and checkout
- 👤 Customer profile and order history
- 🛠️ Admin features for managing categories, games, and customers

---

## 🚀 Getting Started

### 🧰 Prerequisites
- Node.js and npm (for React frontend)
- .NET 6 SDK or later (for backend)
- SQL Server (for database)

### ⚡ Backend Setup
1. Navigate to `web api server/server/`.
2. Restore NuGet packages:
   ```sh
   dotnet restore
   ```
3. Update the connection string in `appsettings.json` if needed.
4. Run database migrations (if applicable).
5. Start the server:
   ```sh
   dotnet run
   ```

### ⚡ Frontend Setup
1. Navigate to `react/`.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

### Usage
- The React app will run on `http://localhost:3000` by default.
- The Web API will run on `http://localhost:5000` (or as configured).
- Ensure CORS is enabled on the backend for local development.

---

## 📂 Folder Overview

- **react/src/components/**: React components for UI and features
- **react/src/axios/**: Axios API call modules
- **web api server/server/Controllers/**: API controllers
- **web api server/BL/**: Business logic classes and interfaces
- **web api server/DAL/**: Data models and data access logic
- **web api server/DTO/**: Data transfer objects

---

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License
This project is licensed under the MIT License.
