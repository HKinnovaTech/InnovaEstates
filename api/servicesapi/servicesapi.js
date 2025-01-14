const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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