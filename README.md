# WordPress Development — Course Practice
 
Practice repository for the **[Complete WordPress Developer Course — Plugins & Themes](https://www.udemy.com/course/wordpress-development-create-wordpress-themes-and-plugins/)** by Luis Ramirez Jr. (326 lectures · 29h)
 
---
 
## 📁 Structure
 
```
wp-content/
├── themes/
│   └── udemy/          # Custom FSE theme built from scratch
└── plugins/
    ├── alert-box/      # Simple custom Gutenberg block
    └── udemy-plus/     # Main plugin — full block development showcase
```
 
---
 
## 🎨 Theme — `udemy`
 
Custom **Full Site Editing (FSE)** theme covering:
- `theme.json` — colors, typography, layout, spacing
- Block templates — index, single, page, 404, archive, search
- Template parts — header, footer
- `functions.php` — enqueue, editor styles, theme support
- Core blocks — Query Loop, Navigation, Columns, Sidebar
 
---
 
## 🔌 Plugins
 
### `alert-box`
A simple starter block — RichText field, color picker, InspectorControls.
 
### `udemy-plus`
Main plugin demonstrating the full WordPress development stack:
 
**Gutenberg blocks** — static and dynamic blocks, RichText, color pickers, toggles, selects, image upload, nested blocks, block context, server-side rendering
 
**REST API** — custom endpoints, permission callbacks, request validation, user authentication, `apiFetch` in JavaScript
 
**WordPress internals** — WP_Query, `tax_query`, `meta_query`, `wp_reset_postdata()`, Custom Post Types, taxonomies, Options API, Settings API, `$wpdb`, transients
 
**React & JS** — `useState`, `useEffect`, `useSelect`, `useEntityProp`, async/await, DOM handling
 
**Build tools** — `@wordpress/scripts`, Webpack, npm
 
---
 
## 👨‍💻 Author
 
**Mikalai Liashchou** — WordPress Developer
[LinkedIn](https://www.linkedin.com/in/nikolayleshchev/) · [GitHub](https://github.com/NikolayLeshchev)
