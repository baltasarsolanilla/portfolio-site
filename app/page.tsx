'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Button onClick={onClick}>Click me mate! {count}</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="default">Default</Button>
        <Button variant="default" size="sm">
          Default
        </Button>
        <Button variant="default" size="lg">
          Default
        </Button>
      </main>
    </div>
  );
}
