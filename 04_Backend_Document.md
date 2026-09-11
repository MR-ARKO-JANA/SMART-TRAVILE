# Smart Travel Insights — Backend Development

## 1. Backend Objective
Provide secure APIs for authentication, trips, destinations, consent, alerts and research insights.

## 2. Recommended Stack
- Node.js
- Express.js
- PostgreSQL
- JWT
- bcrypt
- dotenv
- CORS
- Express Validator / Zod

## 3. Core API Modules
### Authentication
- Register
- Login
- Current user

### Trips
- Create trip
- Read trips
- Update trip
- Delete trip

### Bucket List
- Add destination
- Remove destination
- List saved destinations

### Consent
- Get consent status
- Update consent status

### Alerts
- Get travel alerts
- Create/manage alerts for authorized users

### Insights
- Aggregate trip data
- Travel-mode statistics
- Destination popularity
- Monthly/seasonal trends

## 4. Database Tables
### users
id, name, email, password_hash, created_at

### trips
id, user_id, origin, destination, travel_date, travel_mode, travellers, budget, notes, created_at

### destinations
id, name, description, best_season, estimated_budget, latitude, longitude

### bucket_list
id, user_id, destination_id, created_at

### consent
id, user_id, research_data_enabled, location_data_enabled, updated_at

### alerts
id, title, message, alert_type, location, created_at

### trip_events
id, trip_id, event_type, timestamp, metadata

## 5. Security
- Hash passwords with bcrypt.
- Use JWT for authentication.
- Keep secrets in .env.
- Validate request data.
- Do not expose passwords.
- Use authorization middleware.
- Never collect location continuously without appropriate permission/consent.

## 6. Backend Error Handling
Use standard responses:
- 200/201 success
- 400 invalid request
- 401 unauthenticated
- 403 unauthorized
- 404 not found
- 500 server error

## 7. Future AI API
A separate service can later call Gemini for:
- Personalized destination suggestions
- Seasonal recommendations
- Route explanation
- Travel-plan generation
- Pattern/anomaly analysis
