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
        <div className="flex flex-col items-center justify-center p-6">
          <p className="mb-4 text-h3 text-destructive">You cannot see this patient data! </p>
          <p className="text-medium">
            Please first <b>add patient</b> to your personal list.
          </p>
          <p className="text-medium">
            Then your get access to his/her personal page from the <b>"Patients" page</b>.
          </p>
        </div>
      )}
    </div>
  );
}
