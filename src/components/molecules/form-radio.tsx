'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type RadioOption = {
  value: string;
  label: string;
};

type FormRadioProps = {
  name: string;
  label?: string;
  description?: string;
  helperText?: string;
  options: RadioOption[];
  className?: string;
};

export function FormRadio({
  name,
  label,
  description,
  helperText,
  options,
  className,
}: FormRadioProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-3">
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn('flex flex-col space-y-1', className)}
            >
              {options.map(option => (
                <FormItem
                  key={option.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {option.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {helperText && <p className="text-sm text-muted-foreground">{helperText}</p>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
