-- Create leads table for storing form submissions
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserting leads (public form)
CREATE POLICY "Allow anonymous lead creation" 
ON public.leads 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create policy to allow reading leads for authenticated users only
CREATE POLICY "Allow authenticated users to view leads" 
ON public.leads 
FOR SELECT 
TO authenticated
USING (true);

-- Create index for better performance
CREATE INDEX idx_leads_email ON public.leads(email);
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);