import { cookies } from 'next/headers';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { NotebookTabs, GraduationCap, BriefcaseBusiness, Coins, CreditCard, CircleUserRound, BookUser } from 'lucide-react';

import { getAge } from '@/lib/utils';

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access-token');

  // get authenticated user data
  const data = await fetch('https://dummyjson.com/user/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken?.value}`,
    },
    cache: 'force-cache',
  });

  const userData = await data.json();

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
              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <BookUser size={20} strokeWidth={2.25} color="var(--color-primary)" /> Main data
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>First name:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.firstName}</p>
                  <p>Last name:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.lastName}</p>

                  {userData.gender === 'female' && userData.maidenName !== '' ? (
                    <>
                      <p>Maiden name:</p>
                      <p className="mb-3 text-medium text-foreground">{userData.maidenName}</p>
                    </>
                  ) : null}

                  <p>Gender:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.gender}</p>
                  <p>Birth (age):</p>
                  <p className="text-medium text-foreground">
                    {userData.birthDate} ({getAge(userData.birthDate)} years old)
                  </p>
                </CardContent>
              </Card>

              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <CircleUserRound size={20} strokeWidth={2.25} color="var(--color-primary)" /> Account data
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>ID:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.id}</p>
                  <p>Username:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.username}</p>
                  <p>Password:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.password}</p>
                  <p>IP-address:</p>
                  <p className="text-medium text-foreground">{userData.ip}</p>
                </CardContent>
              </Card>

              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <BookUser size={20} strokeWidth={2.25} color="var(--color-muted-foreground)" /> Other data
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Group of blood:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.bloodGroup}</p>
                  <p>Height:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.height} cm</p>
                  <p>Weight:</p>
                  <p className="text-medium text-foreground">{userData.weight} kg</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Contacts */}
            <TabsContent value="contacts" className="flex flex-row flex-wrap gap-4">
              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <NotebookTabs size={20} strokeWidth={2.25} color="var(--color-primary)" /> Contacts (preferred)
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Phone:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.phone}</p>
                  <p>E-mail:</p>
                  <div className="mb-3 flex flex-row flex-wrap items-center">
                    <p className="text-medium text-foreground">{userData.email.split('@')[0]}</p>
                    <p className="text-medium text-foreground">@{userData.email.split('@')[1]}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <NotebookTabs size={20} strokeWidth={2.25} color="var(--color-muted-foreground)" /> Contacts (others)
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Address:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.address.address}</p>
                  <p>City:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.address.city}</p>
                  <p>Country:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.address.country}</p>
                  <p>State (State code):</p>
                  <p className="mb-3 text-medium text-foreground">
                    {userData.address.state} ({userData.address.stateCode})
                  </p>
                  <p>Postal code:</p>
                  <p className="text-medium text-foreground">{userData.address.postalCode}</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education and Experience */}
            <TabsContent value="education_experience" className="flex flex-row flex-wrap gap-4">
              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <GraduationCap size={20} strokeWidth={2.25} color="var(--color-primary)" /> Education
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>University:</p>
                  <p className="text-medium text-foreground">{userData.university}</p>
                </CardContent>
              </Card>

              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <BriefcaseBusiness size={20} strokeWidth={2.25} color="var(--color-primary)" /> Experience
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Company name:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.company.name}</p>
                  <p>Company address:</p>
                  <p className="text-medium text-foreground">
                    {userData.company.address.address}, <br /> {userData.company.address.city}, {userData.company.address.state} (
                    {userData.company.address.stateCode}) {userData.company.address.postalCode} <br /> {userData.company.address.country}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Financial data */}
            <TabsContent value="finance" className="flex flex-row flex-wrap gap-4">
              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <CreditCard size={20} strokeWidth={2.25} color="var(--color-primary)" /> Bank account
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Card Number:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.bank.cardNumber}</p>
                  <p>Card Type:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.bank.cardType}</p>
                  <p>Expired date:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.bank.cardExpire}</p>
                  <p>Currency:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.bank.currency}</p>
                  <p>IBAN:</p>
                  <p className="text-small text-foreground">{userData.bank.iban}</p>
                </CardContent>
              </Card>

              <Card className="w-[47%] xl:w-[32%]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-2">
                    <Coins size={20} strokeWidth={2.25} color="var(--color-primary)" /> Crypto data
                  </CardTitle>
                  <Separator className="mt-2" />
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>Coin type:</p>
                  <p className="mb-3 text-medium text-foreground">{userData.crypto.coin}</p>
                  <p>Network:</p>
                  <p className="text-medium text-foreground">{userData.crypto.network}</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}
