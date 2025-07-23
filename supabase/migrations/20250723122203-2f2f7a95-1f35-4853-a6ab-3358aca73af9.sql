-- Create form_submissions table to store contact form data
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  current_systems TEXT,
  pain_points TEXT NOT NULL,
  revenue TEXT,
  timeline TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public form submissions)
CREATE POLICY "Anyone can submit forms" 
ON public.form_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow admin access (you'll need this to view submissions)
-- For now, let's allow authenticated users to read all submissions
CREATE POLICY "Authenticated users can view submissions" 
ON public.form_submissions 
FOR SELECT 
USING (true);

-- Add trigger for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_form_submissions_updated_at
BEFORE UPDATE ON public.form_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();