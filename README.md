 # Event Management API

This is a RESTful API for managing events, built using **Node.js** and **MongoDB** (without Mongoose). It allows users to create, retrieve, update, and delete events while following a flexible, schema-independent data model.

---

## 🚀 Features
- Fetch events by ID or latest events with pagination
- Create new events with file uploads
- Update event details
- Delete events by ID
- Uses **MongoDB native driver** (No Mongoose)
- No strict schema enforcement for flexible data storage

---

## 📌 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using `mongodb` package)
- **Environment Variables:** dotenv

---

## 🛠 Setup & Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/event-api.git
cd event-api
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the root directory and add:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/eventDB
```

### 4️⃣ Start the Server
```sh
node server.js
```
_Server will run on `http://localhost:3000`_

---

## 📌 API Endpoints

### 🔹 Fetch Events
| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/api/v3/app/events?id=:event_id` | Get an event by its unique ID |
| **GET** | `/api/v3/app/events?type=latest&limit=5&page=1` | Get latest events with pagination |

### 🔹 Create an Event
| Method | Endpoint | Payload |
|--------|----------|---------|
| **POST** | `/api/v3/app/events` | `name, tagline, schedule, description, files[image], moderator, category, sub_category, rigor_rank` |

### 🔹 Update an Event
| Method | Endpoint | Payload |
|--------|----------|---------|
| **PUT** | `/api/v3/app/events/:id` | Same as POST payload |

### 🔹 Delete an Event
| Method | Endpoint |
|--------|----------|
| **DELETE** | `/api/v3/app/events/:id` |

---

## 📌 Event Object Data Model
```json
{
  "_id": "ObjectId",
  "uid": 18,
  "name": "Tech Conference 2025",
  "tagline": "The Future of Tech",
  "schedule": "2025-04-10T15:00:00Z",
  "description": "A conference on AI and Web3",
  "files": { "image": "image_url" },
  "moderator": "John Doe",
  "category": "Technology",
  "sub_category": "Artificial Intelligence",
  "rigor_rank": 5,
  "attendees": [1, 2, 3, 4]
}
```

---

## ⚠️ Directions & Limitations
- **Do not use Mongoose**, use `mongodb` package.
- No strict schemas (flexible data model).
- `_id` (MongoDB ObjectId) is the unique identifier.
- Data may slightly vary based on asset type.


 

 
---

## 🎯 Final Notes
✅ Ensure your API is tested via **Postman** or **cURL** before submission.  
✅ Use a `.gitignore` file to exclude `node_modules` and `.env`.  
✅ Follow best coding practices & add proper error handling.  

 
