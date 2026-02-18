'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StyledDataCard from '@/components/StyledDataCard';

import type { DetailedUserResponse } from '@/types/types';

export default function ProtectedPatientData({ patientData }: { patientData: DetailedUserResponse }) {
  return (
    <div className="text-medium">
      <Tabs defaultValue="personal" className="w-full gap-4">
        <TabsList variant="line" className="max-sm:h-auto max-sm:flex-wrap">
          <TabsTrigger value="personal">Personal data</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="job">Job data</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="flex flex-row flex-wrap gap-4">
          {/* Personal data */}
          <StyledDataCard dataType="main_data" dataTitle="Main data" userData={patientData} />
          <StyledDataCard dataType="other_data" dataTitle="Other data" userData={patientData} />
        </TabsContent>

        {/* Contacts */}
        <TabsContent value="contacts" className="flex flex-row flex-wrap gap-4">
          <StyledDataCard dataType="pref_contacts" dataTitle="Contacts (preferred)" userData={patientData} />
          <StyledDataCard dataType="other_contacts" dataTitle="Contacts (others)" userData={patientData} />
        </TabsContent>

        {/* Job data */}
        <TabsContent value="job" className="flex flex-row flex-wrap gap-4">
          <StyledDataCard dataType="job_data" dataTitle="Job data" userData={patientData} />
          <StyledDataCard dataType="occupation" dataTitle="Occupation" userData={patientData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
