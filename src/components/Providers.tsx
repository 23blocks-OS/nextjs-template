'use client';

import React from 'react';
import { Provider } from '@23blocks/react';
import { blocksConfig } from '@/lib/blocks-config';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <Provider
      apiKey={blocksConfig.apiKey}
      urls={blocksConfig.urls}
      authMode={blocksConfig.authMode}
      storage={blocksConfig.storage}
    >
      {children}
    </Provider>
  );
}
