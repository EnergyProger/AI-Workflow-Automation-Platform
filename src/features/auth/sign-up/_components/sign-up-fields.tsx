"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/features/auth/_shared/password-input";
import { signUpSchemaType } from "@/schema/sign-up";
import { UseFormReturn, useFormState } from "react-hook-form";

interface Props {
  form: UseFormReturn<signUpSchemaType>;
  isPending: boolean;
}

export const SignUpFields = ({ form, isPending }: Props) => {
  const { errors } = useFormState({ control: form.control });

  return (
    <FieldGroup>
      <Field data-invalid={!!errors.email}>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email..."
          disabled={isPending}
          aria-invalid={!!errors.email}
          {...form.register("email")}
        />
        <FieldError>{errors.email?.message}</FieldError>
      </Field>
      <Field data-invalid={!!errors.password}>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <PasswordInput
          id="password"
          placeholder="Enter your password..."
          disabled={isPending}
          aria-invalid={!!errors.password}
          {...form.register("password")}
        />
        <FieldError>{errors.password?.message}</FieldError>
      </Field>
      <Field data-invalid={!!errors.confirmPassword}>
        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
        <PasswordInput
          id="confirmPassword"
          placeholder="Confirm your password..."
          disabled={isPending}
          aria-invalid={!!errors.confirmPassword}
          {...form.register("confirmPassword")}
        />
        <FieldError>{errors.confirmPassword?.message}</FieldError>
      </Field>
    </FieldGroup>
  );
};
