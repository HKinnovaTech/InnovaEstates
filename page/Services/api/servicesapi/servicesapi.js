const SUPABASE_URL = 'https://epnrntxvjzgfpzegeiaw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwbnJudHh2anpnZnB6ZWdlaWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MzAyODEsImV4cCI6MjA1MjQwNjI4MX0.YnLoe56FS26aJfqpv0J1d7TNIdyBIpp8_UwFyfsTPjw';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const { data, error } = await supabase
          .from('hkrealestates')
          .select('*');
  
        if (error) {
          throw error;
        }
  
        res.status(200).json({ data });
      } catch (error) {
        console.error('Error fetching developers:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch developers', details: error.message || 'No details' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }