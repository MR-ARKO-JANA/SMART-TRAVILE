# Smart Travel Insights — Project File Structure

```text
smart-travel-insights/
│
├── frontend/
│   └── smart-travel-app/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   │   ├── Navbar.jsx
│       │   │   ├── Sidebar.jsx
│       │   │   ├── TripCard.jsx
│       │   │   ├── DestinationCard.jsx
│       │   │   ├── AlertCard.jsx
│       │   │   ├── StatCard.jsx
│       │   │   ├── MapPanel.jsx
│       │   │   └── LoadingSpinner.jsx
│       │   │
│       │   ├── pages/
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   ├── Home.jsx
│       │   │   ├── PlanTrip.jsx
│       │   │   ├── Trips.jsx
│       │   │   ├── TripDetails.jsx
│       │   │   ├── BucketList.jsx
│       │   │   ├── Alerts.jsx
│       │   │   ├── Safety.jsx
│       │   │   ├── Privacy.jsx
│       │   │   └── Insights.jsx
│       │   │
│       │   ├── services/
│       │   │   └── api.js
│       │   ├── context/
│       │   │   └── AuthContext.jsx
│       │   ├── routes/
│       │   │   └── AppRoutes.jsx
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       │
│       ├── package.json
│       └── .env
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── tripController.js
│   │   │   ├── bucketController.js
│   │   │   ├── consentController.js
│   │   │   └── insightController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── tripRoutes.js
│   │   │   ├── bucketRoutes.js
│   │   │   ├── consentRoutes.js
│   │   │   └── insightRoutes.js
│   │   ├── models/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── docs/
│   ├── 01_Product_Requirement_Document.md
│   ├── 02_UI_UX_Design_Document.md
│   ├── 03_Frontend_Document.md
│   ├── 04_Backend_Document.md
│   ├── 05_Tech_Stack_Document.md
│   ├── 06_Implementation_Plan.md
│   ├── 07_How_And_What_I_Do.md
│   ├── 08_File_Structure.md
│   └── 09_Workflow.md
│
└── README.md
```

## Recommended Development Order
components → pages → routing → backend → database → API integration → maps → insights → AI.
