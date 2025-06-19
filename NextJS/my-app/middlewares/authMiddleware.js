export default function authMiddleware(handler) {
    return (req, res) => {
      const headerApiKey = req.headers.apikey;
      const queryApiKey = req.query.apiKey;

      if ( (!headerApiKey && !queryApiKey) || 
             (headerApiKey !== process.env.API_KEY && 
             queryApiKey !== process.env.API_KEY) ) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      return handler(req, res);
    };
}