'use client';

import { accountData } from '@/data/global-data';
import { useState } from 'react';

export default function ClientComponentPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>
        Contador: {count}
        <pre>{JSON.stringify(accountData, null, 2)}</pre>
      </div>
    </div>
  );
}
