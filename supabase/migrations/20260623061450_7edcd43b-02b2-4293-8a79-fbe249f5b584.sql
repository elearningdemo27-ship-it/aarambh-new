
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.bootstrap_first_admin() FROM PUBLIC, anon, authenticated;

-- Tighten public contact insert with WITH CHECK length limits
DROP POLICY IF EXISTS "Anyone can submit contact" ON public.contact_submissions;
CREATE POLICY "Anyone can submit contact" ON public.contact_submissions FOR INSERT TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200 AND
    char_length(email) BETWEEN 3 AND 255 AND
    char_length(message) BETWEEN 1 AND 5000 AND
    (phone IS NULL OR char_length(phone) <= 50) AND
    (organisation IS NULL OR char_length(organisation) <= 200) AND
    (service_interest IS NULL OR char_length(service_interest) <= 200)
  );
