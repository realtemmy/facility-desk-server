# Sites Module

This module handles all facility management entities including complexes, buildings, floors, units, and rooms.

## Structure

```
sites/
├── controllers/       # Request handlers for each entity
├── services/         # Business logic and database operations
├── routes/           # API route definitions
├── dto/              # Data Transfer Objects (type definitions)
└── index.ts          # Module exports
```

## Entities

### 1. Complexes
A complex is the top-level entity representing a collection of buildings.

**Endpoints:**
- `GET /api/v1/complexes` - List all complexes (with pagination and filtering)
- `GET /api/v1/complexes/:id` - Get a specific complex
- `POST /api/v1/complexes` - Create a new complex
- `PUT /api/v1/complexes/:id` - Update a complex
- `DELETE /api/v1/complexes/:id` - Delete a complex

**Query Parameters:**
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `sortBy` - Field to sort by (name, code, createdAt, condition, criticality)
- `sortOrder` - Sort order (asc, desc)
- `condition` - Filter by condition (GOOD, FAIR, POOR)
- `criticality` - Filter by criticality (LOW, MEDIUM, HIGH)
- `status` - Filter by status (ACTIVE, INACTIVE, SUSPENDED)
- `search` - Search in code, name, or description

### 2. Buildings
Buildings belong to a complex and contain multiple floors.

**Endpoints:**
- `GET /api/v1/buildings` - List all buildings
- `GET /api/v1/buildings/:id` - Get a specific building
- `POST /api/v1/buildings` - Create a new building
- `PUT /api/v1/buildings/:id` - Update a building
- `DELETE /api/v1/buildings/:id` - Delete a building

**Query Parameters:**
- `page`, `limit`, `sortBy`, `sortOrder` - Pagination and sorting
- `complexId` - Filter by complex
- `mainUse` - Filter by main use (RESIDENTIAL, COMMERCIAL, INDUSTRIAL, MIXED, OTHER)
- `condition`, `criticality`, `status` - Status filters
- `search` - Search in code, name, or address

### 3. Floors
Floors belong to a building and contain rooms and units.

**Endpoints:**
- `GET /api/v1/floors` - List all floors
- `GET /api/v1/floors/:id` - Get a specific floor
- `POST /api/v1/floors` - Create a new floor
- `PUT /api/v1/floors/:id` - Update a floor
- `DELETE /api/v1/floors/:id` - Delete a floor

**Query Parameters:**
- `page`, `limit`, `sortBy`, `sortOrder` - Pagination and sorting
- `buildingId` - Filter by building
- `condition`, `criticality`, `status` - Status filters
- `search` - Search in code or name

### 4. Units
Units belong to a floor and can contain multiple rooms.

**Endpoints:**
- `GET /api/v1/units` - List all units
- `GET /api/v1/units/:id` - Get a specific unit
- `POST /api/v1/units` - Create a new unit
- `PUT /api/v1/units/:id` - Update a unit
- `DELETE /api/v1/units/:id` - Delete a unit

**Query Parameters:**
- `page`, `limit`, `sortBy`, `sortOrder` - Pagination and sorting
- `floorId` - Filter by floor
- `search` - Search in code or name

### 5. Rooms
Rooms belong to a floor and optionally to a unit.

**Endpoints:**
- `GET /api/v1/rooms` - List all rooms
- `GET /api/v1/rooms/:id` - Get a specific room
- `POST /api/v1/rooms` - Create a new room
- `PUT /api/v1/rooms/:id` - Update a room
- `DELETE /api/v1/rooms/:id` - Delete a room

**Query Parameters:**
- `page`, `limit`, `sortBy`, `sortOrder` - Pagination and sorting
- `floorId` - Filter by floor
- `unitId` - Filter by unit
- `use` - Filter by room use (OFFICE, STORAGE, LABORATORY, OTHER)
- `search` - Search in code or name

## Relationships

```
Complex (1) ─┬─> Building (many)
              │
              └─> Photos (many)

Building (1) ─┬─> Floor (many)
              ├─> Photos (many)
              └─> CalenderEntity (optional)

Floor (1) ────┬─> Room (many)
              └─> Unit (many)

Unit (1) ─────┬─> Room (many)
              └─> Photos (many)

Room (1) ─────┬─> Floor (1) [required]
              ├─> Unit (1) [optional]
              └─> Photos (many)
```

## Example Requests

### Create a Complex
```bash
POST /api/v1/complexes
{
  "code": "COMPLEX-001",
  "name": "Downtown Complex",
  "description": "Main downtown facility complex",
  "address": "123 Main St",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "status": "ACTIVE",
  "condition": "GOOD",
  "criticality": "HIGH"
}
```

### Create a Building
```bash
POST /api/v1/buildings
{
  "code": "BLDG-A",
  "name": "Building A",
  "mainUse": "COMMERCIAL",
  "complexId": "uuid-of-complex",
  "address": "123 Main St, Building A",
  "totalFloors": 5,
  "status": "ACTIVE",
  "condition": "GOOD"
}
```

### Create a Floor
```bash
POST /api/v1/floors
{
  "code": "FL-1",
  "name": "First Floor",
  "level": 1,
  "buildingId": "uuid-of-building",
  "grossArea": 1500.5,
  "status": "ACTIVE"
}
```

### Create a Unit
```bash
POST /api/v1/units
{
  "code": "UNIT-101",
  "name": "Unit 101",
  "floorId": "uuid-of-floor"
}
```

### Create a Room
```bash
POST /api/v1/rooms
{
  "code": "RM-101A",
  "name": "Conference Room A",
  "use": "OFFICE",
  "floorId": "uuid-of-floor",
  "unitId": "uuid-of-unit" // optional
}
```

## Response Format

All responses follow this format:

```json
{
  "success": true,
  "data": {
    // Entity data or paginated list
  }
}
```

For paginated lists:

```json
{
  "success": true,
  "data": {
    "data": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "totalPages": 5
    }
  }
}
```

## Features

- **Full CRUD operations** for all entities
- **Pagination** and **sorting** on all list endpoints
- **Advanced filtering** by various attributes
- **Search functionality** across relevant fields
- **Nested relationships** - entities include related data when fetched
- **Cascading deletes** - deleting a parent entity removes children
- **Photo management** - attach photos to complexes, buildings, units, and rooms
