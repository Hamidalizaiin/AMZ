import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About This Project
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              This is a modern React application built with the latest technologies and best practices.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li><strong>React 18:</strong> Latest version with concurrent features and hooks</li>
              <li><strong>TypeScript:</strong> Type-safe JavaScript for better development experience</li>
              <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid styling</li>
              <li><strong>React Router:</strong> Declarative routing for single-page applications</li>
              <li><strong>Webpack 5:</strong> Modern module bundler with hot reload</li>
              <li><strong>Babel:</strong> JavaScript compiler for modern syntax support</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-8">
              <li>Type-safe development with TypeScript</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Client-side routing with React Router</li>
              <li>Hot module replacement for development</li>
              <li>Modern build tools and optimizations</li>
              <li>Component-based architecture</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <code className="text-sm text-gray-800">
                npm install<br/>
                npm start
              </code>
            </div>
            
            <p className="text-gray-600">
              This project serves as a foundation for building modern React applications with TypeScript.
              It includes all the necessary configurations and dependencies to get started quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
