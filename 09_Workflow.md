# Smart Travel Insights — System Workflow

## 1. Overall Workflow

```text
User
  ↓
React JS Frontend
  ↓
Authentication
  ↓
Dashboard
  ↓
Trip Planning
  ↓
Express REST API
  ↓
PostgreSQL
  ↓
Trip / Destination / Consent Data
  ↓
Insights & Analytics
  ↓
Research Dashboard
```

## 2. User Trip Workflow

```text
Login/Register
      ↓
Home Dashboard
      ↓
Plan Trip
      ↓
Enter Origin + Destination + Date + Mode + Budget
      ↓
Validate Form
      ↓
Send API Request
      ↓
Express Backend
      ↓
PostgreSQL
      ↓
Trip Saved
      ↓
React Updates My Trips
```

## 3. Consent Workflow

```text
User opens Privacy
       ↓
Reads data-usage explanation
       ↓
Research Data Sharing: OFF / ON
       ↓
User chooses preference
       ↓
React sends preference to API
       ↓
Backend updates consent record
       ↓
Future research processing respects consent
```

## 4. Research Insight Workflow

```text
Consent-based trip records
          ↓
Backend aggregation
          ↓
Remove/minimize personally identifying information
          ↓
Calculate statistics
          ↓
Popular Routes
Travel Modes
Seasonal Trends
Trip Counts
          ↓
React Insights Dashboard
          ↓
Charts + Reports
```

## 5. AI Workflow — Future

```text
User Trip Request
      ↓
Backend
      ↓
Gemini API
      ↓
Travel Recommendation
      ↓
Route / Destination / Seasonal Suggestions
      ↓
React UI
```

## 6. Emergency Workflow

```text
User opens Safety
      ↓
SOS Action
      ↓
Permission / location availability check
      ↓
Emergency information/support
      ↓
Alert / assistance workflow
```

## 7. Complete System

```text
                ┌─────────────────────┐
                │       USER          │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │   REACT JS UI       │
                └──────────┬──────────┘
                           ↓
                ┌─────────────────────┐
                │ NODE + EXPRESS API  │
                └──────┬───────┬──────┘
                       ↓       ↓
              ┌──────────┐  ┌──────────┐
              │PostgreSQL│  │ Gemini   │
              │ Database │  │ (Future) │
              └────┬─────┘  └──────────┘
                   ↓
          ┌───────────────────┐
          │ Research Insights │
          └───────────────────┘
                   ↓
          ┌───────────────────┐
          │ Planner Dashboard │
          └───────────────────┘
```

## 8. PBL Review Workflow
Start application → Login → Show dashboard → Create a trip → Show saved trip → Add bucket-list destination → Show alerts/safety → Show privacy/consent → Show insights → Explain completed percentage → Explain remaining work.
