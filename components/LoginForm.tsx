'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { User, SquareAsterisk } from 'lucide-react';

export function LoginForm() {
  return (
    <Card className="w-[70%] md:w-[60%] lg:w-[55%]">
      <CardHeader>
        <CardTitle className="text-center text-h2">Login</CardTitle>
        <CardDescription className="pb-4 text-center">Please fill in the form below to log in to your doctor's account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">
                <User size={20} color="var(--color-primary)" strokeWidth={2.25} />
                User name
              </FieldLabel>
              <Input id="form-name" placeholder="Enter your user name" required />
            </Field>

            <Field>
              <FieldLabel htmlFor="form-password">
                <SquareAsterisk size={20} color="var(--color-primary)" strokeWidth={2.25} />
                Password
              </FieldLabel>
              <Input id="form-password" placeholder="Enter your password" required />
            </Field>

            <Field orientation="horizontal" className="justify-between">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Reset
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
