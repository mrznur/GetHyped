# Get Hyped - MERN Homepage Recreation

## Structure
```
client/        → React (Vite) frontend
server/        → Express + Mongoose backend (MVC)
  models/      → Mongoose schema
  controllers/ → Route logic
  routes/      → Express routes
  data/        → homepage.json (all page content)
assets/        → Images
```

## Setup & Run

### 1. Install server dependencies
```bash
cd server
npm install
```

### 2. Install client dependencies
```bash
cd client
npm install
```

### 3. Start MongoDB
Make sure MongoDB is running locally on port 27017.

### 4. Start the server
```bash
cd server
npm run dev
```

### 5. Start the React client
```bash
cd client
npm run dev
```

Client runs on http://localhost:3000  
API runs on http://localhost:5000
