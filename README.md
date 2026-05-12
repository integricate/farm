# Umesh Poultry Farm Website

A modern, responsive website for Umesh Poultry Farm built with React and Vite.

## Features

- 🎨 **Beautiful Design**: Green, white, and black color theme with perfect contrast
- 📱 **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- ✨ **Smooth Animations**: Fade-in effects and hover animations
- 🧭 **Easy Navigation**: Intuitive navigation with mobile menu support
- 📄 **Documents Page**: Dedicated page for official documents (Tax Clearance, Financial Reports, etc.)

## Pages

1. **Home Page**
   - Hero section with call-to-action buttons
   - About Us section highlighting quality, sustainability, and expertise
   - Services section showcasing products (eggs, live birds, dressed chicken, bulk supply)
   - Contact section with phone, email, LinkedIn, and location

2. **Documents Page** (`/docs`)
   - Tax Clearance Certificate
   - Farm Projection Report
   - Profit & Loss Account
   - Business Registration
   - Quality Certification
   - Annual Report

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the project directory:
```bash
cd umesh-poultry-farm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Adding Documents

To add your PDF documents:

1. Place your PDF files in the `src/docs` folder
2. Update the `documents` array in `src/DocsPage.jsx` with the filename:

```javascript
{
  id: 1,
  title: 'Tax Clearance Certificate',
  description: 'Official tax clearance document for fiscal year',
  icon: '📄',
  file: 'tax-clearance-2024.pdf' // Add your filename here
}
```

## Contact Information

- **Phone**: +977 9767579040
- **Email**: info@umeshpoultryfarm.com.np
- **LinkedIn**: linkedin.com/company/umeshpoultryfarm
- **Established**: 2020

## Technologies Used

- React 18
- React Router DOM
- Vite
- CSS3 with Custom Variables

## License

© 2024 Umesh Poultry Farm. All rights reserved.
