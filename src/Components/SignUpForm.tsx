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
import useAdmin, { FormFields } from "../Custom hooks/useAdmin";
import { Country } from "../Custom hooks/useCountries";
import { VisibilityOff, Visibility } from "@mui/icons-material";

// const Responsive = styled("div")(({ theme }) => ({
//   [theme.breakpoints.up("sm")]: {
//     bgcolor: "secondary.light",
//     margin: "10px, auto",
//     paddingTop: "3rem",
//     paddingRight: "15rem",
//     paddingLeft: "15rem",

//     textAlign: "center",
//     // maxWidth: 450,
//     // margin: "0 auto",
//     // padding: "20px 5px"
//     // display: "block",
//   },
// }));



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
}

const SignUpForm = ({ onSubmit }: Props) => {
  //out going state from the form
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState<string | null>(null);
  const [phone, setPhone] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  //incoming state from admin
  const [companyName, setCompanyName] = useState("SocialRepeat");
  const [formFields, setFormFields] = useState<FormFields | null>(null);

  // const onSubmit = (data:FieldValues) => {

  //   const newData = {
  //     ...data,
  //     country: selectedCountry?.name.common,
  //     phone: phone,
  //     timeZone: selectedTimeZone
  //   }
  //   setFormData(newData)

  //   // console.log(newData);
  //   reset()

  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
  });

  const handleSelectCountry = (country: Country | null) => {
    setSelectedCountry(country);
  };

  const handleSelectTimezone = (timeZone: string | null) => {
    setSelectedTimeZone(timeZone);
  };

  const handlePhone = (event: string) => {
    setPhone(event);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { adminData } = useAdmin();

  
    // const Responsive = styled("div")(({ theme }) => ({
    
    //   [theme.breakpoints.up("sm")]: {
    //     bgcolor: "secondary.light",
    //     margin: "10px auto",
    //     paddingTop: "3rem",
    //     paddingRight: "15rem",
    //     paddingLeft: "15rem",
        
    //     textAlign: "center",
      
    //     // maxWidth: 450,
    //     // margin: "0 auto",
    //     // padding: "20px 5px"
    //     // display: "block",
    //   },
    // }));

  

  return (
    <Container>
      <ImageLogo />
      {/* //adjust marginTop for the vertical positioning of the form */}
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        {adminData.map((data) => (
          <Box
            sx={{
              margin: "2px auto",
              paddingTop: data.formPositioning === "up" ? "0rem" : "7rem",
              // ${({ click }) => (click ? 0 : "-100%")};
              paddingRight: data.formPositioning === "left" ? "30rem" : "4rem",
              paddingLeft: data.formPositioning === "right" ? "30rem": "4rem",
            }}
          >
            <>
              <Typography
                variant="h5"
                fontWeight={"bold"}
                marginBottom={2}
                gutterBottom
              >
                {`Sign up to ${companyName}`}
              </Typography>
              <Stack spacing={4}>
                {data.formFields.fullName && (
                  <TextField
                    {...register("fullname", { required: true })}
                    sx={{
                      "& .MuiInputBase-root": {
                        borderRadius: data.borderRadius,
                      },
                    }}
                    id="fullname"
                    type="text"
                    label="Fullname"
                    error={errors.fullname?.type === "required"}
                    helperText={
                      errors.fullname?.type === "required"
                        ? "fullname cannot be empty"
                        : ""
                    }
                  />
                )}
                {data.formFields.firstNameLastName && (
                  <Stack direction="row" spacing={2}>
                    <TextField
                      {...register("firstName", { required: true })}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: data.borderRadius,
                        },
                      }}
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      fullWidth
                      label="First Name"
                      error={errors.firstName?.type === "required"}
                      helperText={
                        errors.firstName?.type === "required"
                          ? "First name cannot be empty"
                          : ""
                      }
                    />

                    <TextField
                      {...register("lastName", { required: true })}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: data.borderRadius,
                        },
                      }}
                      id="lastName"
                      fullWidth
                      label="Last Name"
                      error={errors.lastName?.type === "required"}
                      helperText={
                        errors.lastName?.type === "required"
                          ? "Last name cannot be empty"
                          : ""
                      }
                    />
                  </Stack>
                )}
                <Stack spacing={4}>
                  {data.formFields.email && (
                    <TextField
                      {...register("email", { required: true })}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: data.borderRadius,
                        },
                      }}
                      id="email"
                      type="email"
                      label="E-mail"
                      error={errors.email?.type === "required"}
                      helperText={
                        errors.email?.type === "required"
                          ? "email cannot be empty"
                          : ""
                      }
                    />
                  )}

                  {data.formFields.password && (
                    <FormControl sx={{ m: 1 }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        {...register("password", { required: true })}
                        sx={{
                          "& .MuiInputBase-root": {
                            borderRadius: data.borderRadius,
                          },
                        }}
                        id="password"
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
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  )}

                  {data.formFields.companyName && (
                    <TextField
                      {...register("companyName", { required: true })}
                      sx={{
                        "& .MuiInputBase-root": {
                          borderRadius: data.borderRadius,
                        },
                      }}
                      id="companyName"
                      label="Company name"
                      error={errors.companyName?.type === "required"}
                      helperText={
                        errors.companyName?.type === "required"
                          ? "Company name cannot be empty"
                          : ""
                      }
                    />
                  )}
                </Stack>
                <CountryPhoneTimezone
                  onSelectCountry={handleSelectCountry}
                  selectedCountry={selectedCountry}
                  onSelectTimezone={handleSelectTimezone}
                  onCopyPhone={handlePhone}
                />

                <Stack spacing={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    data-testid="signupButton"
                  >
                    Sign up
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    data-testid="loginButton"
                  >
                    Back to Login
                  </Button>
                </Stack>
              </Stack>
            </>
          </Box>
        ))}
      </form>
    </Container>
  );
};

export default SignUpForm;
