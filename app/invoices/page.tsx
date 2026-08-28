'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function InvoicesRedirect() {
  useEffect(() => {
    redirect('/metrics');
  }, []);

  return null;
}
