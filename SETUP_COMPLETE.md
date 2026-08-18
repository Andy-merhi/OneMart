# 🎉 OneMart Setup Complete!

## ✅ What Was Created

Your .NET + React project is now fully configured and ready for development!

### Project Structure
```
OneMart/
├── backend/
│   └── OneMart.API/              # .NET 10 ASP.NET Core Web API
│       ├── Program.cs            # ✅ CORS configured
│       ├── launchSettings.json
│       ├── Properties/
│       ├── Controllers/
│       └── bin/ & obj/
├── frontend/                      # React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── WeatherForecast.jsx    # ✅ Example API consumer
│   │   │   └── WeatherForecast.css
│   │   └── services/
│   │       └── api.js            # ✅ API helper functions
│   ├── public/
│   ├── vite.config.ts            # ✅ API proxy configured
│   ├── .env.development          # ✅ Development environment
│   ├── .env.production           # ✅ Production environment
│   ├── package.json
│   └── node_modules/             # ✅ Dependencies installed
├── .vscode/
│   ├── launch.json               # ✅ Debug configurations
│   └── settings.json             # ✅ Code editor settings
├── .github/workflows/
│   └── ci.yml                    # ✅ CI/CD pipeline
├── docker-compose.yml            # ✅ Docker setup
├── package.json                  # ✅ Root npm scripts
├── OneMart.code-workspace        # ✅ VS Code workspace
├── README.md                     # 📖 Full documentation
├── QUICKSTART.md                 # 🚀 Quick start guide
├── API.http                      # 🧪 API testing file
└── .gitignore                    # ✅ Git configuration
```

## 🚀 Quick Start

### 1. **Run Backend Only** (Terminal 1)
```bash
cd backend/OneMart.API
dotnet run
```
✅ Backend will run at `https://localhost:7000`

### 2. **Run Frontend Only** (Terminal 2)
```bash
cd frontend
npm run dev
```
✅ Frontend will run at `http://localhost:5173`

### 3. **Run Both Together** (from root)
```bash
npm install  # Only if concurrently not installed
npm run dev
```
✅ Both will start automatically

## 📋 Key Features Configured

### Backend (ASP.NET Core)
- ✅ **CORS Enabled**: Configured for `http://localhost:5173` (dev) and production domain
- ✅ **OpenAPI/Swagger**: Available at `https://localhost:7000/openapi/v1.json`
- ✅ **Sample API Endpoint**: `/weatherforecast` (modify as needed)
- ✅ **.NET 10**: Latest SDK with all modern features

### Frontend (React + Vite)
- ✅ **API Proxy**: All `/api/*` calls proxied to backend
- ✅ **Example Component**: `WeatherForecast.jsx` demonstrates API consumption
- ✅ **API Service**: `src/services/api.js` with helper functions
- ✅ **Environment Files**: `.env.development` and `.env.production`
- ✅ **Linting**: Oxlint configured for code quality
- ✅ **React Compiler**: Latest React features supported

## 🔗 API Communication

### Frontend → Backend Communication
All API calls in the frontend can use the relative path:
```javascript
// This automatically proxies to https://localhost:7000/api/weatherforecast
const response = await fetch('/api/weatherforecast')
```

### CORS is Properly Configured
- ✅ Credentials support enabled
- ✅ Handles preflight requests
- ✅ Development and production policies separate

## 🛠️ Development Setup

### Recommended VS Code Extensions
```
ms-dotnettools.csharp
ms-dotnettools.csdevkit
esbenp.prettier-vscode
dbaeumer.vscode-eslint
GitHub.copilot
ms-vscode.rest-client
```

### Open in VS Code
```bash
code OneMart.code-workspace
```
This opens all three folders (root, backend, frontend) in one workspace.

## 📝 Example: Creating Your First API Endpoint

### Backend (C#)
```csharp
// Add to Program.cs or in a controller
app.MapGet("/api/hello", () => new { message = "Hello from .NET!" });
```

### Frontend (React)
```javascript
import { useEffect, useState } from 'react'

function MyComponent() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(data => setData(data))
  }, [])

  return <div>{data?.message}</div>
}
```

## 🧪 Testing the Setup

### Test Backend API
1. Backend running: `https://localhost:7000`
2. Open browser: `https://localhost:7000/openapi/v1.json`
3. Or use REST client file: `API.http` in root

### Test Frontend
1. Frontend running: `http://localhost:5173`
2. Open browser dev console
3. Run: `fetch('/api/weatherforecast').then(r => r.json()).then(console.log)`
4. You should see weather data from the backend

## 📦 Useful NPM Scripts

### From Root Directory
```bash
npm run dev                 # Run both backend and frontend
npm run dev:backend        # Run only backend
npm run dev:frontend       # Run only frontend
npm run build              # Build both for production
npm run build:backend      # Build backend only
npm run build:frontend     # Build frontend only
```

### Frontend Only (cd frontend)
```bash
npm run dev                # Start dev server
npm run build              # Build for production
npm run preview            # Preview production build
npm run lint               # Run linter
```

### Backend Only (cd backend/OneMart.API)
```bash
dotnet run                 # Run dev server
dotnet build               # Build project
dotnet watch run           # Run with auto-reload
dotnet test                # Run tests
dotnet publish -c Release  # Publish for production
```

## 🐳 Docker

Ready for containerization:
```bash
docker-compose build
docker-compose up
```

## 🔐 Debugging

### Backend Debugging
1. Press `Ctrl+Shift+D` in VS Code
2. Select ".NET Core Launch (OneMart API)"
3. Press `F5` to start debugging

### Frontend Debugging
1. Chrome DevTools (`F12`)
2. Source maps enabled automatically
3. Set breakpoints in `src/` files

### Debug Both
1. Select "Frontend + Backend" compound configuration
2. Press `F5` to debug both projects simultaneously

## ⚙️ Production Deployment

### Update CORS for Production
Edit `backend/OneMart.API/Program.cs`:
```csharp
options.AddPolicy("ProductionPolicy", policy =>
{
    policy.WithOrigins("https://yourdomain.com")
          .AllowAnyMethod()
          .AllowAnyHeader()
          .AllowCredentials();
});
```

### Build for Production
```bash
npm run build              # Builds both backend and frontend
```

### Docker Deployment
```bash
docker-compose build       # Build images
docker push your-registry  # Push to registry
# Deploy using your hosting platform (AWS, Azure, Heroku, etc.)
```

## 📚 Next Steps

1. **Backend Development**
   - Add your first API endpoint
   - Create Entity Framework Core models (if using database)
   - Add authentication/authorization

2. **Frontend Development**
   - Update the WeatherForecast component
   - Create new React components
   - Set up routing with React Router

3. **Database** (Optional)
   - Add Entity Framework Core
   - Create migrations
   - Connect to SQL Server/PostgreSQL/SQLite

4. **Testing**
   - Add unit tests for backend (.NET)
   - Add component tests for frontend (Vitest/Jest)

5. **Deployment**
   - Set up CI/CD pipeline (GitHub Actions ready)
   - Deploy backend to Azure/AWS
   - Deploy frontend to Vercel/Netlify/Azure

## ❓ Troubleshooting

### CORS Errors
- ✅ Check backend is running on port 7000
- ✅ Check frontend CORS policy includes your domain
- ✅ Hard refresh browser (Ctrl+Shift+R)

### Port Already in Use
- Backend: Edit `backend/OneMart.API/Properties/launchSettings.json`
- Frontend: Edit `frontend/vite.config.ts`

### Dependencies Not Installed
```bash
cd frontend
npm install
```

### Backend Build Issues
```bash
cd backend/OneMart.API
dotnet clean
dotnet restore
dotnet build
```

## 📞 Support Resources

- [.NET Documentation](https://docs.microsoft.com/en-us/dotnet/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/en-us/aspnet/core/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## ✨ You're All Set!

Your OneMart project is ready for development. Start by running the backend and frontend, then build your features!

Happy coding! 🚀
