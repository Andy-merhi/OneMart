# Quick Start Guide - OneMart

## Prerequisites ✓
- .NET 10 SDK installed
- Node.js 18+ installed
- npm installed

## Initial Setup (One time)

### 1. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 2. (Optional) Install concurrently for running both projects
```bash
npm install concurrently --save-dev
```

## Development Workflow

### Option A: Run Both Projects Together
From the root directory:
```bash
npm run dev
```

### Option B: Run Projects Separately

**Terminal 1 - Backend API:**
```bash
cd backend/OneMart.API
dotnet run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Verify Setup

1. **Backend API:**
   - Visit: https://localhost:7000/openapi/v1.json
   - You should see the OpenAPI specification

2. **Frontend:**
   - Visit: http://localhost:5173
   - You should see the React app

3. **API Proxy:**
   - Test API call: Open browser console and run:
     ```javascript
     fetch('/api/weatherforecast').then(r => r.json()).then(console.log)
     ```

## Project Structure

```
OneMart/
├── backend/
│   └── OneMart.API/
│       ├── Program.cs          # Main entry point (CORS configured)
│       ├── launchSettings.json # Port configuration
│       └── Properties/
├── frontend/
│   ├── src/                    # React components
│   ├── vite.config.ts         # Vite config (proxy configured)
│   └── package.json
├── docker-compose.yml          # Docker setup
└── README.md
```

## Key Configuration Files

### Backend CORS (`Program.cs`)
- Configured for development at `http://localhost:5173`
- Modify for production domain in the `ProductionPolicy`

### Frontend Proxy (`vite.config.ts`)
- API calls to `/api/*` are proxied to `https://localhost:7000/api/*`
- Development mode uses self-signed certificates

## Common Commands

### Backend
```bash
cd backend/OneMart.API
dotnet build              # Build
dotnet run               # Run dev server
dotnet watch run         # Run with auto-reload
dotnet test              # Run tests
dotnet publish -c Release  # Build for production
```

### Frontend
```bash
cd frontend
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run linter
```

## Troubleshooting

### Issue: CORS errors when calling API
**Solution:**
1. Ensure backend is running on port 7000
2. Check if frontend URL is in CORS policy in `Program.cs`
3. Hard refresh browser (Ctrl+Shift+R)

### Issue: Port already in use
**Solution:**
1. Backend: Edit `backend/OneMart.API/Properties/launchSettings.json`
2. Frontend: Edit `frontend/vite.config.ts` and change `server.port`

### Issue: Certificate warnings (HTTPS)
**Solution:**
1. This is normal in development with self-signed certificates
2. In browser dev tools, the requests should still succeed
3. For production, use proper SSL certificates

## Next Steps

1. ✅ Projects are created and configured
2. Create your first API endpoint
3. Build React components to consume the API
4. Set up authentication
5. Add database (Entity Framework Core)
6. Deploy to cloud

## Useful Extensions for VS Code

Install from Extensions Marketplace:
- **C# Dev Kit** - Intellisense and debugging for C#
- **Prettier** - Code formatter for JavaScript/TypeScript
- **ESLint** - JavaScript linting
- **REST Client** - Test API endpoints from VS Code

## Open in VS Code

You can open the entire project as a workspace:
```bash
code OneMart.code-workspace
```

This will open all three folders (root, backend, frontend) for easier navigation.
