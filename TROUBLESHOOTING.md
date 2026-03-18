# Click Interior Solutions - Troubleshooting Guide

## 🔧 Common Issues & Solutions

### Build & Installation Issues

#### Issue: `npm install` fails

**Symptoms**: Installation hangs or shows errors

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock files
rm -rf node_modules package-lock.json

# Reinstall
npm install

# If still failing, try using yarn
npm install -g yarn
yarn install
```

---

#### Issue: `Module not found` error

**Symptoms**: Error like "Cannot find module '@/components/...'"

**Solutions**:
1. Check file exists at the path
2. Verify spelling (case-sensitive)
3. Check imports in `jsconfig.json` or `tsconfig.json`
4. Restart dev server: `npm run dev`

Example error:
```
Error: Cannot find module '@/lib/api'
```

Solution:
```bash
# Check file exists
ls lib/api.js

# If missing, create it from documentation
```

---

### Runtime Issues

#### Issue: "Navbar links don't work"

**Symptoms**: Clicking navbar links doesn't navigate

**Solutions**:
1. Check href values are correct
   ```jsx
   href="/services"  // Correct
   href="services"   // Wrong - missing /
   ```

2. Restart dev server
   ```bash
   npm run dev
   ```

3. Check Next.js routing (file must be in `pages/` folder)

---

#### Issue: "Strapi data not showing on portfolio page"

**Symptoms**: Portfolio page shows "coming soon" instead of projects

**Solutions**:

1. **Check `.env.local`**:
   ```
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
   ```

2. **Verify Strapi is running**:
   ```bash
   # In another terminal
   cd click-interior-cms
   npm run develop
   ```

3. **Test API manually**:
   ```bash
   # In terminal or Postman
   curl http://localhost:1337/api/projects?populate=*
   ```

4. **Check Strapi permissions**:
   - Go to Strapi Admin → Settings → Users & Permissions
   - Click "Public" role
   - Make sure "project" has "find" and "findOne" permissions enabled

5. **Check browser console for errors**:
   - Open DevTools (F12)
   - Check Console tab for error messages
   - Check Network tab to see API requests

---

#### Issue: Contact form doesn't submit

**Symptoms**: Click submit, nothing happens or error appears

**Solutions**:

1. **Check console for errors** (F12 → Console)

2. **For development** (before Strapi backend):
   ```javascript
   // In pages/contact.js, the form data logs to console
   // Check console: F12 → Console tab
   ```

3. **Enable Strapi submission**:
   ```javascript
   // In pages/contact.js, uncomment this line:
   // await submitContactForm(formData);
   
   // Only do this after setting up contact-submission 
   // collection in Strapi
   ```

4. **Verify form fields**:
   ```javascript
   // Make sure all fields are required and have values
   name: "", email: "", city: "", message: ""
   ```

---

### Styling Issues

#### Issue: "Colors look different than expected"

**Symptoms**: Gold appears as wrong color, theme not applied

**Solutions**:

1. **Clear Next.js cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Check theme.js is updated**:
   ```javascript
   // In components/theme.js
   colors: {
     brand: {
       500: "#C8A951",  // Should be gold
     }
   }
   ```

3. **Verify Chakra Provider in _app.js**:
   ```jsx
   // pages/_app.js should have:
   <ChakraProvider theme={theme}>
   ```

4. **Restart dev server**:
   ```bash
   npm run dev
   ```

---

#### Issue: "Responsive design broken on mobile"

**Symptoms**: Layout looks wrong on phone, elements misaligned

**Solutions**:

1. **Check viewport meta tag** (should be in _app.js):
   ```jsx
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```

2. **Test in browser DevTools**:
   - Press F12
   - Click device icon (toggle device toolbar)
   - Test at different screen sizes

3. **Check responsive props in components**:
   ```jsx
   // Good - responsive
   display={{ base: "block", md: "flex" }}
   fontSize={{ base: "16px", md: "24px" }}
   
   // Bad - not responsive
   display="flex"
   fontSize="24px"
   ```

4. **Common breakpoints**:
   - base: 0px (mobile)
   - sm: 480px
   - md: 768px (tablet)
   - lg: 992px
   - xl: 1200px
   - 2xl: 1400px

---

### Performance Issues

#### Issue: "Site loads slowly"

**Symptoms**: Pages take long time to load

**Solutions**:

1. **Check network requests**:
   - F12 → Network tab
   - Reload page
   - Identify slow requests

2. **Optimize images**:
   ```bash
   # Compress images before uploading to Strapi
   # Use online tools like TinyPNG
   ```

3. **Enable caching** (in `next.config.js`):
   ```javascript
   // Add to next.config.js
   headers: async () => [
     {
       source: '/:path*',
       headers: [
         {
           key: 'Cache-Control',
           value: 'public, max-age=3600'
         }
       ]
     }
   ]
   ```

4. **Reduce Strapi query**:
   ```javascript
   // Only fetch needed fields
   getAllProjects({ pagination: { limit: 6 } })
   ```

---

### Deployment Issues

#### Issue: "Build fails on Vercel"

**Symptoms**: Deployment shows build error, site won't deploy

**Solutions**:

1. **Check build logs on Vercel dashboard**
   - Go to Vercel Project
   - Click "Deployments"
   - Find failed deployment
   - Check "Build logs" for error message

2. **Common build errors**:
   ```
   Error: Module not found
   → Check import paths
   
   Error: Cannot find module 'next'
   → Run npm install locally first
   
   Error: Syntax error
   → Check for typos, missing semicolons
   ```

3. **Test build locally**:
   ```bash
   npm run build
   npm start
   ```

4. **Check environment variables on Vercel**:
   - Go to Vercel Project Settings
   - Environment Variables
   - Add NEXT_PUBLIC_STRAPI_URL pointing to live Strapi

---

#### Issue: "Site works locally but not on Vercel"

**Symptoms**: `localhost:3000` works, but `vercel-site.com` doesn't

**Solutions**:

1. **Check environment variables**:
   ```bash
   # Add to Vercel project settings
   NEXT_PUBLIC_STRAPI_URL=https://your-strapi-domain.com/api
   ```

2. **CORS issues**:
   - Go to Strapi settings
   - Configure CORS for production domain
   ```javascript
   // In Strapi config/middlewares.js
   {
     name: 'strapi::cors',
     config: {
       origin: ['https://yourdomain.com'],
     },
   }
   ```

3. **Check API calls**:
   - Open browser DevTools
   - Network tab
   - Look for failed API requests
   - Fix URLs if needed

---

### Database/Strapi Issues

#### Issue: "Strapi won't start"

**Symptoms**: `npm run develop` shows error

**Solutions**:

1. **Install dependencies**:
   ```bash
   cd click-interior-cms
   npm install
   ```

2. **Clear Strapi cache**:
   ```bash
   rm -rf .strapi
   npm run develop
   ```

3. **Check database connection**:
   ```bash
   # Strapi defaults to SQLite in development
   # Check if database file exists
   ls data/
   ```

4. **Reset development database**:
   ```bash
   rm -rf data/
   npm run develop
   # Will recreate database
   ```

---

#### Issue: "Strapi admin panel won't load"

**Symptoms**: `localhost:1337` shows blank or error

**Solutions**:

1. **Wait for Strapi to fully start**:
   - Check terminal for "Strapi is running"
   - May take 30+ seconds first time

2. **Clear browser cache**:
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)
   - Hard refresh: Ctrl+F5 or Cmd+Shift+R

3. **Check console errors** (F12):
   - Look for network errors
   - Check CORS errors

---

### Data/Content Issues

#### Issue: "Projects not showing in portfolio despite being in Strapi"

**Symptoms**: Added projects in Strapi but portfolio page empty

**Solutions**:

1. **Verify project was published in Strapi**:
   - Go to Strapi Admin → Content Manager → Project
   - Check if entry shows (not in Draft)

2. **Check Strapi permissions**:
   - Settings → Users & Permissions → Public
   - Ensure "project" → "find" is checked

3. **Manually test API**:
   ```javascript
   // In browser console, run:
   fetch('http://localhost:1337/api/projects?populate=*')
     .then(r => r.json())
     .then(d => console.log(d))
   ```

4. **Rebuild frontend**:
   ```bash
   npm run dev
   # Clear cache if needed
   rm -rf .next
   ```

---

#### Issue: "Getting 404 errors from Strapi API"

**Symptoms**: API requests return 404 Not Found

**Solutions**:

1. **Check URL format**:
   ```
   Correct: http://localhost:1337/api/projects
   Wrong:   http://localhost:1337/projects
   ```

2. **Verify collection exists**:
   - Go to Strapi Content Manager
   - Should see "project" collection

3. **Check route is published**:
   - Some Strapi versions require publishing routes
   - Go to Settings → Content-Type Builder
   - Verify route configuration

4. **Check for typos**:
   ```javascript
   // Make sure collection name matches
   getAllProjects()  // Correct
   getAllProduct()   // Wrong
   ```

---

### Form Issues

#### Issue: "Form validation not working"

**Symptoms**: Can submit empty form, no error messages

**Solutions**:

1. **Check for required attributes**:
   ```jsx
   <Input required type="email" />
   ```

2. **Check form state handling**:
   ```javascript
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     city: "",
     message: "",
   });
   ```

3. **Add client-side validation**:
   ```javascript
   if (!formData.email.includes('@')) {
     alert("Invalid email");
     return;
   }
   ```

---

## 🆘 Debug Checklist

When something isn't working:

1. **Check the browser console** (F12 → Console)
   - Look for red error messages
   - Check network errors

2. **Check terminal output**:
   - Look for errors in `npm run dev` terminal
   - Look for Strapi errors in separate terminal

3. **Hard refresh**:
   - Ctrl+Shift+R (Windows)
   - Cmd+Shift+R (Mac)

4. **Clear caches**:
   ```bash
   rm -rf .next
   npm cache clean --force
   ```

5. **Restart servers**:
   ```bash
   # Stop and restart both
   npm run dev
   # In separate terminal:
   cd click-interior-cms && npm run develop
   ```

6. **Check file exists**:
   ```bash
   # Verify file location
   ls pages/services.js  # Should exist
   ```

7. **Check recent changes**:
   - Review what was edited
   - Check for syntax errors
   - Look for missing imports

---

## 📚 Helpful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Chakra UI Docs](https://chakra-ui.com/docs)
- [Strapi Docs](https://docs.strapi.io)

### Tools
- [DevTools](https://developer.chrome.com/docs/devtools/)
- [Postman](https://www.postman.com/) - Test APIs
- [Vercel Dashboard](https://vercel.com/dashboard)

### Community Help
- [Stack Overflow](https://stackoverflow.com/questions/tagged/nextjs)
- [Chakra UI Discord](https://discord.gg/chakra-ui)
- [Strapi Forum](https://forum.strapi.io)

---

## 🚨 Emergency Contacts

If everything breaks:

1. **Revert to last working version**:
   ```bash
   git log
   git checkout <last-working-commit>
   ```

2. **Fresh install**:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

3. **Check git status**:
   ```bash
   git status
   # See what files changed
   ```

---

**Troubleshooting Guide v1.0**  
**Last Updated**: February 12, 2026

Remember: Most issues have simple solutions. Always check the console first!
