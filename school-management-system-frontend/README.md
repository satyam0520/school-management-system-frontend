# School Management System Frontend

A scalable, production-ready React homepage for a modern School Management System. Designed with inspiration from premier Indian educational institutions.

This project serves as a comprehensive visual roadmap for the entire school application, providing an enterprise-level foundation that is fully ready to be integrated with a backend API (like Spring Boot).

## 🚀 Key Features

- **Comprehensive UI/UX Roadmap**: 10 purpose-built homepage sections (Hero, Academics, Infrastructure, etc.) mapping out the full user journey.
- **22 Defined Routes**: Complete routing structure using React Router v6, including stubs for `/admissions`, `/erp-login`, `/academics/primary`, and more.
- **API-Ready Architecture**: Centralized Axios service layer (`src/services/api.js`) with pre-configured endpoints (`/api/news`, `/api/achievements`, etc.) and graceful fallbacks.
- **Modern Styling System**: Encapsulated CSS Modules with a global design token system (CSS Variables) featuring a premium Blue & Green academic palette.
- **Componentized Structure**: Highly reusable UI components with responsive, mobile-first layouts.
- **Fast & Optimized**: Built on Vite with React 18, utilizing `React.lazy()` and `Suspense` for efficient code-splitting and rapid load times.

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Routing**: React Router DOM v6
- **Styling**: Vanilla CSS Modules (Variables & Utility Classes)
- **API Client**: Axios
- **Icons**: React Icons (Feather)
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📂 Folder Structure Overview

```
src/
├── components/          # Reusable, encapsulated UI blocks
│   ├── Navbar/          # Sticky navigation with dropdowns
│   ├── Footer/          # Multi-column footer
│   ├── HeroSection/     # Image carousel and main CTAs
│   ├── NewsSection/     # API-driven news cards
│   └── ... (6 other homepage sections)
├── pages/               # Route components
│   ├── HomePage.jsx     # Assembles all homepage sections
│   ├── StubPage.jsx     # Shared layout for placeholder pages
│   └── ... (21 page stubs)
├── services/
│   └── api.js           # Centralized Axios API configuration
├── App.jsx              # Main routing hub (React Router)
├── main.jsx             # React DOM entry point
└── index.css            # Global CSS reset and design tokens
```

## 💻 Getting Started

### Prerequisites

- Node.js (v16.14 or newer)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd school-management-system-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Open `http://localhost:5173` (or the port Vite provides) in your browser.

## 🔌 API Integration Guide

The frontend is currently configured to connect to a backend running on `http://localhost:8080` (e.g., a Spring Boot application). 

To change the core backend API URL, you can either:
1. Create a `.env` file in the root directory and set:
   ```
   VITE_API_BASE_URL=https://api.yourschool.com
   ```
2. Or modify the fallback string directly in `src/services/api.js`.

The frontend is designed to **fail gracefully**. If the backend is not running, API-driven sections (like News, Results, and Testimonials) will automatically render hardcoded fallback mock data so the UI does not break.

## 🎨 Design & Accessibility

- Fully responsive from mobile to ultra-wide desktop displays (CSS Grid/Flexbox).
- Adheres to semantic HTML5 standards.
- Uses `aria-label` and `aria-hidden` attributes for improved screen-reader accessibility. 
- Custom variables allow global theme changes (colors, fonts, radius) in seconds via `src/index.css`.
