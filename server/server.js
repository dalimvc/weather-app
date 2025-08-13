import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Allow requests from your frontend
app.use(cors({ origin: 'http://localhost:3000' })); // change to your frontend URL in production

app.get('/weather', async (req, res) => {
  const location = req.query.q;
  if (!location) return res.status(400).json({ error: 'Missing location query' });

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
