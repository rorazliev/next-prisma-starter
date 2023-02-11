import nc from 'next-connect';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    res.status(500).json({ message: 'Internal Server Error' });
  },

  onNoMatch: (req, res) => {
    res.status(404).json({ message: 'Not Found' });
  },
}).get((req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default handler;
