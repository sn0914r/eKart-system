# eKart System

Full-stack ecommerce platform consisting of a customer-facing frontend, an administrative dashboard, and a REST API backend.

---

## System Architecture

The eKart ecosystem is built using a decoupled architecture where the frontend and admin panels interact with a centralized backend API.

### eKart Frontend

Customer-facing ecommerce application where users can browse the product catalog, manage their cart/wishlist, and complete purchases using integrated payment gateways.

### eKart Admin Panel

Administrative dashboard designed for managing the store's operations, including product inventory, order fulfillment, and business analytics.

### eKart Backend

REST API backend that handles core business logic, user authentication, database persistence, and external service integrations for payments and image storage.

---

## Repository Structure

| Repository            | Description          | Link                                                            |
| --------------------- | -------------------- | --------------------------------------------------------------- |
| **eKart Frontend**    | Customer application | [View Repository](https://github.com/sn0914r/ekart-frontend)    |
| **eKart Admin Panel** | Admin dashboard      | [View Repository](https://github.com/sn0914r/ekart-admin-panel) |
| **eKart Backend**     | REST API backend     | [View Repository](https://github.com/sn0914r/ekart-backend)     |

---

## Live Deployments

- **Customer Frontend:** [ekart-frontend.pages.dev](https://ekart-frontend.pages.dev/)
- **Admin Dashboard:** [ekart-admin-dashboard.pages.dev](https://ekart-admin-dashboard.pages.dev/)
- **Backend API:** [ekart-backend-9y0c.onrender.com](https://ekart-backend-9y0c.onrender.com/health)

---

## Core Features

- JWT authentication with access and refresh token flow
- Role-Based Access Control (RBAC) for administrative access
- Full product catalog with advanced filtering and search
- Persistent shopping cart and user wishlist
- Razorpay payment gateway integration
- Server-side order management and status tracking
- Inventory tracking with automated stock updates
- Admin analytics and revenue tracking
- Protected routes and secure API endpoints

---

## System Flow

### Authentication Flow

- Users authenticate via login/register endpoints.
- Backend issues a short-lived JWT access token and a long-lived refresh token stored in an HTTP-only cookie.
- The frontend uses the access token for authorized requests and automatically handles token rotation using the refresh token when the access token expires.

### Order & Payment Flow

- Users initiate the checkout process from the cart.
- The backend calculates final pricing based on current database records to prevent client-side price tampering.
- A Razorpay order is created server-side using the calculated amount.
- Upon successful payment on the frontend, the payment signature is transmitted to the backend.
- The backend verifies the signature using the Razorpay secret before persisting the order and reducing product stock.

### Admin Workflow

- Admins log in to the dedicated dashboard (requires `admin` role).
- Product management includes multi-image uploads via Cloudinary.
- Inventory is updated in real-time as orders are processed.
- Order statuses (Pending, Processing, Shipped, Delivered) are managed through the admin interface.

---

## Tech Stack

### Frontend Applications

- React
- Vite
- Zustand (State Management)
- TanStack Query (Data Fetching)
- React Router (Routing)
- Bootstrap & Emotion (Styling)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose (ODM)
- Joi (Request Validation)

### Security & Payments

- JSON Web Tokens (JWT)
- bcrypt (Password Hashing)
- Razorpay (Payments)

### Infrastructure

- Cloudinary (Image Hosting)
- Render (Backend Hosting)
- Cloudflare Pages (Frontend Hosting)

---

## Project Structure

The eKart ecosystem is split into three independent repositories:

- `eKart-frontend` — Customer-facing ecommerce application
- `eKart-admin-panel` — Admin dashboard for store management
- `eKart-backend` — REST API backend handling business logic, authentication, payments, and data persistence

All applications communicate through the centralized backend API.

## Environment Setup

### Backend Setup

Requires variables for MongoDB URI, JWT secrets, Cloudinary credentials, and Razorpay API keys.

1. Install dependencies: `npm install`
2. Configure `.env` based on `.env.example`.
3. Start server: `npm run dev`

### Frontend & Admin Setup

Requires the backend API URL and Razorpay public key (for frontend).

1. Install dependencies: `npm install`
2. Configure `.env` with `VITE_API_URL`.
3. Start development server: `npm run dev`

---

## Security

The system implements several critical security measures to ensure data integrity and secure transactions:

- **JWT Authentication:** All sensitive operations require a valid JWT.
- **Refresh Token Flow:** Uses HTTP-only cookies to mitigate XSS risks for session persistence.
- **RBAC:** Strictly enforces administrative permissions on the backend for all `/admin` routes.
- **Server-Side Pricing:** Product pricing is never trusted from the client; it is recalculated on the server during order creation.
- **Secure Payments:** Razorpay orders are generated server-side, and payment signatures are verified before any order is finalized or inventory is updated.
- **Password Hashing:** All user passwords are salted and hashed using `bcrypt`.

---

## Documentation

For detailed information about each part of the system:

- [eKart Frontend Documentation](https://github.com/sn0914r/ekart-frontend)
- [eKart Admin Panel Documentation](https://github.com/sn0914r/ekart-admin-panel)
- [eKart Backend Documentation](https://github.com/sn0914r/ekart-backend)
