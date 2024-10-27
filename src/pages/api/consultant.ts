/* eslint-disable max-statements */
// pages/api/consultant.ts
import { FormValuesProps } from '@/components/FormRegister';
import { NextApiRequest, NextApiResponse } from 'next';

type ConsultantBody = FormValuesProps;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const SHEET_ID = process.env.SHEET_ID;
  const SHEET_URL = process.env.SHEET_URL;

  if (!SHEET_ID || !SHEET_URL) {
    return res.status(500).json({ error: 'Environment variables not set' });
  }

  if (req.method === 'POST') {
    // Handle POST request
    const requestBody = req.body as ConsultantBody;

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
    } catch (error) {
      res.status(400).json({ message: 'Consultant not successfully' });
    }

    res.status(201).json({ message: 'Consultant created successfully' });
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
