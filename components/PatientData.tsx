'use client';

import { useSelectedUsersStore } from '@/store/use-selected-users-store';
import ProtectedPatientData from '@/components/ProtectedPatientData';

import type { DetailedUserResponse } from '@/types/types';

interface IPatientDataProps {
  doctorId: number;
  patientData: DetailedUserResponse;
}

export default function PatientData({ doctorId, patientData }: IPatientDataProps) {
  const { isSelected } = useSelectedUsersStore();

  return (
    <div>
      {isSelected(doctorId, Number(patientData.id)) ? (
        <>
          <ProtectedPatientData patientData={patientData} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center p-6 text-h3 text-destructive">
          <p>You cannot see this patient data! </p>
          <p>Please first add patient to your personal list.</p>
        </div>
      )}
    </div>
  );
}
