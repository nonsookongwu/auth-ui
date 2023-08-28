import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import ImageLogo from "./ImageLogo";
import {FieldValues, useForm} from 'react-hook-form'
import CountryPhoneTimezone from "./CountryPhoneTimezone";
// import { Country } from "../Services/countryData";
import useAdmin, { FormFields } from "../Custom hooks/useAdmin";
import { Country } from "../Custom hooks/useCountries";


const Responsive = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    bgcolor: "secondary.light",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: "5rem",
    paddingRight: "7rem",
    paddingLeft: "7rem",

    // paddingBottom: 0,
    textAlign: "center",
    // maxWidth: 450,
    // margin: "0 auto",
    // padding: "20px 5px"
    // display: "block",
  },
}));

export interface FormData{
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
}

interface Props {
  onSubmit: (data: FieldValues) => void;
}

const SignUpForm = ({onSubmit}:Props) => {

  
  
  //out going state from the form
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState<string | null>(null);
  const [phone, setPhone] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  //incoming state from admin
  const [companyName, setCompanyName] = useState('SocialRepeat')
  const [formFields, setFormFields] = useState<FormFields | null>(null)
  

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

  
  
const [formData, setFormData] = useState<FieldValues>();

  const handleSelectCountry = (country: Country | null) => {
    
    setSelectedCountry(country)
  }

  const handleSelectTimezone = (timeZone: string | null) => {
    setSelectedTimeZone(timeZone)
  }

  const handlePhone = (event: string) => {
    setPhone(event)
  }

  

  const  adminData  = useAdmin()

  
  

  return (
    <Container>
      <ImageLogo />
      {/* //adjust marginTop for the vertical positioning of the form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Responsive>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            marginBottom={2}
            gutterBottom
          >
            {`Sign up to ${companyName}`}
          </Typography>
          <Stack spacing={4}>
            <Stack direction="row" spacing={2}>
              
                <TextField
                  {...register("firstName", { required: true })}
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius:"20px"
                  } }}
                  id="firstName"
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
            <Stack spacing={4}>
              <TextField
                {...register("email", { required: true })}
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
              <TextField
                {...register("companyName", { required: true })}
                id="companyName"
                label="Company name"
                error={errors.companyName?.type === "required"}
                helperText={
                  errors.companyName?.type === "required"
                    ? "Company name cannot be empty"
                    : ""
                }
              />
            </Stack>
            <CountryPhoneTimezone
              onSelectCountry={handleSelectCountry}
              selectedCountry={selectedCountry}
              onSelectTimezone={handleSelectTimezone}
              onCopyPhone={handlePhone}
            />

            <Stack spacing={2}>
              <Button type="submit" variant="contained" size="large" data-testid="button" >
                Sign up
              </Button>
              {/* <Button variant="contained" size="large">
                Back to Login
              </Button> */}
            </Stack>
          </Stack>
        </Responsive>
      </form>
    </Container>
  );
};

export default SignUpForm;
