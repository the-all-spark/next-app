import { LoginForm } from '@/components/LoginForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MainPage() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <h1 className="p-6 text-center text-h1 font-bold">Welcome to HCare!</h1>

      <div className="flex w-[80%] flex-row justify-between gap-4 md:gap-8 lg:w-[70%] xl:w-[50%]">
        <LoginForm />

        <Card className="h-[55%] w-[45%] md:h-[50%] lg:w-[40%]">
          <CardHeader>
            <CardTitle className="mb-2">Demo credentials</CardTitle>
            <CardDescription>Use the following credentials to test the system</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <b>Username</b>: emilys
            </p>
            <p>
              <b>Password</b>: emilyspass
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
