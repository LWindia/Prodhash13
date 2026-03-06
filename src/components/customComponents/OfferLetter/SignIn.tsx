"use client";

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Credentials, SignInProps } from '../../../../types/auth';

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const [credentials, setCredentials] = useState<Credentials>({ 
    username: '', 
    password: '' 
  });
  const [error, setError] = useState<string>('');
  const router = useRouter();

  // Hardcoded credentials
  const VALID_CREDENTIALS: Credentials = {
    username: 'admin',
    password: 'LWindia@#123'
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (credentials.username === VALID_CREDENTIALS.username && 
        credentials.password === VALID_CREDENTIALS.password) {
      // Store authentication in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      onSignIn(credentials.username, credentials.password);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-red-700">
            Sign In
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access Offer Letter Generator
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              placeholder="Enter username"
              value={credentials.username}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign In
          </button>
        </form>
        
        
      </div>
    </div>
  );
};

export default SignIn;