'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  name: string;
  label?: string;
  description?: string;
  helperText?: string;
} & React.ComponentProps<'input'>;

export function FormInput({
  name,
  label,
  description,
  helperText,
  className,
  type = 'text',
  ...props
}: FormInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              {...props}
              type={type}
              value={field.value ?? ''}
              className={cn(
                error && 'aria-invalid:true',
                className,
              )}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {helperText && <p className="text-sm text-muted-foreground">{helperText}</p>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
