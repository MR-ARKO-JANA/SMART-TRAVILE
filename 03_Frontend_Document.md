# Smart Travel Insights — Frontend Development

## 1. Frontend Objective
Build the user-facing React JS application for trip planning, travel management, safety, privacy and insights.

## 2. Recommended Stack
- React JS
- Vite
- React Router
- Axios
- CSS / Tailwind CSS
- Recharts or Chart.js
- Leaflet + React Leaflet for maps
- Context API for authentication/global state

## 3. Main Pages
- Login.jsx
- Register.jsx
- Home.jsx
- PlanTrip.jsx
- Trips.jsx
- TripDetails.jsx
- BucketList.jsx
- Alerts.jsx
- Safety.jsx
- Privacy.jsx
- Insights.jsx
- Profile.jsx

## 4. Frontend Responsibilities
### Authentication
Store authentication state and protect private routes.

### Trip Planning
Collect trip information and send it to backend APIs.

### Maps
Display origin/destination and route information.

### Dashboard
Display travel statistics using cards and charts.

### Consent
Provide clear controls for research-data sharing.

## 5. API Communication
Use Axios through a central API client.

Example responsibilities:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/trips
- POST /api/trips
- PUT /api/trips/:id
- DELETE /api/trips/:id
- GET /api/destinations
- POST /api/bucketlist
- GET /api/alerts
- GET /api/insights
- PUT /api/users/consent

## 6. Validation
Validate:
- Required fields
- Date format
- Budget numeric range
- Valid email
- Password requirements
- Destination fields

## 7. PBL Review Demo
Demonstrate:
1. Login
2. Dashboard
3. Create a trip
4. Save the trip
5. View trip history
6. Add a destination to bucket list
7. Open alerts
8. Show consent settings
9. Show insights dashboard
