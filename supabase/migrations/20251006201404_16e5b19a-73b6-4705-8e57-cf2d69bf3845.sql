-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create a cron job that runs every 5 days at midnight
SELECT cron.schedule(
  'keep-alive-every-5-days',
  '0 0 */5 * *',
  $$
  SELECT
    net.http_post(
        url:='https://krxwrvfvsxwmluctdfal.supabase.co/functions/v1/keep-alive',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyeHdydmZ2c3h3bWx1Y3RkZmFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODY3MDUsImV4cCI6MjA3NDE2MjcwNX0.W8qG_kq5jXoFYUXSuzjsATK4SfUCL635NgHYJ_7mrmA"}'::jsonb,
        body:=concat('{"timestamp": "', now(), '"}')::jsonb
    ) as request_id;
  $$
);