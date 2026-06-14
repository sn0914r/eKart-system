# eKart System

Full-stack ecommerce platform consisting of a customer-facing frontend, an administrative dashboard, and a REST API backend.

---

## System Architecture

The eKart ecosystem is built using a decoupled architecture where the frontend and admin panel interact with a centralized backend API.

### eKart Frontend

Customer-facing ecommerce application where users can browse the product catalog, manage their cart and wishlist, and complete purchases via Razorpay.

### eKart Admin Panel

Administrative dashboard for managing store operations — product inventory, order fulfillment, shipping status updates, and business analytics.

### eKart Backend

REST API backend handling core business logic, JWT authentication, database persistence, and integrations for payments, image storage, and email notifications. Containerized with Docker and documented via OpenAPI/Scalar.

---

## Repository Structure

| Repository            | Description          | Link                                                            |
| --------------------- | -------------------- | --------------------------------------------------------------- |
| **eKart Frontend**    | Customer application | [View Repository](https://github.com/sn0914r/ekart-frontend)    |
| **eKart Admin Panel** | Admin dashboard      | [View Repository](https://github.com/sn0914r/ekart-admin-panel) |
| **eKart Backend**     | REST API backend     | [View Repository](https://github.com/sn0914r/ekart-backend)     |

---

## Live Deployments

| Service           | URL                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Customer Frontend | [ekart-frontend.pages.dev](https://ekart-frontend.pages.dev/auth/login?email=user123@gmail.com&password=user123)                 |
| Admin Dashboard   | [ekart-admin-dashboard.pages.dev](https://ekart-admin-dashboard.pages.dev/auth/login?email=admin123@gmail.com&password=admin123) |
| API Documentation | [ekart-backend-s0x7.onrender.com/docs](https://ekart-backend-s0x7.onrender.com/docs)                                             |

---

## Core Features

### Customer

- Product catalog with search, filtering by category/price, and sorting
- Persistent cart and wishlist across sessions
- Checkout flow integrated with Razorpay payment gateway
- Snapshot-based order items — price and product details are captured at time of purchase, unaffected by future product changes
- Order history with status tracking and email notifications

### Admin

- Product and category CRUD with multi-image upload via Cloudinary
- Inventory tracking with low stock alerts
- Shipping status management (Pending → Packed → Shipped → Delivered)
- Revenue analytics with monthly trends and top-product rankings
- Role-based access control enforced on all admin routes

### Security & Reliability

- JWT access + refresh tokens with HTTP-only cookies
- Server-side pricing — final price is recalculated from the database on order creation, client values are never trusted
- Server-side Razorpay signature verification before order is persisted
- Idempotency checks on payment routes to prevent duplicate charges
- Transaction-safe stock reduction with automatic reversal on order cancellation
- Rate limiting on sensitive endpoints
- Request validation via Joi, security headers via Helmet
- Password hashing with bcrypt

---

## System Flow

### Authentication Flow

- Users authenticate via login/register endpoints.
- Backend issues a short-lived JWT access token and a long-lived refresh token stored in an HTTP-only cookie.
- The frontend uses the access token for authorized requests and automatically handles token rotation using the refresh token when the access token expires.

### Order & Payment Flow

- Users initiate checkout from the cart.
- Backend recalculates final pricing from the database to prevent client-side price tampering.
- A Razorpay order is created server-side using the calculated amount.
- On successful payment, the signature is sent to the backend for verification.
- Only after signature verification does the backend persist the order, reduce stock, and trigger a confirmation email via Nodemailer.
- Order items are stored as snapshots — product name, image, price, and variant are frozen at purchase time.

### Order Lifecycle

- **Order Status** (user/system controlled): `PENDING → CONFIRMED → CANCELLED`
- **Shipping Status** (admin controlled): `PENDING → PACKED → SHIPPED → DELIVERED → CANCELLED`

### Admin Workflow

- Admins log in to the dedicated dashboard (requires `admin` role).
- Product management includes multi-image uploads via Cloudinary.
- Inventory is updated automatically as orders are confirmed.
- Shipping status is updated manually through the admin interface.
- Email notifications are sent to users on order confirmation and shipping status changes.

---

## Tech Stack

### Frontend

- React, Vite, React Router
- Zustand (State Management)
- TanStack Query (Data Fetching & Caching)
- Bootstrap & Emotion (Styling)

### Backend

- Node.js, Express.js
- MongoDB, Mongoose
- Redis (Caching & Rate Limiting)
- Joi (Validation), Helmet (Security Headers)
- Nodemailer (Email Notifications)

### Security & Payments

- JSON Web Tokens (JWT)
- bcrypt (Password Hashing)
- Razorpay (Payment Gateway)

### Infrastructure & Tooling

- Docker (Containerization)
- Cloudinary (Image Hosting)
- OpenAPI/Scalar (API Documentation)
- Render (Backend Hosting)
- Cloudflare Pages (Frontend Hosting)

---

## Environment Setup

### Backend Setup

Requires variables for MongoDB URI, JWT secrets, Cloudinary credentials, Razorpay API keys, and Nodemailer credentials.

```bash
npm install
cp .env.example .env   # configure your environment variables
npm run dev
```

Or run with Docker:

```bash
docker build -t ekart-backend .
docker run --env-file .env -p 3000:3000 ekart-backend
```

### Frontend & Admin Setup

Requires the backend API URL. Frontend also requires the Razorpay public key.

```bash
npm install
cp .env.example .env   # set VITE_API_URL
npm run dev
```

---

## API Documentation

Interactive API docs are available at `/docs` (powered by OpenAPI/Scalar) when the backend is running.

- [Live API Docs](https://ekart-backend-s0x7.onrender.com/docs)

---

## Security Notes

- All sensitive operations require a valid JWT access token.
- HTTP-only cookies are used for refresh tokens to mitigate XSS risks.
- Admin routes are protected by RBAC enforced strictly on the backend — role is never trusted from the client.
- Razorpay orders are generated server-side; payment signatures are verified before any order is finalized or stock is updated.
- Product pricing is recalculated server-side during order creation — client-submitted prices are ignored.
