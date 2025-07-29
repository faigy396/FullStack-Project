
# 🛠️ Web API Backend for Shop Project

<p align="center">
  <img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET"/>
  <img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server"/>
</p>

<p align="center">
  <img src="https://img.icons8.com/color/96/000000/database.png" width="60"/>
  <img src="https://img.icons8.com/color/96/000000/api-settings.png" width="60"/>
  <img src="https://img.icons8.com/color/96/000000/lock-2.png" width="60"/>
</p>

This directory contains the backend for the Full Stack Shop Project, built with <img src="https://img.icons8.com/color/24/000000/net-framework.png" width="20"/> ASP.NET Core Web API. It provides RESTful endpoints for managing shop data, user authentication, and business logic.

---

## 🗂️ Project Structure

- 🗄️ **server/**: Main ASP.NET Core Web API project
  - 🧩 `Controllers/`: API controllers for handling HTTP requests
  - ⚙️ `appsettings.json`: Configuration file (update connection string here)
- 🧠 **BL/**: Business Logic Layer
  - 🏷️ `classes/`: Business logic implementations
  - 📝 `services/`: Interfaces for business logic
- 💾 **DAL/**: Data Access Layer
  - 🗃️ `Models/`: Entity Framework models
  - 📦 `classes/`: Data access implementations
  - 📝 `services/`: Data access interfaces
- 🔄 **DTO/**: Data Transfer Objects for API communication

---

## ✨ Features

- 🔐 User authentication and registration
- 🗂️ CRUD operations for categories, games, customers, shopping carts, and shopping details
- 🧠 Business logic separation
- ⚠️ Data validation and error handling

---

## 🚀 Getting Started


### 🧰 Prerequisites
- <img src="https://img.icons8.com/color/24/000000/net-framework.png" width="20"/> .NET 6 SDK or later
- <img src="https://img.icons8.com/color/24/000000/database.png" width="20"/> SQL Server

### ⚡ Setup Instructions
1. Navigate to the <code>server/</code> directory:
   ```sh
   cd server
   ```
2. Restore NuGet packages:
   ```sh
   dotnet restore
   ```
3. Update the connection string in <code>appsettings.json</code> as needed.
4. (Optional) Run database migrations if using Entity Framework.
5. Start the API server:
   ```sh
   dotnet run
   ```

The API will be available at <code>http://localhost:5000</code> (or as configured).

## API Endpoints
- `/api/category` - Manage categories
- `/api/game` - Manage games
- `/api/customer` - Manage customers
- `/api/shopping` - Manage shopping carts
- `/api/shoppingdetails` - Manage shopping details
- `/api/auth` - User authentication

## Development Notes
- Ensure CORS is enabled for frontend communication.
- Business logic and data access are separated for maintainability.
- DTOs are used for secure and efficient data transfer.

## License
This project is licensed under the MIT License.
