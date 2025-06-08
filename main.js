import axios from 'axios'

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

    const result = await axios.post(
        'http://192.168.1.58:11434/api/generate',
        {
            "model": "sushruth/solar-uncensored:latest",
            "prompt": "traduis en français : i m alive",
            "stream": false
        },
        {
            heaers: {
                'Content-Type': 'application/json'
            }
        }
    )

    return res.json({
        success: true,
        data: result.data
    }, 200, headers);
}