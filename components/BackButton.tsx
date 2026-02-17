'use client';

import { SquareArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <button className="p-5 hover:cursor-pointer" onClick={() => window.history.back()}>
      <SquareArrowLeft size={45} strokeWidth={1.5} color="var(--color-primary)" />
    </button>
  );
}
