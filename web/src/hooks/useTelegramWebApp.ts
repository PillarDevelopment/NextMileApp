import { useEffect, useState } from "react";

export function useTelegramWebApp() {
  const [isTelegram, setIsTelegram] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      setIsTelegram(true);
    } else {
      setIsTelegram(false);
    }
  }, []);

  return isTelegram;
} 