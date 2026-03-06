// components/Subscribe.tsx
"use client";
import React, { useState } from 'react';
import axios from 'axios';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter an email address');
      return;
    }

    try {
      setStatus('loading');
      
      const response = await axios.post('/api/subscribe', { email });
      
      if (response.data.success) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-[#5ec5b6] w-full py-8 flex justify-center">
      <div className="max-w-5xl w-full flex flex-col sm:flex-row items-center justify-between px-4 space-y-6 sm:space-y-0">
        {/* Left Section: Icon and Text */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          <div className="text-center sm:text-left">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">Subscribe for</h2>
            <p className="text-white text-2xl sm:text-3xl font-bold">Free courses</p>
          </div>
        </div>

        {/* Right Section: Input and Button */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0">
          {/* Email Input */}
          <div className="relative w-full sm:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail address"
              className="w-full sm:w-72 pl-10 pr-4 py-3 border-0 focus:outline-none rounded-full sm:rounded-l-full sm:rounded-r-none text-gray-700"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m4-4v8m8 4H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
          {/* Subscribe Button */}
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto bg-[#f5f5f5] text-black font-semibold px-8 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full hover:bg-gray-200 disabled:opacity-50"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>
        
        {/* Status Message */}
        {message && (
          <div className={`mt-2 text-sm ${status === 'error' ? 'text-red-600' : 'text-white'}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;