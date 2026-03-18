# Click Interior Solutions - Quick Reference Guide

## 🚀 Quick Start

```bash
# Install and run
npm install
npm run dev
# Visit http://localhost:3000
```

## 📍 Key File Locations

| Purpose | File |
|---------|------|
| Premium Theme | `components/theme.js` |
| Navigation | `components/Navbar.jsx` |
| Homepage | `pages/index.js` |
| Services | `pages/services.js` |
| Portfolio | `pages/portfolio.js` |
| About | `pages/about.js` |
| Contact | `pages/contact.js` |
| API Integration | `lib/api.js` |
| App Config | `pages/_app.js` |
| Redux Store | `reducer/store.js` |

## 🎨 Colors Quick Reference

```javascript
// In any component, use like this:
<Box bg="brand.500">Gold</Box>        // #C8A951
<Box bg="black">Black</Box>           // #000000
<Box bg="brand.50">Beige</Box>       // #F3EDE8
<Box bg="white">White</Box>           // #FFFFFF
```

## 📝 Common Components

### Hero Section
```jsx
<Box bg="black" color="white" py={16} textAlign="center">
  <Container maxW="4xl">
    <Heading fontSize="44px">Heading</Heading>
    <Text color="gray.300">Subtitle</Text>
  </Container>
</Box>
```

### Service Card
```jsx
<Box p={8} border="1px solid" borderColor="brand.100">
  <Heading size="md">Service Title</Heading>
  <Text>Description</Text>
  <Button variant="solid">CTA</Button>
</Box>
```

### Project Card
```jsx
<Box borderRadius="lg" overflow="hidden" shadow="md">
  <Box h="300px" bg="brand.100" />
  <VStack p={6}>
    <Heading>{project.title}</Heading>
    <Text>{project.description}</Text>
  </VStack>
</Box>
```

## 🔗 API Usage

### Fetch Projects
```javascript
import { getAllProjects } from '../lib/api';

export async function getStaticProps() {
  const data = await getAllProjects();
  return { props: { projects: data.data || [] } };
}
```

### Filter by Category
```javascript
import { getProjectsByCategory } from '../lib/api';

const residential = await getProjectsByCategory("Residential Interiors");
```

### Submit Contact Form
```javascript
import { submitContactForm } from '../lib/api';

await submitContactForm({
  name: "John",
  email: "john@example.com",
  city: "Bengaluru",
  message: "Message"
});
```

## 📱 Responsive Breakpoints

```jsx
// Use display props
display={{ base: "none", md: "block" }}  // Hidden on mobile, shown on desktop

// Grid columns
templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}

// Font sizes
fontSize={{ base: "24px", md: "36px" }}

// Padding
p={{ base: 4, md: 8 }}  // 4 on mobile, 8 on desktop
```

## 🎯 Chakra UI Shortcuts

```jsx
// Margin
m={4}           // margin: 1rem
mx={4}          // margin-left & right
my={4}          // margin-top & bottom
mt={4}          // margin-top

// Padding
p={4}           // padding: 1rem
px={4}          // padding-left & right
py={4}          // padding-top & bottom

// Display
display="flex"
flexDir="column"
alignItems="center"
justifyContent="space-between"

// Colors
color="black"
bg="brand.500"
borderColor="gray.200"
```

## 🔄 Page Template

```jsx
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function PageName() {
  return (
    <Box>
      {/* Hero */}
      <Box bg="black" color="white" py={20}>
        <Container maxW="4xl">
          <Heading>Page Title</Heading>
          <Text>Subtitle</Text>
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={20}>
        <Container maxW="6xl">
          {/* Content here */}
        </Container>
      </Box>

      {/* CTA */}
      <Box bg="black" color="white" py={20}>
        <Container maxW="4xl" textAlign="center">
          <Heading>Call to Action</Heading>
        </Container>
      </Box>
    </Box>
  );
}
```

## 🛠️ Common Tasks

### Change Primary Color

Edit `components/theme.js`:
```javascript
brand: {
  500: "#YOUR_COLOR",  // Change this
}
```

### Update Contact Info

Edit `pages/contact.js`:
- Search for phone number
- Search for email address
- Update in HStack components

### Add New Page

1. Create `pages/new-page.js`
2. Use page template above
3. Add link to Navbar in `components/Navbar.jsx`

### Add Project to Portfolio

1. Go to Strapi admin
2. Create new Project entry
3. Fill title, description, category, images
4. Save
5. Portfolio page auto-updates!

## 📊 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api
NEXT_PUBLIC_APP_NAME=Click Interior Solutions
NEXT_PUBLIC_CONTACT_EMAIL=info@clickinterior.com
NEXT_PUBLIC_CONTACT_PHONE=+91 8800 000 000
```

## 🐛 Debugging

### View Network Requests
```bash
# In browser console
fetch('http://localhost:1337/api/projects')
  .then(r => r.json())
  .then(d => console.log(d))
```

### Check Current Props
```jsx
{JSON.stringify(props, null, 2)}
```

### Redux State (if needed)
```javascript
import { useSelector } from 'react-redux';

const projects = useSelector(state => state.ProjectManager);
console.log(projects);
```

## 📦 Build & Deploy

```bash
# Build
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
vercel

# Build Docker image
docker build -t click-interior .
```

## ✅ Checklist Before Launch

- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify links work
- [ ] Test contact form
- [ ] Set up Strapi CMS
- [ ] Add sample projects
- [ ] Update contact information
- [ ] Add Google Analytics
- [ ] Set up email notifications
- [ ] Configure custom domain
- [ ] Enable HTTPS

## 🚨 Common Issues & Fixes

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Page not found (404)
- Check filename matches route (e.g., `services.js` → `/services`)
- Check file is in `pages/` folder

### Styling not applying
- Check import: `import { Box } from "@chakra-ui/react"`
- Verify ChakraProvider in `_app.js`

### Strapi API not responding
- Check NEXT_PUBLIC_STRAPI_URL is correct
- Verify Strapi server is running
- Check CORS settings

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Chakra UI Docs](https://chakra-ui.com/docs)
- [Strapi Docs](https://docs.strapi.io)
- [Vercel Docs](https://vercel.com/docs)

## 🎯 Performance Tips

1. Use `getStaticProps` for static pages
2. Use `getStaticProps` with ISR for semi-dynamic content
3. Optimize images with `next/image`
4. Lazy load heavy components
5. Monitor Core Web Vitals on Vercel dashboard

## 💡 Best Practices

✅ Use semantic HTML  
✅ Keep components small and focused  
✅ Use Chakra UI components (don't use plain HTML)  
✅ Test on mobile  
✅ Write meaningful variable names  
✅ Use TypeScript for large apps  
✅ Add error boundaries  
✅ Handle loading states  

---

**Last Updated**: February 12, 2026  
**Quick Reference v1.0**
