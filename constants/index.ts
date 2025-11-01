export const APP_CONFIG = {
  name: 'ALX Listing App',
  version: '1.0.0',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
};

export const UI_TEXT = {
  bookNow: 'Book Now',
  viewDetails: 'View Details',
  loading: 'Loading...',
  error: 'Something went wrong',
  noProperties: 'No properties found',
};

export const ROUTES = {
  home: '/',
  properties: '/properties',
  about: '/about',
  contact: '/contact',
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
};