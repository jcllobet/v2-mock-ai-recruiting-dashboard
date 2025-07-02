# AI Recruiting Dashboard

A modern, responsive AI-powered recruiting platform built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Client Management**: Track and manage client relationships with detailed profiles
- **Position Tracking**: Create and manage job openings with applicant pipelines
- **Candidate Database**: Comprehensive candidate profiles with skills and experience tracking
- **AI Conversations**: Mock AI-powered screening and interview conversations
- **Analytics Dashboard**: Real-time KPIs and performance metrics
- **Responsive Design**: Fully responsive UI that works seamlessly on desktop, tablet, and mobile

### Technical Features
- **Type Safety**: Full TypeScript implementation with comprehensive type definitions
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Mock Data Service**: Realistic mock data with simulated API delays
- **Authentication**: Token-based authentication with protected routes
- **Modern UI**: Clean, accessible components built with Radix UI and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives for accessibility
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Charts**: Recharts for data visualization
- **Drag & Drop**: @dnd-kit for workflow building
- **Build Tool**: Next.js built-in bundler

## Project Structure

```
v2-mock-ai-recruiting-dashboard/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   └── login/                # Login page
│   ├── (dashboard)/              # Protected dashboard routes
│   │   ├── layout.tsx            # Dashboard layout wrapper
│   │   ├── dashboard/            # Main dashboard
│   │   ├── clients/              # Client management
│   │   ├── positions/            # Position management
│   │   └── ...                   # Other pages
│   ├── components/               # Reusable components
│   │   ├── ui/                   # Base UI components
│   │   ├── layouts/              # Layout components
│   │   └── features/             # Feature-specific components
│   ├── lib/                      # Utilities and services
│   │   ├── contexts/             # React contexts
│   │   ├── mock-data/            # Mock data and services
│   │   ├── types/                # TypeScript type definitions
│   │   └── utils/                # Utility functions
│   ├── hooks/                    # Custom React hooks
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page (redirects)
├── public/                       # Static assets
├── middleware.ts                 # Authentication middleware
└── next.config.mjs               # Next.js configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd v2-mock-ai-recruiting-dashboard
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Default Credentials
- Email: `admin@airecruiting.com`
- Password: `password`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Architecture Overview

### Authentication Flow
1. User logs in via `/login` page
2. Mock service validates credentials and returns JWT token
3. Token stored in localStorage and as HTTP-only cookie
4. Middleware checks authentication for protected routes
5. Auth context provides user state throughout the app

### Data Flow
1. Components request data using mock service functions
2. Mock services simulate API delays for realistic UX
3. Data is fully typed with TypeScript interfaces
4. React Query could be added for caching (currently direct calls)

### Component Architecture
- **Server Components**: Used where possible for better performance
- **Client Components**: Used for interactivity and browser APIs
- **Responsive Design**: Mobile-first approach with breakpoints at:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## Key Components

### UI Components
- `Button`: Versatile button with multiple variants
- `Card`: Container component for content sections
- `Input`: Form input with consistent styling
- `LoadingSpinner`: Loading state indicator

### Layout Components
- `SidebarLayout`: Main dashboard layout with responsive navigation
- `AuthProvider`: Authentication context provider

### Mock Services
- `clientService`: CRUD operations for clients
- `positionService`: Job position management
- `candidateService`: Candidate data operations
- `dashboardService`: Dashboard metrics and KPIs
- `userService`: Authentication and user management

## Performance Optimizations

1. **Code Splitting**: Automatic with Next.js App Router
2. **Image Optimization**: Next.js Image component (when images added)
3. **Font Optimization**: Next.js font loading
4. **CSS Optimization**: Tailwind CSS purging unused styles
5. **TypeScript**: Compile-time type checking prevents runtime errors

## Responsive Design Features

- **Mobile Navigation**: Collapsible sidebar with overlay
- **Responsive Tables**: Card view on mobile, table view on desktop
- **Touch-Friendly**: Larger tap targets on mobile devices
- **Flexible Grids**: Responsive grid layouts that adapt to screen size
- **Optimized Typography**: Readable font sizes across devices

## Future Enhancements

1. **Real API Integration**: Replace mock services with actual API calls
2. **Advanced Search**: Full-text search with filters
3. **Real-time Updates**: WebSocket integration for live updates
4. **File Uploads**: Resume and document management
5. **Email Integration**: Automated email notifications
6. **Calendar Integration**: Sync with external calendars
7. **Advanced Analytics**: More detailed reporting and insights
8. **Internationalization**: Multi-language support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.