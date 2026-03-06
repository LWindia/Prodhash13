import { NextRequest, NextResponse } from 'next/server';

// Your Google Apps Script web app URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUuElW_I8R0DMZaunSZTeGOU8MYDkCBjuEj5ShzKpSlGd7-waA5tt4-_SpCer4Rh4IPQ/exec';

export async function GET(request: NextRequest) {
  try {
    console.log('Proxy API route: Fetching from Google Apps Script');
    
    const response = await fetch(APPS_SCRIPT_URL, {
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch data: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
    }
    
    const textResponse = await response.text();
    console.log('Raw response text (first 200 chars):', textResponse.substring(0, 200) + '...');
    
    let data;
    try {
      data = JSON.parse(textResponse);
      
      // Log detailed info about the structure
      if (Array.isArray(data) && data.length > 0) {
        console.log('First item in data array:', data[0]);
        console.log('Keys in first item:', Object.keys(data[0]));
      } else {
        console.log('Data is not an array or is empty');
      }
      
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      throw new Error('Invalid JSON response from Google Apps Script');
    }
    
    // Return the data exactly as received from Google Sheets
    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy API route: Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch offer letter data' },
      { status: 500 }
    );
  }
}