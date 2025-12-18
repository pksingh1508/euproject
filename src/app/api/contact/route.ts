import { appendToSheet } from '@/lib/google-sheets';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, option, subject, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the date
    const date = new Date().toLocaleString();

    // Prepare row data
    const rowData = [
      date,
      firstName,
      lastName,
      email,
      phone,
      option, // userType
      subject,
      message || '',
    ];

    // Append to Google Sheet
    await appendToSheet(rowData);

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
