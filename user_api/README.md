# 🔐 JWT Authentication & Authorization

A practical backend authentication and authorization project built with **Node.js, Express.js, Prisma, MySQL, bcrypt, and JWT**.

The project covers user registration, login, JWT authentication, protected routes, and role-based authorization.

## 🛠️ Tech Stack

* **Node.js** — Runtime
* **Express.js** — REST API
* **Prisma** — ORM
* **MySQL** — Database
* **bcrypt** — Password hashing
* **JWT** — Authentication
* **dotenv** — Environment variables
* **Postman / Thunder Client** — API testing

## ✨ Features

* User registration
* Secure password hashing
* User login
* JWT token generation
* JWT-protected routes
* User profile APIs
* Role-based authorization
* USER / ADMIN roles
* Admin user management
* Refresh tokens
* Logout
* API validation and error handling

## 📁 Project Structure

```text
user_api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── lib/
│   │   └── prisma.js
│   ├── routes/
│   │   └── auth.routes.js
│   └── server.js
├── .env
├── package.json
└── index.js
```

## 🌐 API Endpoints

### Authentication

| Method | Endpoint             | Auth          |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Public        |
| POST   | `/api/auth/login`    | Public        |
| POST   | `/api/auth/refresh`  | Refresh Token |
| POST   | `/api/auth/logout`   | JWT           |

### User

| Method | Endpoint             | Auth |
| ------ | -------------------- | ---- |
| GET    | `/api/users/profile` | JWT  |
| PUT    | `/api/users/profile` | JWT  |

### Admin

| Method | Endpoint               | Auth        |
| ------ | ---------------------- | ----------- |
| GET    | `/api/admin/users`     | JWT + ADMIN |
| GET    | `/api/admin/users/:id` | JWT + ADMIN |
| DELETE | `/api/admin/users/:id` | JWT + ADMIN |

The planned endpoints and authentication requirements follow the project's original roadmap.

## 🔐 Authentication Flow

```text
REGISTER
   ↓
Validate Input
   ↓
Hash Password
   ↓
Prisma
   ↓
Database

LOGIN
   ↓
Find User
   ↓
Compare Password
   ↓
Generate JWT
   ↓
Return Token

PROTECTED REQUEST
   ↓
Bearer Token
   ↓
JWT Middleware
   ↓
Verify Token
   ↓
req.user
   ↓
Protected API
```

## 👥 Authorization

```text
Authenticated User
        ↓
      Role
     /    \
   USER   ADMIN
    ↓       ↓
 Limited   Full
 Access    Access
```

Users can access their own protected APIs, while administrators can manage users.

## 📊 Project Progress

* [x] Prisma User model
* [x] bcrypt password hashing
* [x] Registration API
* [ ] Login API
* [ ] JWT generation
* [ ] JWT authentication middleware
* [ ] Protected routes
* [ ] Role-based authorization
* [ ] Admin APIs
* [ ] Refresh tokens
* [ ] Logout
* [ ] Validation & error handling
* [ ] Production-style architecture

## 🚀 Current Status

**Registration API completed.**

### Next Step

`POST /api/auth/login` → `bcrypt.compare()` → `jwt.sign()`

This is the next stage of the project roadmap.
