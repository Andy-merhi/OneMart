# Troubleshooting Guide

## Common Issues & Solutions

### Issue: "CORS policy: No 'Access-Control-Allow-Origin' header"

**Symptoms:**
- API calls from frontend fail with CORS error
- Error appears in browser console

**Solutions:**
1. **Verify backend is running:**
   ```bash
   cd backend/OneMart.API
   dotnet run
   ```
   Should show: `Now listening on: https://localhost:7000`

2. **Check CORS policy in Program.cs:**
   - Ensure frontend URL is in the policy
   - Development should have: `"http://localhost:5173"`
   - Production should have your domain

3. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R`
   - Or open DevTools → Application → Clear cache

4. **Check if frontend is on correct port:**
   - Should be `http://localhost:5173`
   - If different, update CORS policy in backend

---

### Issue: "Port 7000 already in use" or "Port 5173 already in use"

**Solutions:**

**For Backend (Port 7000):**
1. Edit `backend/OneMart.API/Properties/launchSettings.json`
2. Find the port number and change it
3. Also update frontend vite.config.ts proxy target

**For Frontend (Port 5173):**
1. Edit `frontend/vite.config.ts`
2. Change `server.port: 5173` to `server.port: 5174` (or any available port)
3. Update backend CORS policy if needed

**Alternative - Kill existing process:**
```bash
# Windows PowerShell
Get-Process -Name dotnet | Stop-Process -Force
# Check node processes
Get-Process -Name node | Stop-Process -Force
```

---

### Issue: "Certificate verification failed" or "SSL/TLS errors"

**Symptoms:**
- Backend won't start
- Frontend API calls fail
- Certificate error in console

**Solutions:**
1. **For development (self-signed certificates):**
   - In `frontend/vite.config.ts`, `secure: false` should handle it
   - This is normal in development

2. **Trust the development certificate:**
   ```bash
   dotnet dev-certs https --trust
   ```

3. **Clear certificate cache:**
   ```bash
   dotnet dev-certs https --clean
   dotnet dev-certs https --trust
   ```

---

### Issue: "Cannot find module" or "Dependencies not installed"

**Symptoms:**
- Frontend shows import errors
- Cannot find React modules

**Solution:**
```bash
cd frontend
npm install
```

For complete reinstall:
```bash
cd frontend
rm -r node_modules
rm package-lock.json
npm install
```

---

### Issue: Backend responds with 404 Not Found

**Symptoms:**
- API endpoint returns 404
- Path correct but still not found

**Solutions:**
1. **Verify endpoint exists:**
   - Check `Program.cs` for the endpoint definition
   - Default endpoint: `/weatherforecast`

2. **Check CORS preflight:**
   - Some requests need preflight (CORS OPTIONS request)
   - Ensure backend handles OPTIONS requests

3. **Verify route path:**
   ```csharp
   // Make sure route matches
   app.MapGet("/weatherforecast", () => /* ... */);
   ```

---

### Issue: Changes not reflected when running

**Symptoms:**
- Code changes don't appear
- Using old compiled version

**Solutions:**

**Backend:**
```bash
cd backend/OneMart.API
dotnet clean
dotnet build
dotnet run
```

**Frontend:**
- Vite has hot reload by default
- If not working, restart dev server:
```bash
cd frontend
npm run dev
```

---

### Issue: "TypeScript compilation error" in frontend

**Symptoms:**
- Red squiggles in VSCode
- TypeScript errors in console

**Note:** Frontend uses TypeScript + React Compiler (even though you wanted JavaScript initially). This is fine and provides better development experience.

**Solutions:**
1. **Ensure TypeScript is installed:**
   ```bash
   cd frontend
   npm install
   ```

2. **Check tsconfig.json:**
   - Make sure it includes your src files
   - Should be configured correctly by Vite

3. **Use `.jsx` extension:**
   - Use `.jsx` for React files in TypeScript project
   - Not `.js` for React components

---

### Issue: API calls return 500 Internal Server Error

**Symptoms:**
- Endpoint exists but returns error
- Backend might have crash

**Solutions:**
1. **Check backend console output:**
   - Look for error messages
   - Shows what went wrong

2. **Enable detailed error logging:**
   ```csharp
   // In Program.cs
   app.Use(async (context, next) => {
       try {
           await next();
       } catch (Exception ex) {
           Console.WriteLine($"Error: {ex}");
           throw;
       }
   });
   ```

3. **Check OpenAPI docs:**
   - Visit `https://localhost:7000/openapi/v1.json`
   - Verify endpoint is documented

---

### Issue: npm run dev doesn't work from root

**Symptoms:**
- "concurrently not found" error
- Script fails to run

**Solution:**
```bash
npm install
npm run dev
```

Or install concurrently:
```bash
npm install --save-dev concurrently
npm run dev
```

---

### Issue: Frontend can't reach backend API

**Symptoms:**
- Fetch requests hang or timeout
- Network tab shows "pending" forever

**Solutions:**
1. **Verify backend is running:**
   ```bash
   curl https://localhost:7000/weatherforecast -k
   ```
   - Should return JSON (with `-k` flag to skip certificate check)

2. **Check proxy configuration:**
   - Edit `frontend/vite.config.ts`
   - Verify `target: 'https://localhost:7000'`

3. **Check firewall:**
   - Port 7000 might be blocked
   - Check Windows Firewall settings

4. **Use correct API base:**
   - Frontend calls should start with `/api/`
   - Not full URL: `/api/weatherforecast` (NOT `https://localhost:7000/api/weatherforecast`)

---

### Issue: Too many redirects or "ERR_TOO_MANY_REDIRECTS"

**Symptoms:**
- Browser shows redirect loop
- Page won't load

**Solutions:**
1. **Check vite.config.ts proxy settings:**
   - Make sure `pathRewrite` is correct
   - Don't rewrite `/api` if backend doesn't expect it

2. **Check backend redirect settings:**
   - HTTPS redirect might cause issues
   - Disable in development if needed

---

### Issue: Database connection errors

**Symptoms:**
- "Cannot connect to database"
- After adding Entity Framework Core

**Solutions:**
1. **Check connection string:**
   - In `appsettings.json`
   - Verify database server is running

2. **Run migrations:**
   ```bash
   cd backend/OneMart.API
   dotnet ef database update
   ```

3. **Check database exists:**
   - Create database before running migrations
   - Or use code-first approach

---

## Getting Help

### Quick Checklist
- ✅ Backend running on https://localhost:7000?
- ✅ Frontend running on http://localhost:5173?
- ✅ CORS policy includes frontend URL?
- ✅ API proxy configured correctly?
- ✅ Dependencies installed (`npm install`)?
- ✅ Browser cache cleared?
- ✅ Firewall allows connections?
- ✅ Certificates trusted?

### Debug Steps
1. Open browser DevTools (F12)
2. Go to Network tab
3. Try API call
4. Check:
   - Response status
   - Response headers
   - Response body
   - Request headers

### Additional Resources
- [ASP.NET Core CORS Documentation](https://docs.microsoft.com/en-us/aspnet/core/security/cors)
- [Vite Proxy Configuration](https://vite.dev/config/server-options.html#server-proxy)
- [React Debugging Guide](https://react.dev/learn/react-developer-tools)
- [.NET Troubleshooting](https://learn.microsoft.com/en-us/dotnet/core/troubleshoot/)

---

## Still Having Issues?

1. **Check the logs carefully** - First line often has the actual error
2. **Restart everything** - Kill processes and start fresh
3. **Clean and rebuild** - `dotnet clean` then `dotnet build`
4. **Delete node_modules** - Sometimes node modules get corrupted
5. **Check your configuration files** - Compare with examples in this guide

Remember: Most issues are port conflicts, CORS configuration, or missing dependencies!
