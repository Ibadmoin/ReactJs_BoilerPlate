import React from 'react'
import CustomTable from '../Components/CustomTable'
import { Avatar, Box, Typography , Button} from '@mui/material';
const Admin = () => {
  return (
    <Box>
      <Box className={"flex justify-between items-center"}>
        <Box className={"w-[200px] items-center flex "}>
                <Avatar alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ 
                    width: 56,
                    height: 56,
                    bgcolor: "blue" 
                     }}
                 />
                <Typography sx={{
                    fontSize:"30px",
                    ml:"20px"
                    }}>
                    Students
                </Typography>
            </Box>
        <Box className={"w-[200px]flex ml-4 "}>
             <Button variant="contained">Text</Button>
             </Box>
      </Box>
        <CustomTable/>
    </Box>
  )
}

export default Admin
