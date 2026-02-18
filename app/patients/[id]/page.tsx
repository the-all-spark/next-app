import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PatientData from '@/components/PatientData';
import BackButton from '@/components/BackButton';

import { getAuthenticatedUser } from '@/lib/data';

export default async function PatientDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const doctorData = await getAuthenticatedUser();
  let doctorId = doctorData.id;

  const data = await fetch(`https://dummyjson.com/users/${id}`);
  const patientData = await data.json();

  return (
    <>
      <BackButton />

      <h1 className="p-8 pt-2 text-center text-h1 font-bold">Patient details (ID: {id})</h1>

      <Card className="m-auto mb-10 w-[90%] md:w-[80%] xl:w-[85%]">
        <CardHeader className="flex flex-row items-center gap-4">
          <CardDescription className="text-left">
            <p>
              Doctor ID: <b>{doctorId}</b>
            </p>
            <p>
              Doctor name:{' '}
              <b>
                {doctorData.firstName} {doctorData.lastName}
              </b>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PatientData doctorId={doctorId} patientData={patientData} />
        </CardContent>
      </Card>
    </>
  );
}
