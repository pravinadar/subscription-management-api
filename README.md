# Subscription Management API

A robust RESTful API for managing user subscriptions built with Node.js, Express, and MongoDB. This API provides comprehensive subscription management capabilities with user authentication, security middleware, and workflow automation.

## Features

### 🔐 User Authentication & Authorization
- User registration with secure password hashing (bcrypt)
- JWT-based authentication system
- Protected routes with authentication middleware
- User profile management

### 📋 Subscription Management
- Create, read, update, and delete subscriptions
- Support for monthly and yearly subscription frequencies
- Automatic renewal date calculation
- Subscription status tracking (active, inactive, cancelled)
- User-specific subscription access control

### 🛡️ Security & Rate Limiting
- **Arcjet Integration** for advanced security:
  - Rate limiting with token bucket algorithm
  - Bot detection and filtering
  - Shield protection against common attacks
  - Configurable security rules

### 📊 Data Validation
- Comprehensive input validation with Mongoose schemas
- Email format validation
- Password strength requirements
- Subscription price and date validation

## API Endpoints

### Authentication Routes
```
POST /api/users/register    - Register a new user
POST /api/users/login       - Login user
GET  /api/users/get-profile - Get user profile (authenticated)
```

### Subscription Routes
All subscription routes require authentication.
```
POST   /api/subscriptions/     - Create a new subscription
GET    /api/subscriptions/     - Get all user's subscriptions
GET    /api/subscriptions/:id  - Get subscription by ID
PUT    /api/subscriptions/:id  - Update subscription
DELETE /api/subscriptions/:id  - Delete subscription
```

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Arcjet (rate limiting, bot detection, shield protection)
- **Password Hashing**: bcryptjs

## Data Models

### User Model
- Name (required, 3-50 characters)
- Email (required, unique, validated format)
- Password (required, minimum 8 characters, hashed)
- Subscriptions (array of subscription references)

### Subscription Model
- Name (required, 3-50 characters)
- Price (required, 0-10000 range)
- Frequency (monthly/yearly)
- Status (active/inactive/cancelled)
- Start Date (required, defaults to current date)
- Renewal Date (auto-calculated based on frequency)
- User reference (required)

## Security Features

### Arcjet Protection
- **Rate Limiting**: 5 requests per 10 seconds with capacity of 3
- **Bot Detection**: Allows search engines and Postman, blocks malicious bots
- **Shield Protection**: Guards against common web attacks
- **IP-based Characteristics**: Tracks requests by source IP

### Authentication Security
- JWT tokens with configurable expiration
- Password hashing with bcrypt salt rounds
- Authorization header validation
- User-specific resource access control

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables

4. Start the server:
   ```bash
   npm run dev
   ```

## Usage Examples

### Register a User
```bash
POST /api/users/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Create a Subscription
```bash
POST /api/subscriptions/
Authorization: Bearer <jwt_token>
{
  "name": "Netflix Premium",
  "price": 15.99,
  "frequency": "monthly"
}
```

### Get User Subscriptions
```bash
GET /api/subscriptions/
Authorization: Bearer <jwt_token>
```

## Automatic Features

- **Renewal Date Calculation**: Automatically calculates renewal dates based on subscription frequency
- **Status Updates**: Updates subscription status based on renewal dates
- **Security Monitoring**: Real-time protection against malicious requests
- **Request Validation**: Comprehensive input validation and sanitization

## Error Handling

The API includes comprehensive error handling with appropriate HTTP status codes:
- 400: Bad Request (validation errors)
- 401: Unauthorized (authentication required)
- 403: Forbidden (access denied, rate limited)
- 404: Not Found (resource doesn't exist)
- 429: Too Many Requests (rate limit exceeded)
- 500: Internal Server Error
