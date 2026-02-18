'use client';

import { useState, useEffect } from 'react';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';

import AddRemoveButton from '@/components/AddRemoveButton';
import { SquarePlus, SquareMinus } from 'lucide-react';

import { useSelectedUsersStore } from '@/store/use-selected-users-store';

interface IAddRemoveAlertProps {
  userId: number;
  doctorId: number;
}

export default function AddRemoveAlert({ userId, doctorId }: IAddRemoveAlertProps) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({
    title: '',
    message: '',
  });

  const { addUser, removeUser, isSelected } = useSelectedUsersStore();

  const handleToggle = () => {
    if (isSelected(doctorId, userId)) {
      setContent({
        title: 'Removing user',
        message: `will be removed from your list!`,
      });
      removeUser(doctorId, userId);
    } else {
      setContent({
        title: 'Adding user',
        message: `will be added to your list!`,
      });
      addUser(doctorId, userId);
    }
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <AddRemoveButton userId={userId} doctorId={doctorId} aria-label="Add/Remove user" handleToggle={handleToggle} />
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="size-15 bg-transparent">
            {content.title === 'Removing user' ? (
              <SquareMinus size={50} strokeWidth={1.75} color="var(--color-destructive)" />
            ) : (
              <SquarePlus size={50} strokeWidth={1.5} color="var(--color-primary)" />
            )}
          </AlertDialogMedia>
          <AlertDialogTitle>{content.title}</AlertDialogTitle>
          <AlertDialogDescription>
            User with <b>id {userId}</b> {content.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="default">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
