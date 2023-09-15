import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import useAdmin, { AdminData } from "./Custom hooks/useAdmin";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import { useState } from "react";




// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#016A70",
//     },
//   },
// });

function App() {

  

  const { adminData } = useAdmin();
  
  
  const primary = adminData.reduce((acc, current) => {
    return(current.buttonColor)
  }, '')
  
  const [primaryColor, setPrimaryColor] = useState("#071952");

  // if () {
     
  //    setPrimaryColor(primary.toString());
  //  }
  // const primaryColor = primary;

  // console.log(primary.toString())

  

  const theme = createTheme({
    status: {
      customColor: "#ea7f2d",
    },
    palette: {
      primary: {
        main: primaryColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <SignUpPage />
    </ThemeProvider>
  );
}

export default App;
