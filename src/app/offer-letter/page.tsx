"use client";

import React from 'react';
import OfferLetterGenerator from '@/components/customComponents/OfferLetter/OfferLetterGenerator';
import SignIn from '../../components/customComponents/OfferLetter/SignIn';
import { useAuth } from '@/hooks/useAuth';

const OfferLetterPage: React.FC = () => {
  const { isAuthenticated, isLoading, signIn, signOut } = useAuth();

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  // Show sign in page if not authenticated
  if (!isAuthenticated) {
    return <SignIn onSignIn={signIn} />;
  }

  // Show the main content if authenticated
  return (
    <main className="min-h-screen">
      {/* Optional: Add a sign out button */}
      <div className="p-4 bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Offer Letter Generator</h1>
          <button
            onClick={signOut}
            type="button"
            className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
      
      <OfferLetterGenerator />
    </main>
  );
};

export default OfferLetterPage;