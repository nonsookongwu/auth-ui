import React from 'react'

import {
  FieldErrors,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { FormData } from "../SignUpForm";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { VisibilityOff, Visibility } from '@mui/icons-material';

interface Props {
  id: string;
  showPassword: boolean;
  // name: string;
  label: string;
  type: string;
  errors: FieldErrors<FormData>;
  // errors: Partial<DeepMap<FormData, FieldError>>;
  name: Path<FormData>;
  rules: RegisterOptions;
  register: UseFormRegister<FormData>;
  borderRadius: string;
  onClick: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PasswordInput = ({
  register,
  name,
  errors,
  rules,
  id,
  label,
  type,
    borderRadius,
  showPassword, onMouseDown, onClick
}: Props) => {
  return (
    <FormControl sx={{ m: 1 }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        {...register(name, rules)}
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: borderRadius,
          },
        }}
        id={id}
        type={showPassword ? "text" : "password"}
        fullWidth
        error={errors.password?.type === "required"}
        // helperText={
        //   errors.password?.type === "required"
        //     ? "password cannot be empty"
        //     : ""
        // }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClick}
              onMouseDown={onMouseDown}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};

export default PasswordInput