import React from 'react';
import { ContextProvider, useCustomHook } from '@/app/provider';

export default function Layout({ children }) {
  return (
    <ContextProvider>
      <div className="bg-violet-400">{children}</div>
    </ContextProvider>
  );
}
