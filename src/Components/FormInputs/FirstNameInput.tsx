import React from 'react'
import { FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormData } from '../SignUpForm';
import { TextField } from '@mui/material';

interface Props {
  id: string;
  // name: string;
  label: string;
  type: string;
  errors: FieldErrors<FormData>;
  // errors: Partial<DeepMap<FormData, FieldError>>;
  name: Path<FormData>;
  rules: RegisterOptions;
  register: UseFormRegister<FormData>;
  borderRadius: string;
}

const FirstNameInput = ({register, name, errors, rules, id, label, type, borderRadius}:Props) => {
  return (
    <TextField
      {...register(name, rules)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: borderRadius,
        },
      }}
          type={type}
      id={id}
      fullWidth
      label={label}
      error={errors.firstName?.type === "required"}
      helperText={
        errors.firstName?.type === "required"
          ? "First name cannot be empty"
          : ""
      }
    />
  );
}

export default FirstNameInput