# URL Shortener Server

## Overview

This is a URL shortening service built with **Node.js**, **Express**, and **MongoDB**. The server provides an API to shorten URLs and redirect users to the original URL.

---

## Features

- **Shorten URLs**: Generate shortened versions of long URLs.
- **Redirect URLs**: Navigate to the original URL using the shortened link.
- **Flexible Input**: Accepts original URLs via POST body or GET query parameters.

---

## Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB**

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Pegasus1502/Url-shortner.git
cd Url-shortener
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
HOST=localhost
PORT=3000
MONGO_URI=mongodb://<your_mongodb_uri>
```

### 4. Start the Server

```bash
npm start
```

By default, the server will run on `http://localhost:3000`.

---

## API Endpoints

### 1. **Shorten URL**

**POST** `/shorten`

#### Request Body (JSON):

```json
{
  "originalUrl": "https://example.com"
}
```

#### Response:

```json
{
  "status": 201,
  "message": "New URL created successfully",
  "data": "http://localhost:3000/<shortId>"
}
```

**GET** `/<shortId>`

#### Query Parameters:

- `originalUrl` (required): The URL to shorten.

#### Response:

Same as the POST endpoint.

---

### 2. **Redirect URL**

**GET** `/:shortUrl`

#### Example:

Visiting `http://localhost:3000/<shortId>` redirects the user to the original URL.

---

## Project Structure

```
url-shortener-server
├── config
│   └── db.js            # MongoDB connection setup
├── controllers
│   └── controller.url.js # Business logic for URL operations
├── models
│   └── model.url.js      # Mongoose schema for URL data
├── routes
│   └── route.url.js     # API routes
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
└── index.js             # Entry point of the application
```

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **crypto** (for generating short IDs)

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Ratul Dutta | [https://ratulverse.in/]
