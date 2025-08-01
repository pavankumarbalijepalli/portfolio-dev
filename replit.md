# Portfolio Website with Express Backend

## Overview

This is a modern full-stack portfolio application built with React, TypeScript, Express.js, and PostgreSQL. The frontend is a responsive portfolio website showcasing professional experience, skills, and education. The backend provides a REST API foundation with database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Storage**: PostgreSQL-based sessions (connect-pg-simple)
- **Development**: Hot reloading with tsx

### Key Design Decisions

**Frontend Framework Choice**: React with TypeScript was chosen for type safety and component reusability. Wouter provides lightweight routing without the complexity of React Router.

**Styling Strategy**: Tailwind CSS combined with shadcn/ui provides rapid development with consistent design patterns. The component library offers accessible, customizable UI components.

**State Management**: TanStack Query handles server state management, caching, and synchronization, eliminating the need for complex state management libraries like Redux.

**Build Tooling**: Vite was selected for its fast development server and optimized production builds, replacing slower alternatives like Create React App.

## Key Components

### Frontend Components
- **Portfolio Sections**: Hero, Experience, Skills, Education, Contact
- **UI Components**: Complete shadcn/ui component library (buttons, cards, forms, etc.)
- **Navigation**: Floating navigation with smooth scrolling
- **Animations**: Framer Motion for interactive animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Components
- **Express Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL schema definitions
- **Storage Interface**: Abstracted storage layer with in-memory and database implementations
- **Development Tools**: Vite integration for SSR and development workflow

### Database Schema
- **Users Table**: Basic user management with UUID primary keys
- **Schema Validation**: Zod integration for runtime type checking
- **Migrations**: Drizzle Kit for database schema management

## Data Flow

### Frontend Data Flow
1. React components fetch data using TanStack Query hooks
2. Query client manages caching, background updates, and error states
3. API requests are made through a centralized `apiRequest` utility
4. Components re-render automatically when data changes

### Backend Data Flow
1. Express routes handle incoming HTTP requests
2. Storage interface abstracts database operations
3. Drizzle ORM translates queries to SQL
4. Responses are formatted and returned as JSON

### Development Workflow
1. Vite dev server serves the React application
2. Express server runs concurrently for API development
3. Hot module replacement updates frontend changes instantly
4. TypeScript compilation ensures type safety across the stack

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **lucide-react**: Icon library

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **Drizzle Kit**: Database migration tool

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class conflict resolution

## Deployment Strategy

### Production Build
- Frontend assets are built to `dist/public` directory
- Backend is bundled using esbuild to `dist/index.js`
- Static files are served by Express in production

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Development/production environment detection
- Replit-specific development tools integration

### Database Management
- Schema migrations handled through `drizzle-kit push`
- Database provisioning required before application startup
- PostgreSQL dialect with Neon Database integration

### Scaling Considerations
- Stateless backend design allows horizontal scaling
- Database connection pooling through Neon
- CDN-ready static asset structure
- Session storage in PostgreSQL for multi-instance support