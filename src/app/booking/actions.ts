
'use server';

import { z } from 'zod';

// Define a Zod schema for booking data validation on the server.
// It's good practice for server actions to validate incoming data.
// Using z.coerce.date() for pickupDate to handle potential string-to-date conversion.
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
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you would:
    // 1. Save `validatedData` to a database.
    // 2. Send an email notification to the admin.
    //    (e.g., using a service like Nodemailer, SendGrid, or Resend)
    //    Example: await sendAdminNotificationEmail(validatedData);
    // 3. Send a confirmation email to the user if email is provided.
    //    Example: if (validatedData.email) await sendUserConfirmationEmail(validatedData);

    // For now, the admin would be notified by checking these server logs.
    // In a more complete system, we would add code here to send an email or update an admin dashboard.
    
    const bookingSummary = `Cab booking for ${validatedData.name} from ${validatedData.pickupLocation} to ${validatedData.dropLocation} on ${validatedData.pickupDate.toLocaleDateString()} at ${validatedData.pickupTime}.`;
    return { 
      success: true, 
      serverMessage: 'Booking successfully processed on the server.',
      bookingDetails: bookingSummary 
    };

  } catch (error) {
    console.error('Error in submitBooking server action:', error);
    return { success: false, serverMessage: 'An unexpected error occurred while processing your booking on the server.' };
  }
}
