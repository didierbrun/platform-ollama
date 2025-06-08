export default async ({ req, res, log, error }) => {

  // Headers CORS à inclure dans la réponse
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
  };

  if (req.method === 'OPTIONS') {
    return res.json({}, 200, headers); // Changé de res.empty() à res.json()
  }

  return res.json({
    success: true
  }, 200, headers);
}