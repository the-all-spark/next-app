'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import { User, SquareAsterisk } from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';

export function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { login, error } = useAuth();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData.username, formData.password);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormData({ username: '', password: '' });
  };

  return (
    <Card className="w-[70%] md:w-[60%] lg:w-[55%]">
      <CardHeader>
        <CardTitle className="text-center text-h2">Login</CardTitle>
        <CardDescription className="pb-4 text-center">Please fill in the form below to log in to your doctor's account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">
                <User size={20} color="var(--color-primary)" strokeWidth={2.25} />
                User name *
              </FieldLabel>
              <Input
                id="form-name"
                placeholder="Enter your username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="form-password">
                <SquareAsterisk size={20} color="var(--color-primary)" strokeWidth={2.25} />
                Password *
              </FieldLabel>
              <Input
                id="form-password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </Field>

            {error && <p className="text-center text-destructive">{error}</p>}

            <Field orientation="horizontal" className="justify-between">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button" disabled={formData.username === '' && formData.password === ''} onClick={handleReset}>
                Reset
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
