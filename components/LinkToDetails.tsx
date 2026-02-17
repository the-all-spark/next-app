'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { useSelectedUsersStore } from '@/store/use-selected-users-store';

export default function LinkToDetails({ userId, doctorId }: { userId: number; doctorId: number }) {
  const { isSelected } = useSelectedUsersStore();

  return (
    <Link href={`/patients/${userId}`}>
      {isSelected(doctorId, userId) && <ExternalLink size={20} strokeWidth={2.25} color="var(--color-primary)" />}
    </Link>
  );
}
