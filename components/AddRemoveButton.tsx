'use client';

import { useState, useEffect } from 'react';
import { Square, SquarePlus, SquareMinus } from 'lucide-react';
import { useSelectedUsersStore } from '@/store/use-selected-users-store';

interface IAddRemoveButtonProps {
  userId: number;
  doctorId: number;
  handleToggle: () => void;
}

export default function AddRemoveButton({ userId, doctorId, handleToggle }: IAddRemoveButtonProps) {
  const [hydrated, setHydrated] = useState(false);
  const { isSelected } = useSelectedUsersStore();

  useEffect(() => {
    useSelectedUsersStore.persist.rehydrate();
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <button className="hover:cursor-not-allowed" disabled>
        <Square size={20} strokeWidth={2.25} color="var(--color-muted-foreground)" />
      </button>
    );
  }

  return (
    <button className="hover:cursor-pointer" onClick={handleToggle}>
      {isSelected(doctorId, userId) ? (
        <SquareMinus size={20} strokeWidth={2.25} color="var(--color-destructive)" />
      ) : (
        <SquarePlus size={20} strokeWidth={2.25} color="var(--color-primary)" />
      )}
    </button>
  );
}
