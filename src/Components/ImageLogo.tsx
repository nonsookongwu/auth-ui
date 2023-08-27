import { Box } from '@mui/material'
import logo from '../assets/sr-logo.png'



const ImageLogo = () => {
  return (
    <Box
      component={"img"}
      src={logo}
      sx={{
        width: 250,
        height: 50,
        objectFit: "contain",
          marginTop: 5,
          marginLeft: 3,
          
      }}
        sizes='large'  
    />
  );
}

export default ImageLogo