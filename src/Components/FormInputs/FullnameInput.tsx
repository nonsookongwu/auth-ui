import { TextField } from '@mui/material';
import React from 'react'
import { DeepMap, FieldError, FieldErrors, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormData } from '../SignUpForm';

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

const FullnameInput = ({register, name, errors, rules, id, label, type, borderRadius}:Props) => {
  return (
    <TextField
      {...register(name, rules)}
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: {borderRadius},
        },
      }}
      id={id}
      type={type}
      label={label}
      error={errors.fullname?.type === "required"}
      helperText={
        errors.fullname?.type === "required" ? "fullname cannot be empty" : ""
      }
    />
  );
}

export default FullnameInput