# OneMart - .NET + React Web Application

A full-stack web application with ASP.NET Core backend API and React frontend.

## Project Structure

```
OneMart/
├── backend/          # .NET 10 ASP.NET Core Web API
│   └── OneMart.API/  # Main API project
├── frontend/         # React + Vite frontend
└── README.md
```

## Prerequisites

- .NET 10 SDK or later
- Node.js 18+ and npm
- Visual Studio Code (recommended) or your favorite editor

## Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend/OneMart.API
   ```

2. Build the project:
   ```bash
   dotnet build
   ```

3. Run the API server:
   ```bash
   dotnet run
   ```

   The API will be available at `https://localhost:7000` by default.

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173` by default.

## Running Both Projects

You can run both projects concurrently in separate terminals:

**Terminal 1 - Backend:**
```bash
cd backend/OneMart.API
dotnet run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## API Integration

The frontend is configured with a proxy to the backend API in development mode. When making API calls from React, use the relative path:

```javascript
// Example API call
const response = await fetch('/api/endpoint');
```

### CORS Configuration

CORS is configured in the backend to allow requests from `http://localhost:5173` during development.

## Available Scripts

### Backend
- `dotnet build` - Build the project
- `dotnet run` - Run the development server
- `dotnet test` - Run tests
- `dotnet publish` - Build for production

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter

## Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

```bash
cp .env.example .env.local
```

## Technology Stack

### Backend
- .NET 10
- ASP.NET Core Web API
- Entity Framework Core (optional)

### Frontend
- React 18+
- Vite (build tool)
- Oxlint (linter)
- React Router v7 (optional)

## Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload during development
2. **API Testing**: Use tools like Postman, Insomnia, or VS Code REST Client to test API endpoints
3. **Debugging**: 
   - Backend: Debug in Visual Studio or VS Code with C# extension
   - Frontend: Use browser DevTools

## Troubleshooting

### CORS Errors
If you see CORS errors, ensure:
1. Backend is running on the correct port (7000)
2. Frontend is running on 5173
3. Backend CORS policy includes the frontend URL

### Port Already in Use
If ports are already in use, you can change them in:
- Backend: `launchSettings.json` in the backend project
- Frontend: `vite.config.ts` in the frontend project

## Next Steps

1. Configure database connection in backend (if needed)
2. Set up authentication/authorization
3. Create API endpoints
4. Build React components
5. Add comprehensive tests

## License

[Specify your license here]

## Contributing

[Add contribution guidelines here]
