import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Property } from '../interfaces';

const Home: React.FC = () => {
  // Sample data for demonstration
  const sampleProperty: Property = {
    id: '1',
    title: 'Beautiful Beach House',
    description: 'Stunning beach house with ocean view and modern amenities.',
    price: 120,
    rating: 4.8,
    image: '/assets/images/placeholder.jpg',
    location: 'Malibu, CA',
    amenities: ['WiFi', 'Pool', 'Parking', 'Ocean View']
  };

  const handleBookNow = () => {
    alert('Booking functionality to be implemented!');
  };

  const handleSecondaryAction = () => {
    alert('Secondary action triggered!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ALX Listing App
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing places to stay around the world
          </p>
        </header>

        <div className="flex flex-col items-center space-y-8">
          {/* Demo Card Component */}
          <section className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">Featured Property</h2>
            <Card
              image={sampleProperty.image}
              title={sampleProperty.title}
              description={sampleProperty.description}
              price={sampleProperty.price}
              rating={sampleProperty.rating}
              onButtonClick={handleBookNow}
              buttonText="Book Now"
            />
          </section>

          {/* Demo Button Variants */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Button Components</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" onClick={handleBookNow}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={handleSecondaryAction}>
                Secondary Button
              </Button>
              <Button variant="success" onClick={handleSecondaryAction}>
                Success Button
              </Button>
              <Button variant="danger" onClick={handleSecondaryAction}>
                Danger Button
              </Button>
              <Button disabled={true}>
                Disabled Button
              </Button>
            </div>
          </section>

          {/* Project Info */}
          <section className="bg-white rounded-lg shadow-md p-6 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Project Setup Complete! 🎉</h2>
            <p className="text-gray-700 mb-4">
              This ALX Listing App has been successfully scaffolded with:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left mb-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Next.js with TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                ESLint Configuration
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Reusable Components
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                TypeScript Interfaces
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Project Constants
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Check the README.md file for more details about the project structure and how to run the application.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;