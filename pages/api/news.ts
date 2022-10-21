import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseAPI, ResponseAPIProps } from '../../lib/api';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseAPIProps>,
) {
  const data = {
    hotline: [],
    news: [],
  };

  res.status(200).json(ResponseAPI(200, 'OK!', {}, data));
}
