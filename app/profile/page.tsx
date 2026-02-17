import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { getAuthenticatedUser } from '@/lib/data';
import StyledDataCard from '@/components/StyledDataCard';

export default async function ProfilePage() {
  const userData = await getAuthenticatedUser();

  return (
    <>
      <h1 className="mt-4 p-8 text-center text-h1 font-bold">Personal Profile</h1>

      <Card className="m-auto mb-10 w-[90%] md:w-[80%] xl:w-[85%]">
        <CardHeader className="flex flex-row items-center gap-4">
          <img src={userData.image} alt="User photo" className="h-15 w-15 rounded-full border-3 p-px" />
          <div>
            <CardTitle className="text-left text-h2">
              {userData.firstName} {userData.lastName}
            </CardTitle>
            <CardDescription className="text-left">Doctor</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="personal" className="w-full gap-4">
            <TabsList variant="line" className="max-sm:h-auto max-sm:flex-wrap">
              <TabsTrigger value="personal">Personal data</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="education_experience">Education and Experience</TabsTrigger>
              <TabsTrigger value="finance">Financial data</TabsTrigger>
            </TabsList>

            {/* Personal data */}
            <TabsContent value="personal" className="flex flex-row flex-wrap gap-4">
              <StyledDataCard dataType="main_data" dataTitle="Main data" userData={userData} />
              <StyledDataCard dataType="account_data" dataTitle="Account data" userData={userData} />
              <StyledDataCard dataType="other_data" dataTitle="Other data" userData={userData} />
            </TabsContent>

            {/* Contacts */}
            <TabsContent value="contacts" className="flex flex-row flex-wrap gap-4">
              <StyledDataCard dataType="pref_contacts" dataTitle="Contacts (preferred)" userData={userData} />
              <StyledDataCard dataType="other_contacts" dataTitle="Contacts (others)" userData={userData} />
            </TabsContent>

            {/* Education and Experience */}
            <TabsContent value="education_experience" className="flex flex-row flex-wrap gap-4">
              <StyledDataCard dataType="education" dataTitle="Education" userData={userData} />
              <StyledDataCard dataType="experience" dataTitle="Experience" userData={userData} />
            </TabsContent>

            {/* Financial data */}
            <TabsContent value="finance" className="flex flex-row flex-wrap gap-4">
              <StyledDataCard dataType="bank" dataTitle="Bank account" userData={userData} />
              <StyledDataCard dataType="crypto" dataTitle="Crypto data" userData={userData} />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}
