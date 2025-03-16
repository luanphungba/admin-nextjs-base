'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

type Option = {
  label: string;
  value: string;
};

type FormDropdownProps = {
  name: string;
  label?: string;
  description?: string;
  helperText?: string;
  placeholder?: string;
  options: Option[];
  className?: string;
};

export function FormDropdown({
  name,
  label,
  description,
  helperText,
  placeholder,
  options,
  className,
}: FormDropdownProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          {helperText && <p className="text-sm text-muted-foreground">{helperText}</p>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
