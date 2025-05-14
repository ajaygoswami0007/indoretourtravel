
'use server';

import { z } from 'zod';

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

// Placeholder function for sending admin notification email
async function sendAdminNotificationEmail(bookingData: BookingFormActionData) {
  // In a real application, you would use an email library (e.g., Nodemailer, Resend, SendGrid)
  // to send an email to the admin.
  // Example (conceptual):
  // const emailHtml = `<h1>New Cab Booking</h1><p>Details: ${JSON.stringify(bookingData, null, 2)}</p>`;
  // await emailService.send({
  //   to: 'admin@tourease-indore.com',
  //   subject: `New Booking: ${bookingData.name} - ${bookingData.pickupLocation} to ${bookingData.dropLocation}`,
  //   html: emailHtml,
  // });
  console.log(`[ADMIN EMAIL SIMULATION] Sending booking notification to admin for:`, bookingData);
}

// Placeholder function for sending user confirmation email
async function sendUserConfirmationEmail(bookingData: BookingFormActionData) {
  if (!bookingData.email) {
    console.log('[USER EMAIL SIMULATION] No email provided, skipping user confirmation email.');
    return;
  }
  // In a real application, you would use an email library
  // to send a confirmation email to the user.
  // Example (conceptual):
  // const emailHtml = `<h1>Booking Confirmation</h1><p>Dear ${bookingData.name}, your booking is received. Details: ${JSON.stringify(bookingData, null, 2)}</p>`;
  // await emailService.send({
  //   to: bookingData.email,
  //   subject: `TourEase Indore: Booking Confirmation - ${bookingData.pickupLocation} to ${bookingData.dropLocation}`,
  //   html: emailHtml,
  // });
  console.log(`[USER EMAIL SIMULATION] Sending booking confirmation to user ${bookingData.email} for:`, bookingData);
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

    // Simulate processing, like saving to a database or sending notifications
    await new Promise(resolve => setTimeout(resolve, 500)); // Reduced delay for quicker simulation

    // ** Email Notification Logic **
    // 1. Send an email notification to the admin.
    await sendAdminNotificationEmail(validatedData);
    
    // 2. Send a confirmation email to the user if email is provided.
    await sendUserConfirmationEmail(validatedData);
    
    const bookingSummary = `Cab booking for ${validatedData.name} from ${validatedData.pickupLocation} to ${validatedData.dropLocation} on ${validatedData.pickupDate.toLocaleDateString()} at ${validatedData.pickupTime}.`;
    
    let serverMessage = 'Booking successfully processed. Admin will be notified.';
    if (validatedData.email) {
      serverMessage += ' You will receive a confirmation email shortly.';
    }


    return { 
      success: true, 
      serverMessage: serverMessage,
      bookingDetails: bookingSummary 
    };

  } catch (error) {
    console.error('Error in submitBooking server action:', error);
    // Check if error is an instance of Error to safely access message property
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, serverMessage: `An unexpected error occurred on the server: ${errorMessage}` };
  }
}
