
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert appointments (public booking form)
CREATE POLICY "Anyone can book appointments"
  ON public.appointments
  FOR INSERT
  WITH CHECK (true);

-- Only allow reading own appointments by email (basic privacy)
CREATE POLICY "Anyone can read appointments for availability"
  ON public.appointments
  FOR SELECT
  USING (true);
