import SignUpForm from "../../Components/SignUpForm";
import { Box, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import LowerLogo from "../../Components/LowerLogo";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { Country } from "../../Custom hooks/useCountries";
import useAdmin from "../../Custom hooks/useAdmin";

const SignUpPage = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState<string | null>(null);
  const [phone, setPhone] = useState("");

  const handleSelectCountry = (country: Country | null) => {
    setSelectedCountry(country);
    // console.log(selectedCountry);
  };

  const handleSelectTimezone = (timeZone: string | null) => {
    setSelectedTimeZone(timeZone);
    // console.log(selectedTimeZone);
  };

  const handlePhone = (event: string) => {
    setPhone(event);
    // console.log(phone);
  };

  const {adminData, loading, error} = useAdmin()
  

  const { reset } = useForm();

  const handleSubmit = (data: FieldValues) => {
    const newData = {
      ...data,
      country: selectedCountry?.name.common,
      phone: phone,
      timeZone: selectedTimeZone
    };

    console.log(newData);
    reset();
  };

  

  return (
    <>
      {loading && (
        <Box sx={{  margin: "auto" }}>
          <CircularProgress color="primary" />
        </Box>
        
      )}
      {adminData.map((data) => (
        <Grid container >
          <Grid item xs={12} sm={12} md={8}>
            {/* <Box bgcolor={"secondary.main"} sx={{ height: "100vh" }}></Box> */}
            <SignUpForm
              selectedCountry={selectedCountry}
              onCountry={handleSelectCountry}
              onPhone={handlePhone}
              onTimezone={handleSelectTimezone}
              onSubmit={handleSubmit}
              layoutData={data}
            />
            <Typography textAlign={"center"} mt={3} gutterBottom>
              Terms and Conditions Privacy Policy
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            md={4}
            bgcolor={data.buttonColor}
            height={"100%"}
          >
            <LowerLogo />
          </Grid>
          ;
        </Grid>
      ))}
    </>
  );
};

export default SignUpPage;
