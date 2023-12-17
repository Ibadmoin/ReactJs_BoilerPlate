import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Input } from 'postcss';
import { FaCamera } from "react-icons/fa";
import fallback from "./../assets/images/fallback.png"

export default function CustomModal() {
  return (
    <Box className=''
      component="form"
      sx={{ width:"550px", display:'flex', justifyContent:"center",alignItems:"center",flexDirection:"column"}}
     
      noValidate
      autoComplete="off"
    >
        
        <label htmlFor='img'>
        <Box
        sx={{ borderRadius:"50%",width:"100px",height:"100px", marginBottom:"20px" ,position:"relative"}} 
        >
          <img src= {fallback} className='w-[100%] h-[100%] rounded-[50%]'>
          </img>
            <FaCamera size={30} style={{position:"absolute",bottom:"10px",right:"1px",background:"white",padding:"5px", borderRadius:"50%"}} />


        </Box>

        </label>
            <input id='img' accept="image/*"  placeholder='hdasc' type='file'  style={{width:"100%",height:"100%", alignItems:"center", display:"none"}}/>
     <Box  sx={{ width:"90%", display:"flex",justifyContent:"space-between",marginBottom:"20px" }}>
        
     <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
     </Box>
     <Box  sx={{ width:"90%", display:"flex",justifyContent:"space-between", marginBottom:"20px"}}>
        
     <TextField id="outlined-basic" label="Course" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
     </Box>
     <Box  sx={{ width:"90%", display:"flex",justifyContent:"space-between",marginBottom:"20px" }}>
        
     <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
     </Box>
       
     
    </Box>
  );
}