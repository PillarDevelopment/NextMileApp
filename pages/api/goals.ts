import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';
import { getUserFromRequest } from '../../lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, category, deadline, initData } = req.body;
    if (!title || !category || !deadline || !initData) return res.status(400).json({ error: 'Missing fields' });

    // Получаем Telegram user
    req.query.initData = initData; // для getUserFromRequest
    const user = getUserFromRequest(req);
    if (!user) return res.status(401).json({ error: 'No Telegram user' });

    // Сохраняем цель
    const { error } = await supabase.from('goals').insert([
      {
        title,
        category,
        deadline,
        user_id: user.id,
      },
    ]);
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
  }

  if (req.method === 'GET') {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: 'Missing user_id' });
    const { data, error } = await supabase.from('goals').select('*').eq('user_id', user_id).order('deadline');
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  return res.status(405).end();
} 