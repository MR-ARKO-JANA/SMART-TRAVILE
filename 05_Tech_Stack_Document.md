# Smart Travel Insights — Technology Stack

## 1. Frontend
| Technology | Purpose |
|---|---|
| React JS | User interface |
| Vite | Development/build tooling |
| React Router | Page navigation |
| Axios | API communication |
| Tailwind CSS / CSS | Styling |
| Recharts | Charts |
| React Leaflet | Maps |

## 2. Backend
| Technology | Purpose |
|---|---|
| Node.js | Server runtime |
| Express.js | REST API |
| JWT | Authentication |
| bcrypt | Password hashing |
| dotenv | Environment variables |

## 3. Database
PostgreSQL is recommended because trips, users, consent records and relationships are structured and relational.

## 4. Maps
Google Maps or Mapbox can be used for production navigation. For the PBL MVP, Leaflet/OpenStreetMap can reduce setup complexity.

## 5. Cloud
Future deployment:
- Frontend: Vercel / Netlify
- Backend: Render / Railway / AWS
- Database: PostgreSQL cloud provider
- Storage: AWS S3 if image/file storage becomes necessary

## 6. AI
Gemini integration can provide:
- Smart travel suggestions
- Seasonal recommendations
- Trip-plan generation
- Travel pattern explanations
- Anomaly detection support

## 7. Security & Privacy
- JWT authentication
- Password hashing
- Consent management
- Data minimization
- User-controlled research-data sharing

## 8. Important PBL Decision
Although the original concept mentions React Native/Flutter, this review specifically requires a React JS project. Therefore, the current PBL implementation should use **React JS for the frontend**, with React Native/Flutter treated as a future mobile-app extension.
