# Traveler UX/UI Design by Phạm Lê Ngọc Sơn

A modern travel application designed to enhance the travel experience through intuitive interfaces and seamless user experiences.

## Project Overview

This project is a Next.js-based travel application that helps users plan, organize, and enjoy their travel adventures. The application focuses on providing a beautiful UI/UX design with responsive components and interactive elements.

## Project Structure

```
├── app/                   # Next.js application pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main homepage
├── components/            # Reusable UI components
│   ├── Button.tsx         # Custom button component
│   ├── Camp.tsx           # Camping section component
│   ├── Features.tsx       # Features showcase component
│   ├── Footer.tsx         # Footer component with links and contact info
│   ├── GetApp.tsx         # App download section
│   ├── Guide.tsx          # Travel guide component
│   ├── Hero.tsx           # Hero/banner section
│   └── Navbar.tsx         # Navigation bar component
├── constants/             # Constants and static data
│   └── index.ts           # Navigation links, features, and footer data
└── public/                # Static assets (images, icons)
```

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **React**: For building the user interface

## Features

1. **Interactive Navigation**: Easy navigation across different sections of the app
2. **Camping Information**: Details about camping locations and experiences
3. **Offline Maps**: Access to maps even without internet connection
4. **Adventure Scheduling**: Tools to plan and schedule adventures
5. **AR Technology**: Augmented reality features for enhanced hiking experiences
6. **New Locations**: Regular updates with new travel destinations
7. **Responsive Design**: Fully responsive interface for all device sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/sonple/traveler-ux-ui.git
cd traveler-ux-ui
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Usage

The application is designed to be intuitive. You can:
- Navigate through different sections using the navbar
- Explore camping locations and features
- Check out travel guides and recommendations
- Learn about the offline map functionality
- View the AR features available for travelers

## Author

- **Phạm Lê Ngọc Sơn**

## License

This project is licensed under the MIT License.
