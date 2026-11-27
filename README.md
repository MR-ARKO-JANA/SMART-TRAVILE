# 🧳 Smart Travel Insights

> Your India, Your Journey — a full-stack React + Node.js travel planning platform with AI-powered insights.

![Smart Travel Banner](https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=80)

---
Demo link : https://smart-travile.vercel.app

## 🚀 Features

| Feature | Status |
|---|---|
| User Registration / Login (JWT) | ✅ |
| Home Dashboard with Indian destinations | ✅ |
| Upcoming & Done Trip Management | ✅ |
| Trip Detail Pages (Mumbai→Goa, Delhi→Manali, etc.) | ✅ |
| Smart Itinerary Builder | ✅ |
| Destination Search & Bucket List | ✅ |
| Budget Tracker | ✅ |
| Travel Alerts (region-based) | ✅ |
| Friends / Community section | ✅ |
| Travel Insights & Charts | ✅ |
| Emergency / SOS & Safety page | ✅ |
| Data Consent Management | ✅ |
| Fully Indian localized (INR, Indian cities) | ✅ |

---

## 🛠 Tech Stack

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS** — custom design tokens
- **React Router v6**
- **Axios** — API client with JWT interceptor
- **Lucide React** — icons
- **Recharts** — analytics charts

### Backend
- **Node.js** + **Express**
- **PostgreSQL** via **Neon** (serverless)
- **bcryptjs** — password hashing
- **jsonwebtoken** — JWT auth
- **dotenv** — environment config

---

## 📁 Project Structure

```
smart-travel/
├── backend/
│   ├── src/
│   │   ├── config/db.js          # Neon PostgreSQL pool
│   │   ├── controllers/          # Auth, Trips, Destinations
│   │   ├── routes/               # API route definitions
│   │   ├── middleware/           # JWT auth middleware
│   │   └── server.js             # Express entry point
│   └── .env                      # DATABASE_URL, JWT_SECRET
│
├── frontend/smart-travel-app/
│   ├── src/
│   │   ├── context/AuthContext.jsx
│   │   ├── pages/                # All 11 pages
│   │   ├── components/           # Navbar, Cards, etc.
│   │   └── App.jsx
│   └── .env                      # VITE_API_URL
│
└── docs/                         # PRD, Architecture, Design docs
```

---

## ⚙️ Setup

### Prerequisites
- Node.js 18+
- A [Neon](https://neon.tech) PostgreSQL database

### Backend
```bash
cd backend
npm install
# Create .env with DATABASE_URL and JWT_SECRET
npm run dev
# → runs on http://localhost:5000
```

### Frontend
```bash
cd frontend/smart-travel-app
npm install
# Create .env with VITE_API_URL=http://localhost:5000
npm run dev
# → runs on http://localhost:5173
```

---

## 🌍 Indian Destinations Included

🏖️ Goa &nbsp;|&nbsp; 🏔️ Manali &nbsp;|&nbsp; 🏯 Jaipur &nbsp;|&nbsp; 🌿 Kerala &nbsp;|&nbsp; ❄️ Leh-Ladakh &nbsp;|&nbsp; 🏛️ Varanasi &nbsp;|&nbsp; 🌊 Andaman &nbsp;|&nbsp; 🦁 Ranthambore

---

## 👨‍💻 Author

**Arko Jana** — Full Stack Developer  
GitHub: [@MR-ARKO-JANA](https://github.com/MR-ARKO-JANA)

---

## 📄 License

MIT © 2026 Smart Travel Insights
