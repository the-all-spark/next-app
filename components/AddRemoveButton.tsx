'use client';

import { useState, useEffect } from 'react';
import { Square, SquarePlus, SquareMinus } from 'lucide-react';
import { useSelectedUsersStore } from '@/store/use-selected-users-store';

export default function AddRemoveButton({ userId, doctorId }: { userId: number; doctorId: number }) {
  const [hydrated, setHydrated] = useState(false);
  const { addUser, removeUser, isSelected } = useSelectedUsersStore();

  useEffect(() => {
    useSelectedUsersStore.persist.rehydrate();
    setHydrated(true);
  }, []);

  const handleToggle = () => {
    if (isSelected(doctorId, userId)) {
      alert(`REMOVING user with id ${userId}`); //!
      removeUser(doctorId, userId);
    } else {
      alert(`ADDING user with id ${userId}`); //!
      addUser(doctorId, userId);
    }
  };

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
