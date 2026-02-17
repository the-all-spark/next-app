import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { getAge } from '@/lib/utils';
import { cookies } from 'next/headers';

import AddRemoveButton from '@/components/AddRemoveButton';
import LinkToDetails from '@/components/LinkToDetails';

interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  phone: string;
}

export default async function PatientsTablePage() {
  const data = await fetch('https://dummyjson.com/users?limit=10');
  const allUsers = await data.json();

  const cookieStore = await cookies();
  let currentUserId = Number(cookieStore.get('current-user-id')?.value);
  console.log(currentUserId); //!

  let filteredUsers = allUsers.users.filter((user: UserResponse) => user.id !== currentUserId);
  filteredUsers.sort((a: UserResponse, b: UserResponse) => a.lastName.localeCompare(b.lastName));
  // console.log(filteredUsers); //!

  return (
    <>
      <h1 className="mt-4 p-8 text-center text-h1 font-bold">Patients</h1>

      <p className="m-auto mb-5 w-[90%] text-small">Your ID: {currentUserId}</p>

      <Table className="m-auto mb-10 w-[90%] rounded-xl border-border bg-card shadow-md">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10 p-6 text-muted-foreground">ID</TableHead>
            <TableHead className="w-35 text-muted-foreground">Name</TableHead>
            <TableHead className="text-muted-foreground">Gender</TableHead>
            <TableHead className="text-muted-foreground">Emergency Contact</TableHead>
            <TableHead className="text-muted-foreground">Details</TableHead>
            <TableHead className="text-muted-foreground">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user: UserResponse) => (
            <TableRow key={user.id}>
              <TableCell className="p-6 font-medium">{user.id}</TableCell>
              <TableCell>
                <p>
                  {user.lastName} {user.firstName}
                </p>
                <p className="text-muted-foreground"> ({getAge(user.birthDate)} years old)</p>
              </TableCell>
              <TableCell>{user.gender === 'female' ? 'F' : 'M'}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <LinkToDetails userId={user.id} doctorId={currentUserId} />
              </TableCell>
              <TableCell className="text-center">
                <AddRemoveButton userId={user.id} doctorId={currentUserId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
