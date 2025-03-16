'use client';

import { FormInput } from '@/components/molecules/form-input';
import { Icon } from '@/components/molecules/icon';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Pages } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { IconType } from '@/types/icon';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations('LoginForm');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError(t('errors.invalidCredentials'));
        return;
      }

      router.push(Pages.Dashboard);
      router.refresh();
    } catch (error) {
      console.error('Login error:', error);
      setError(t('errors.generic'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{t('title')}</CardTitle>
          <CardDescription>
            {t('subtitle')}
          </CardDescription>
          {error && (
            <p className="text-sm text-red-500 mt-2">{error}</p>
          )}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="flex flex-col gap-4">
                  <Button variant="outline" className="w-full">
                    <Icon type={IconType.APPLE} />
                    {t('appleButton')}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon type={IconType.GOOGLE} />
                    {t('googleButton')}
                  </Button>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-background text-muted-foreground relative z-10 px-2">
                    {t('dividerText')}
                  </span>
                </div>
                <div className="grid gap-6">
                  <FormInput
                    name="email"
                    label={t('emailLabel')}
                    type="email"
                    placeholder={t('emailPlaceholder')}
                  />
                  <div className="grid gap-3">
                    <div className="flex items-center">
                      <Label htmlFor="password">{t('passwordLabel')}</Label>
                      <a
                        href={Pages.ForgotPassword}
                        className="ml-auto text-sm underline-offset-4 hover:underline"
                      >
                        {t('forgotPassword')}
                      </a>
                    </div>
                    <FormInput
                      name="password"
                      type="password"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    loading={isLoading}
                  >
                    {t('loginButton')}
                  </Button>
                </div>
                <div className="text-center text-sm">
                  {t('noAccount')}
                  {' '}
                  <a href={Pages.SignUp} className="underline underline-offset-4">
                    {t('signUpLink')}
                  </a>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        {t('termsText')}
        {' '}
        <a href={Pages.Terms}>{t('termsLink')}</a>
        {' '}
        {t('andText')}
        {' '}
        <a href={Pages.Privacy}>{t('privacyLink')}</a>
        .
      </div>
    </div>
  );
}
