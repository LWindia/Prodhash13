


import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, fullName, status } = await request.json();

    console.log('API Route - Received data:', { email, fullName, status }); // Debug log

    if (!email || !fullName || !status) {
      return NextResponse.json(
        { error: 'Email, fullName, and status are required' },
        { status: 400 }
      );
    }

    // Your Google Apps Script URL for updating status
    const APPS_SCRIPT_UPDATE_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_UPDATE_URL || 
      'https://script.google.com/macros/s/AKfycbyUuElW_I8R0DMZaunSZTeGOU8MYDkCBjuEj5ShzKpSlGd7-waA5tt4-_SpCer4Rh4IPQ/exec';

    console.log('API Route - Calling Google Apps Script with URL:', APPS_SCRIPT_UPDATE_URL); // Debug log

    const response = await fetch(APPS_SCRIPT_UPDATE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'updateStatus',
        email: email.trim(),
        fullName: fullName.trim(),
        status: status.trim()
      }),
    });

    console.log('API Route - Google Apps Script response status:', response.status); // Debug log

    if (!response.ok) {
      throw new Error(`Failed to update status: ${response.status} ${response.statusText}`);
    }

    const responseText = await response.text();
    console.log('API Route - Google Apps Script response text:', responseText); // Debug log

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('API Route - Error parsing response:', parseError);
      throw new Error('Invalid response from Google Apps Script');
    }

    console.log('API Route - Parsed result:', result); // Debug log

    if (result.error) {
      throw new Error(result.error);
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Status updated successfully',
      result 
    });

  } catch (error) {
    console.error('API Route - Error updating status:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to update status in Google Sheets',
        details: error instanceof Error ? error.stack : 'Unknown error'
      },
      { status: 500 }
    );
  }
}