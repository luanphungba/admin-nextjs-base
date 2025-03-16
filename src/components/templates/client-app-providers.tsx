'use client';

import { SessionProvider } from 'next-auth/react';

export function ClientAppProviders({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
