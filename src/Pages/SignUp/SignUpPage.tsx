import SignUpForm from "../../Components/SignUpForm";
import { Grid, Typography } from "@mui/material";
import LowerLogo from "../../Components/LowerLogo";
import { FieldValues, useForm } from "react-hook-form";

const SignUpPage = () => {
  // const hidden = useMediaQuery<Theme>((theme) => {
  //   return theme.breakpoints?.up("sm");
  // })

  const { reset } = useForm();

  const handleSubmit = (data: FieldValues) => {
    const newData = {
      ...data,
      // country: selectedCountry?.name.common,
      // phone: phone,
      // timeZone: selectedTimeZone
    };

    console.log(newData);
    reset();
  };

  return (
    <>
      <Grid container >
        <Grid item xs={12} sm={12} md={8} >
          {/* <Box bgcolor={"secondary.main"} sx={{ height: "100vh" }}></Box> */}
          <SignUpForm onSubmit={handleSubmit} />
          <Typography textAlign={"center"} mt={3} gutterBottom>
            Terms and Conditions Privacy Policy
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          md={4}
          bgcolor={"primary.main"}
          // height={"100vh"}
        >
          <LowerLogo />
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpPage;












