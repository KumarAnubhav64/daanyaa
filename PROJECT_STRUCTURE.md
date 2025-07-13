# Publisher.AI Project Structure

## 📁 Folder Organization

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Navbar, Footer)
│   ├── sections/        # Page-specific sections (Hero, Features)
│   └── ui/              # Basic UI components (Button, Card)
├── pages/               # Route-based page components
├── layouts/             # Layout wrapper components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions and router config
├── constants/           # App constants and configuration
└── assets/              # Static assets (images, icons)
```

## 🧩 Component Guidelines

### Creating New Pages
1. Create a new file in `src/pages/`
2. Add route to `src/utils/router.jsx`
3. Update navigation in `src/constants/index.js`

### Component Structure
- **common/**: Components used across multiple pages (Navbar, Footer)
- **sections/**: Large page sections (Hero, Features, etc.)
- **ui/**: Small reusable components (Button, Card, Input)

### Adding New Routes
```jsx
// In src/utils/router.jsx
{
  path: 'new-page',
  element: <NewPage />,
}

// In src/constants/index.js
{ label: "New Page", href: "/new-page" }
```

## 🛠️ Best Practices

1. **File Naming**: Use PascalCase for components, camelCase for utilities
2. **Imports**: Use absolute imports from src root
3. **Constants**: Store reusable data in constants/index.js
4. **Styling**: Use Tailwind CSS with brand colors from constants
5. **Navigation**: Use React Router Link components for internal navigation

## 🎨 Brand Standards

- Primary Color: `#715482`
- Background: `#F4EFEB`
- All colors defined in `src/constants/index.js`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Consistent spacing using Tailwind utilities
