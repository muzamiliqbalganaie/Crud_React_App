import React, { useEffect } from 'react'
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';

const UpdatePost = () => {
  const navigate = useNavigate();
  const [formInputs,setFormInputs] = useState({
    id: 0,
    title:'',
    body:'',
  })
  const handelChange = (event) =>{
    // console.log(event.target.value)
    event.preventDefault(); 
    setFormInputs({...formInputs,[event.target.name]:event.target.value})
  };

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedTitle = localStorage.getItem("title");
    const storedBody = localStorage.getItem("body");
  
  setFormInputs((prevInputs) => ({
    ...prevInputs,
    id: storedId,
    title: storedTitle,
    body: storedBody,
  }));
  },[]);

//coros header for security..!
//   const header = {
//     'Content-type': 'application/json; charset=UTF-8',}

  function handleUpdate(id) {
    axios.put(`http://jsonplaceholder.typicode.com/posts/${id}`,
      {
        title: formInputs.title,
        body: formInputs.body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
},
    })
    .then((
       alert("Post Updated Successfully🫡🫡"),
       console.log("Post Updated Successfully🫡"),
       navigate("/posts")
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
  name="title"
  label="Title"
  multiline
  maxRows={1}
  onChange={handelChange}
  value={formInputs.title} />
</div>
<div>
<TextField
  fullWidth 
  variant="standard"
  margin="normal"
  size="small"
  name="body"
  label="Body"
  multiline
  maxRows={6}
  onChange={handelChange}
  value={formInputs.body} />
</div>
    <br/>
    <Button fullWidth variant="contained" type="submit" endIcon={<EditIcon />}>Update Now</Button>
    
    </form>
   
   
  )
}


export default UpdatePost