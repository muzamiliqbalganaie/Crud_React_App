import React, { useEffect } from 'react'
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

const UpdateUser = () => {
  const navigate = useNavigate();
  const [formInputs,setFormInputs] = useState({
    id: 0,
    username:'',
    email:'',
    phone: 0,
    website:'',
  })
  const handelChange = (event) =>{
    // console.log(event.target.value)
    event.preventDefault(); 
    setFormInputs({...formInputs,[event.target.name]:event.target.value})
  };

  useEffect(() => {
    const storedId = localStorage.getItem("id");
  const storedUsername = localStorage.getItem("username");
  const storedEmail = localStorage.getItem("email");
  const storedPhone = localStorage.getItem("phone");
  const storedWebsite = localStorage.getItem("website");

  setFormInputs((prevInputs) => ({
    ...prevInputs,
    id: storedId,
    username: storedUsername,
    email: storedEmail,
    phone: storedPhone,
    website: storedWebsite,
  }));
  },[]);

//coros header for security..!
  // const header = {
  //   'Content-type': 'application/json; charset=UTF-8',}

  function handleUpdate(id) {
    axios.put(`http://jsonplaceholder.typicode.com/users/${id}`,
      {
        username: formInputs.username,
        email:formInputs.email,
        phone:formInputs.phone,
        website:formInputs.website,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
},
    })
    .then((
       alert("User Updated Successfully🫡🫡"),
       console.log("User Updated Successfully🫡"),
       navigate("/users")
    ))
    .catch(( error) =>
    console.error(error))
  }
  return (
    <form onSubmit={handleUpdate} > 
    <div>
      <TextField
             fullWidth 
           variant="standard"
           margin="normal"
           size="small"
           name="username"
           label="Username"
           onChange={handelChange}
           value={formInputs.username} />
    </div>
    <div>
    <TextField
           fullWidth 
           variant="standard"
           margin="normal"
           size="small"
           name="email"
           label="Email"
           onChange={handelChange}
           value={formInputs.email} />
      </div>
    <div>
      <TextField
             fullWidth 
           margin="normal"
           size="small"
           variant="standard"
           name="phone"
           label="Phone"
           onChange={handelChange}
           value={formInputs.phone} />
    
    </div>
    <div>
    <TextField
           fullWidth 
         margin="normal"
         size="small"
         name="website"
         variant="standard"
         label="Website"
         onChange={handelChange}
         value={formInputs.website} />
  
  </div>
    <br/>
    <Button fullWidth variant="contained" type="submit" endIcon={<EditIcon />}>Update Now</Button>
    
    </form>
   
   
  )
}


export default UpdateUser