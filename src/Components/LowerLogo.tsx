import React from 'react'
import logo from "../assets/Group.png";
import { Box, Stack } from '@mui/material';

const LowerLogo = () => {
    return (
      <Stack direction={"column"} alignItems={"flex-end"} >
        <Box
          component={"img"}
          src={logo}
          sx={{
            marginTop: '49.5rem',
            marginRight: 3,
            marginBottom: 2,
              position: 'relative'
          }}
          sizes="small"
        />
      </Stack>
    );
}

export default LowerLogo