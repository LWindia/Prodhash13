










"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OfferLetterFormData, OfferLetterFormProps } from '../../../../types/offerLetter';

export default function OfferLetterForm({ onSubmit }: OfferLetterFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<OfferLetterFormData>();
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Course Confirmation Letter</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fullName" className="font-medium">Full Name</label>
              <Input 
                id="fullName"
                placeholder="Enter your full name"
                {...register('fullName', { required: 'Name is required' })}
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <Input 
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            
            {/* <div className="space-y-2">
              <label htmlFor="phoneNumber" className="font-medium">Phone Number</label>
              <Input 
                id="phoneNumber"
                placeholder="Enter your phone number"
                {...register('phoneNumber', { required: 'Phone number is required' })}
                className={errors.phoneNumber ? 'border-red-500' : ''}
              />
              {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>}
            </div> */}
            
            <div className="space-y-2">
              <label htmlFor="refNumber" className="font-medium">Reference Number</label>
              <Input 
                id="refNumber"
                placeholder="Enter reference number (e.g., 101)"
                {...register('refNumber', { 
                  required: 'Reference number is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Reference number must be numeric'
                  }
                })}
                className={errors.refNumber ? 'border-red-500' : ''}
              />
              {errors.refNumber && <span className="text-red-500 text-sm">{errors.refNumber.message}</span>}
              <p className="text-xs text-gray-500">This will be used in the reference: LWIPL-JPR-2025-[your number]</p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="courseTitle" className="font-medium">Course Title</label>
              <Input 
                id="courseTitle"
                placeholder="Enter course title"
                {...register('courseTitle', { required: 'Course title is required' })}
                className={errors.courseTitle ? 'border-red-500' : ''}
              />
              {errors.courseTitle && <span className="text-red-500 text-sm">{errors.courseTitle.message}</span>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="instituteName" className="font-medium">Institute Name</label>
              <Input 
                id="instituteName"
                placeholder="Enter institute name"
                {...register('instituteName', { required: 'Institute name is required' })}
                className={errors.instituteName ? 'border-red-500' : ''}
              />
              {errors.instituteName && <span className="text-red-500 text-sm">{errors.instituteName.message}</span>}
            </div>

            <div className="space-y-2">
              <label htmlFor="preferredBatch" className="font-medium">Preferred Batch</label>
              <Input 
                id="preferredBatch"
                placeholder="Enter preferred batch (e.g., starting from 15th January, 2025 as per the office)"
                {...register('preferredBatch', { required: 'Preferred batch is required' })}
                className={errors.preferredBatch ? 'border-red-500' : ''}
              />
              {errors.preferredBatch && <span className="text-red-500 text-sm">{errors.preferredBatch.message}</span>}
            </div>
            
            {/* <div className="space-y-2">
              <label htmlFor="startDate" className="font-medium">Start Date</label>
              <Input 
                id="startDate"
                type="date"
                {...register('startDate', { required: 'Start date is required' })}
                className={errors.startDate ? 'border-red-500' : ''}
              />
              {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate.message}</span>}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="endDate" className="font-medium">End Date</label>
              <Input 
                id="endDate"
                type="date"
                {...register('endDate', { required: 'End date is required' })}
                className={errors.endDate ? 'border-red-500' : ''}
              />
              {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate.message}</span>}
            </div>
             */}
            {/* <div className="space-y-2 md:col-span-2">
              <label htmlFor="address" className="font-medium">Address</label>
              <Input 
                id="address"
                placeholder="Enter your address"
                {...register('address', { required: 'Address is required' })}
                className={errors.address ? 'border-red-500' : ''}
              />
              {errors.address && <span className="text-red-500 text-sm">{errors.address.message}</span>}
            </div> */}
          </div>
          
          <Button type="submit" className="w-full">Generate Offer Letter</Button>
        </form>
      </CardContent>
    </Card>
  );
}