import { NextApiRequest } from 'next';
import jwtDecode from 'jwt-decode';

export function getUserFromRequest(req: NextApiRequest): { id: string, first_name?: string, last_name?: string, username?: string } | null {
  // Попытка получить initData из query или cookies
  const initData = req.query.initData || req.cookies.initData;
  if (!initData) return null;
  try {
    // В initData есть user (Telegram WebApp auth)
    const decoded: any = jwtDecode(initData as string);
    if (decoded.user && decoded.user.id) {
      return {
        id: String(decoded.user.id),
        first_name: decoded.user.first_name,
        last_name: decoded.user.last_name,
        username: decoded.user.username,
      };
    }
  } catch (e) {
    // Если не jwt, возможно просто JSON
    try {
      const parsed = JSON.parse(initData as string);
      if (parsed.user && parsed.user.id) {
        return {
          id: String(parsed.user.id),
          first_name: parsed.user.first_name,
          last_name: parsed.user.last_name,
          username: parsed.user.username,
        };
      }
    } catch {}
  }
  return null;
} 