'use client';

import { FormCheckbox } from '@/components/molecules/form-checkbox';
import { FormCombobox } from '@/components/molecules/form-combobox';
import { FormDatePicker } from '@/components/molecules/form-datepicker';
import { FormDropdown } from '@/components/molecules/form-dropdown';
import { FormInput } from '@/components/molecules/form-input';
import { FormRadio } from '@/components/molecules/form-radio';
import { FormSwitch } from '@/components/molecules/form-switch';
import { FormTextarea } from '@/components/molecules/form-textarea';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Define form schema
const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  birthDate: z.date({
    required_error: 'Please select a date',
  }),
  country: z.string({
    required_error: 'Please select a country',
  }),
  bio: z.string().min(10, 'Bio must be at least 10 characters').max(160, 'Bio must not be longer than 160 characters'),
  notificationType: z.enum(['all', 'mentions', 'none'], {
    required_error: 'Please select a notification type',
  }),
  newsletter: z.boolean().default(false),
  language: z.string({
    required_error: 'Please select a language',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ExampleForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      country: '',
      bio: '',
      notificationType: 'all',
      newsletter: false,
      language: '',
    },
  });

  const countryOptions = [
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Canada', value: 'ca' },
    { label: 'Australia', value: 'au' },
  ];

  const notificationOptions = [
    { label: 'All new messages', value: 'all' },
    { label: 'Direct messages and mentions', value: 'mentions' },
    { label: 'Nothing', value: 'none' },
  ];

  const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    // ...more options
  ];

  const onSubmit = (data: FormValues) => {
    console.warn(data);
    // Handle form submission
  };

  return (
    <div className="w-full max-w-xl space-y-6 mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <FormInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <FormCombobox
            name="language"
            label="Language"
            description="Select your preferred language"
            options={languageOptions}
            placeholder="Select language"
            searchPlaceholder="Search language..."
          />

          <FormDatePicker
            name="birthDate"
            label="Birth Date"
            placeholder="Select your birth date"
          />

          <FormDropdown
            name="country"
            label="Country"
            placeholder="Select your country"
            options={countryOptions}
            className="w-full"
          />

          <FormTextarea
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself"
            description="Share a brief description about yourself"
          />

          <FormRadio
            name="notificationType"
            label="Notification Preferences"
            description="Choose how you want to be notified"
            options={notificationOptions}
          />

          <FormSwitch
            name="newsletter"
            label="Newsletter Subscription"
            description="Receive our weekly newsletter with updates and special offers"
          />

          <FormCheckbox
            name="acceptTerms"
            label="I accept the terms and conditions"
            description="Please read our terms before accepting"
          />

          <Button type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
