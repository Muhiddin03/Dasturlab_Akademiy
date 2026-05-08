// api/env.js — Vercel Serverless Function
// Supabase kalitlarini frontend ga xavfsiz uzatadi
// Bu fayl GitHub da ko'rinmaydi, kalitlar faqat Vercel dashboard da saqlanadi

export default function handler(req, res) {
  // Faqat GET so'rovlarga javob beradi
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Vercel Environment Variables dan o'qiydi
  // Bu kalitlar GitHub da SAQLANMAYDI — faqat Vercel serverida
  res.status(200).json({
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_ANON_KEY || '',   
  });
}