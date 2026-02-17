import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { NotebookTabs, GraduationCap, BriefcaseBusiness, Coins, CreditCard, CircleUserRound, BookUser, Building } from 'lucide-react';

import type { DetailedUserResponse } from '@/types/types';
import { getAge } from '@/lib/utils';

interface StyledDataCardProps {
  dataType: string;
  dataTitle: string;
  userData: DetailedUserResponse;
}

function getCardIcon(dataType: string) {
  switch (dataType) {
    case 'main_data':
      return <BookUser size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'account_data':
      return <CircleUserRound size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'other_data':
      return <BookUser size={20} strokeWidth={2.25} color="var(--color-muted-foreground)" />;
    case 'pref_contacts':
      return <NotebookTabs size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'other_contacts':
      return <NotebookTabs size={20} strokeWidth={2.25} color="var(--color-muted-foreground)" />;
    case 'experience':
      return <BriefcaseBusiness size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'job_data':
      return <Building size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'occupation':
      return <BriefcaseBusiness size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'education':
      return <GraduationCap size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'bank':
      return <CreditCard size={20} strokeWidth={2.25} color="var(--color-primary)" />;
    case 'crypto':
      return <Coins size={20} strokeWidth={2.25} color="var(--color-primary)" />;
  }
}

function getCardContent(dataType: string, userData: DetailedUserResponse) {
  switch (dataType) {
    case 'main_data':
      return (
        <>
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
        </>
      );

    case 'account_data':
      return (
        <>
          <p>ID:</p>
          <p className="mb-3 text-medium text-foreground">{userData.id}</p>
          <p>Username:</p>
          <p className="mb-3 text-medium text-foreground">{userData.username}</p>
          <p>Password:</p>
          <p className="mb-3 text-medium text-foreground">{userData.password}</p>
          <p>IP-address:</p>
          <p className="text-medium text-foreground">{userData.ip}</p>
        </>
      );

    case 'other_data':
      return (
        <>
          <p>Group of blood:</p>
          <p className="mb-3 text-medium text-foreground">{userData.bloodGroup}</p>
          <p>Height:</p>
          <p className="mb-3 text-medium text-foreground">{userData.height} cm</p>
          <p>Weight:</p>
          <p className="text-medium text-foreground">{userData.weight} kg</p>
        </>
      );

    case 'pref_contacts':
      return (
        <>
          <p>Phone:</p>
          <p className="mb-3 text-medium text-foreground">{userData.phone}</p>
          <p>E-mail:</p>
          <div className="mb-3 flex flex-row flex-wrap items-center">
            <p className="text-medium text-foreground">{userData.email.split('@')[0]}</p>
            <p className="text-medium text-foreground">@{userData.email.split('@')[1]}</p>
          </div>
        </>
      );

    case 'other_contacts':
      return (
        <>
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
        </>
      );

    case 'job_data':
    case 'experience':
      return (
        <>
          <p>Company name:</p>
          <p className="mb-3 text-medium text-foreground">{userData.company.name}</p>
          <p>Company address:</p>
          <p className="text-medium text-foreground">
            {userData.company.address.address}, <br /> {userData.company.address.city}, {userData.company.address.state} (
            {userData.company.address.stateCode}) {userData.company.address.postalCode} <br /> {userData.company.address.country}
          </p>
        </>
      );

    case 'occupation':
      return (
        <>
          <p>Department:</p>
          <p className="mb-3 text-medium text-foreground">{userData.company.department}</p>
          <p>Position:</p>
          <p className="mb-3 text-medium text-foreground">{userData.company.title}</p>
        </>
      );

    case 'education':
      return (
        <>
          <p>University:</p>
          <p className="text-medium text-foreground">{userData.university}</p>
        </>
      );

    case 'bank':
      return (
        <>
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
        </>
      );

    case 'crypto':
      return (
        <>
          <p>Coin type:</p>
          <p className="mb-3 text-medium text-foreground">{userData.crypto.coin}</p>
          <p>Network:</p>
          <p className="text-medium text-foreground">{userData.crypto.network}</p>
        </>
      );
  }
}

export default function StyledDataCard({ dataType, dataTitle, userData }: StyledDataCardProps) {
  const cardIcon = getCardIcon(dataType);
  const cardContent = getCardContent(dataType, userData);

  return (
    <Card className="w-[47%] max-sm:w-full xl:w-[32%]">
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2">
          {cardIcon} {dataTitle}
        </CardTitle>
        <Separator className="mt-2" />
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{cardContent}</CardContent>
    </Card>
  );
}
