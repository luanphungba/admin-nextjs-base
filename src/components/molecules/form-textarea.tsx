'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type FormTextareaProps = {
  name: string;
  label?: string;
  description?: string;
  helperText?: string;
} & React.ComponentProps<'textarea'>;

export function FormTextarea({
  name,
  label,
  description,
  helperText,
  className,
  ...props
}: FormTextareaProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...field}
              {...props}
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
