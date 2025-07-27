import { contactFormSchema } from '@/lib/validations';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the data
    const validatedData = contactFormSchema.parse(body);
    
    // For testing - log the data
    console.log('📧 Contact Form Submission:', validatedData);
    
    // TODO: Add email sending logic here
    // For now, we'll just simulate success
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}