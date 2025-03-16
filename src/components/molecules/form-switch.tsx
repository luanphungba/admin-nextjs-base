'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type FormSwitchProps = {
  name: string;
  label?: string;
  description?: string;
  helperText?: string;
  className?: string;
} & React.ComponentProps<typeof Switch>;

export function FormSwitch({
  name,
  label,
  description,
  helperText,
  className,
  ...props
}: FormSwitchProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center space-x-2">
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                {...props}
                className={cn(className)}
              />
            </FormControl>
            {label && (
              <FormLabel className="text-sm font-normal">
                {label}
              </FormLabel>
            )}
          </div>
          {description && (
            <FormDescription className="mt-1">
              {description}
            </FormDescription>
          )}
          {helperText && (
            <p className="text-sm text-muted-foreground mt-1">
              {helperText}
            </p>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
