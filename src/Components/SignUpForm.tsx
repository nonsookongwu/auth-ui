import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import ImageLogo from "./ImageLogo";
import { FieldValues, useForm } from "react-hook-form";
import CountryPhoneTimezone from "./CountryPhoneTimezone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import useAdmin, { AdminData, FormFields } from "../Custom hooks/useAdmin";
import { Country } from "../Custom hooks/useCountries";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import FullnameInput from "./FormInputs/FullnameInput";
import FirstNameInput from "./FormInputs/FirstNameInput";
import LastNameInput from "./FormInputs/LastNameInput";
import EmailInput from "./FormInputs/EmailInput";
import PasswordInput from "./FormInputs/PasswordInput";
import CompanyNameInput from "./FormInputs/CompanyNameInput";


export interface FormData {
  fullname: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
}

interface Props {
  onSubmit: (data: FieldValues) => void;

  layoutData: AdminData;
  onCountry: (country: Country | null) => void;
  selectedCountry: Country | null;
  onTimezone: (timeZone: string | null) => void;
  onPhone: (event: string) => void;
}


const SignUpForm = ({ onSubmit, onCountry, onPhone, onTimezone, selectedCountry, layoutData }: Props) => {
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  


  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   companyName: "",
  // });


//for password input
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };





  

  return (
    <Container>
      <ImageLogo />
      {/* //adjust marginTop for the vertical positioning of the form */}
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            margin: "2px auto",
            paddingTop: layoutData.formPositioning === "up" ? "0rem" : "7rem",
            paddingRight:
              layoutData.formPositioning === "left" ? "25rem" : "5rem",
            paddingLeft:
              layoutData.formPositioning === "right" ? "25rem" : "5rem",
          }}
        >
          <>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              marginBottom={2}
              gutterBottom
            >
              {`Sign up to Company Name`}
            </Typography>

            <Stack spacing={4}>
              {layoutData.formFields.fullName && (
                <FullnameInput
                  id="fullname"
                  label="Full Name"
                  type="text"
                  errors={errors}
                  name="fullname"
                  register={register}
                  rules={{ required: true }}
                  borderRadius={layoutData.borderRadius}
                />
              )}
              {layoutData.formFields.firstNameLastName && (
                <Stack direction="row" spacing={2}>
                  <FirstNameInput
                    id="firstname"
                    label="First Name"
                    type="text"
                    errors={errors}
                    name="firstName"
                    register={register}
                    rules={{ required: true }}
                    borderRadius={layoutData.borderRadius}
                  />

                  <LastNameInput
                    id="lastname"
                    label="Last Name"
                    type="text"
                    errors={errors}
                    name="lastName"
                    register={register}
                    rules={{ required: true }}
                    borderRadius={layoutData.borderRadius}
                  />
                </Stack>
              )}
              <Stack spacing={4}>
                {layoutData.formFields.email && (
                  <EmailInput
                    id="email"
                    label="E-mail"
                    type="email"
                    errors={errors}
                    name="email"
                    register={register}
                    rules={{ required: true }}
                    borderRadius={layoutData.borderRadius}
                  />
                )}

                {layoutData.formFields.password && (
                  <PasswordInput
                    id="password"
                    label="Password"
                    type="password"
                    errors={errors}
                    name="password"
                    register={register}
                    rules={{ required: true }}
                    borderRadius={layoutData.borderRadius}
                    showPassword={showPassword}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  />
                )}

                {layoutData.formFields.companyName && (
                  <CompanyNameInput
                    id="companyname"
                    label="Company Name"
                    type="text"
                    errors={errors}
                    name="companyName"
                    register={register}
                    rules={{ required: true }}
                    borderRadius={layoutData.borderRadius}
                  />
                )}
              </Stack>
              <CountryPhoneTimezone
                onSelectCountry={onCountry}
                selectedCountry={selectedCountry}
                onSelectTimezone={onTimezone}
                onCopyPhone={onPhone}
                layoutData={layoutData}
              />

              <Stack spacing={2}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  data-testid="signupButton"
                  // color= "primary"
                  sx={{
                    bgcolor: layoutData.buttonColor,
                  }}
                >
                  Sign up
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  data-testid="loginButton"
                  sx={{
                    bgcolor: layoutData.buttonColor,
                  }}
                >
                  Back to Login
                </Button>
              </Stack>
            </Stack>
          </>
        </Box>
      </form>
    </Container>
  );
};

export default SignUpForm;
