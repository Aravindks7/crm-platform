
  import * as z from "zod";

export const leadSchema = z.object({
  leadImage: z.string().optional(),
  leadOwner: z.string().optional(),
  firstName: z.string().nonempty({message: "First Name is Required"}),
  lastName: z.string().optional(),
  email: z.string().email().nonempty({message: "Email is Required"}),
  phone: z.string().optional(),
  mobile: z.string().optional(),
  title: z.string().optional(),
  leadSource: z.enum(['Website', 'Referral', 'Advertisement', 'Social Media', 'Email Campaign', 'Cold Call', 'Event']).optional(),
  industry: z.enum(['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing', 'Consulting', 'Real Estate']).optional(),
  annualRevenue: z.number().optional(),
  emailOptOut: z.boolean().optional(),
  company: z.string().optional(),
  fax: z.string().optional(),
  website: z.string().optional(),
  leadStatus: z.enum(['New', 'Contacted', 'Qualified', 'Unqualified', 'Converted', 'Lost']).optional(),
  numberOfEmployees: z.number().optional(),
  rating: z.enum(['Hot', 'Warm', 'Cold']).optional(),
  skypeId: z.string().optional(),
  secondaryEmail: z.string().optional(),
  twitter: z.string().optional(),
  description: z.string().optional(),
});



export const schema = z.object({
  ...leadSchema.shape,
  
});
