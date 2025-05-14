
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Define a Zod schema for booking data validation on the server.
const bookingActionSchema = z.object({
  serviceType: z.string().min(1, "Service type is required"),
  pickupLocation: z.string().min(3, "Pickup location is required (e.g., Indore Airport, Indore Railway Station)"),
  dropLocation: z.string().min(3, "Drop-off location is required (e.g., Ujjain Mahakal Temple, Omkareshwar)"),
  pickupDate: z.coerce.date({ required_error: "Pickup date is required" }),
  pickupTime: z.string().min(1, "Pickup time is required"),
  carType: z.string().min(1, "Car type is required (e.g., Sedan, SUV, Tempo Traveller)"),
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required").max(15),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
});

export type BookingFormActionData = z.infer<typeof bookingActionSchema>;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const ADMIN_EMAIL = "ajaypurimnnit@gmail.com"; // Your admin email address
const FROM_EMAIL = "onboarding@resend.dev"; // Use a Resend verified domain or their test email

// Function to send admin notification email
async function sendAdminNotificationEmail(bookingData: BookingFormActionData) {
  if (!resend) {
    console.log('[ADMIN EMAIL SIMULATION - RESEND_API_KEY not set] Sending booking notification to admin for:', bookingData);
    console.warn('Resend API key is not configured. Email will not be sent.');
    return;
  }

  const subject = `New Cab Booking: ${bookingData.name} - ${bookingData.pickupLocation} to ${bookingData.dropLocation}`;
  const emailHtml = `
    <h1>New Cab Booking Received</h1>
    <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
    <p><strong>Pickup Location:</strong> ${bookingData.pickupLocation}</p>
    <p><strong>Drop-off Location:</strong> ${bookingData.dropLocation}</p>
    <p><strong>Pickup Date:</strong> ${bookingData.pickupDate.toLocaleDateString()}</p>
    <p><strong>Pickup Time:</strong> ${bookingData.pickupTime}</p>
    <p><strong>Car Type:</strong> ${bookingData.carType}</p>
    <p><strong>Customer Name:</strong> ${bookingData.name}</p>
    <p><strong>Customer Phone:</strong> ${bookingData.phone}</p>
    <p><strong>Customer Email:</strong> ${bookingData.email || 'Not provided'}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: subject,
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending admin notification email:', error);
      return;
    }
    console.log('Admin notification email sent successfully:', data);
  } catch (e) {
    console.error('Exception sending admin notification email:', e);
  }
}

// Function to send user confirmation email
async function sendUserConfirmationEmail(bookingData: BookingFormActionData) {
  if (!bookingData.email) {
    console.log('[USER EMAIL SIMULATION] No email provided, skipping user confirmation email.');
    return;
  }
  if (!resend) {
    console.log(`[USER EMAIL SIMULATION - RESEND_API_KEY not set] Sending booking confirmation to user ${bookingData.email} for:`, bookingData);
    console.warn('Resend API key is not configured. User confirmation email will not be sent.');
    return;
  }

  const subject = `TourEase Indore: Booking Confirmation - ${bookingData.pickupLocation} to ${bookingData.dropLocation}`;
  const emailHtml = `
    <h1>Your Booking with TourEase Indore is Received!</h1>
    <p>Dear ${bookingData.name},</p>
    <p>Thank you for booking with TourEase Indore. Your booking request has been received. Our team will contact you shortly to confirm the details.</p>
    <h2>Booking Summary:</h2>
    <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
    <p><strong>Pickup Location:</strong> ${bookingData.pickupLocation}</p>
    <p><strong>Drop-off Location:</strong> ${bookingData.dropLocation}</p>
    <p><strong>Pickup Date:</strong> ${bookingData.pickupDate.toLocaleDateString()}</p>
    <p><strong>Pickup Time:</strong> ${bookingData.pickupTime}</p>
    <p><strong>Car Type:</strong> ${bookingData.carType}</p>
    <p>If you have any questions, please contact us at support@tourease-indore.com or call our Indore Cab Contact: +91-XXX-XXXXXXX.</p>
    <p>Sincerely,<br/>The TourEase Indore Team</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: bookingData.email,
      subject: subject,
      html: emailHtml,
    });

    if (error) {
      console.error('Error sending user confirmation email:', error);
      return;
    }
    console.log('User confirmation email sent successfully:', data);
  } catch (e) {
    console.error('Exception sending user confirmation email:', e);
  }
}


export async function submitBooking(data: BookingFormActionData): Promise<{ success: boolean; serverMessage: string; bookingDetails?: string }> {
  try {
    // Validate the data on the server
    const validationResult = bookingActionSchema.safeParse(data);
    if (!validationResult.success) {
      console.error('Server-side booking validation failed:', validationResult.error.flatten());
      return { success: false, serverMessage: 'Invalid booking data received by server.' };
    }

    const validatedData = validationResult.data;

    console.log('Server Action: Received Validated Booking Data:', validatedData);
    
    // Email Notification Logic
    // 1. Send an email notification to the admin.
    await sendAdminNotificationEmail(validatedData);
    
    // 2. Send a confirmation email to the user if email is provided.
    await sendUserConfirmationEmail(validatedData);
    
    const bookingSummary = `Cab booking for ${validatedData.name} from ${validatedData.pickupLocation} to ${validatedData.dropLocation} on ${validatedData.pickupDate.toLocaleDateString()} at ${validatedData.pickupTime}.`;
    
    let serverMessage = 'Booking successfully processed. Admin has been notified.';
    if (validatedData.email) {
      serverMessage += ' You will receive a confirmation email shortly.';
    }
    if (!resend) {
        serverMessage += ' (Email sending is currently in simulation mode - API key not set).';
    }


    return { 
      success: true, 
      serverMessage: serverMessage,
      bookingDetails: bookingSummary 
    };

  } catch (error) {
    console.error('Error in submitBooking server action:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, serverMessage: `An unexpected error occurred on the server: ${errorMessage}` };
  }
}

