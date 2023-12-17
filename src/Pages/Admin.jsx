import React from 'react'
import { Avatar, Box, Typography , Button} from '@mui/material';
import CustomTableMui from '../Components/CustomTableMui';
import { students } from '../../utils';

const Admin = () => {
  return (
    <Box>
      <Box className={"flex justify-between items-center m-10"}>
        <Box className={"w-[200px] items-center flex "}>
                <Avatar alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ 
                    width: 56,
                    height: 56
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
             <Button variant="contained">Add Student</Button>
             </Box>
      </Box>
      <CustomTableMui data = {students}/>
    </Box>
  )
}

export default Admin
