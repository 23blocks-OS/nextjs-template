# 23blocks Next.js Template

A starter template for building Next.js applications with the 23blocks SDK.

## Quick Start

```bash
# Clone this template
npx degit 23blocks-OS/app-templates/nextjs my-app
cd my-app

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your 23blocks configuration

# Start development server
npm run dev
```

## Configuration

Edit `.env.local` to configure your 23blocks services:

```env
# Required
NEXT_PUBLIC_23BLOCKS_API_KEY=your-api-key

# Service URLs (configure only what you need)
NEXT_PUBLIC_23BLOCKS_AUTH_URL=https://auth.your-domain.com
NEXT_PUBLIC_23BLOCKS_PRODUCTS_URL=https://products.your-domain.com
NEXT_PUBLIC_23BLOCKS_CRM_URL=https://crm.your-domain.com
```

## Usage

### Using the SDK in Components

```tsx
'use client';

import { useBlocks23 } from '@23blocks/react';

export function MyComponent() {
  const { auth, products, isAuthenticated, user } = useBlocks23();

  // Authentication
  await auth.signIn({ email, password });
  await auth.signOut();

  // Products (if configured)
  const items = await products.list();

  return <div>...</div>;
}
```

### Auth Modes

**Token mode (default):**
```ts
// In src/lib/blocks-config.ts
export const blocksConfig = {
  apiKey: '...',
  urls: { ... },
  authMode: 'token',
  storage: 'localStorage', // or 'sessionStorage' | 'memory'
};
```

**Cookie mode (recommended for production):**
```ts
export const blocksConfig = {
  apiKey: '...',
  urls: { ... },
  authMode: 'cookie', // Backend sets httpOnly cookies
};
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Providers
│   ├── page.tsx        # Home page with sign-in form
│   └── globals.css     # Global styles
├── components/
│   └── Providers.tsx   # 23blocks provider wrapper
└── lib/
    └── blocks-config.ts # SDK configuration
```

## Learn More

- [23blocks SDK Documentation](https://github.com/23blocks-OS/frontend-sdk)
- [Next.js Documentation](https://nextjs.org/docs)
