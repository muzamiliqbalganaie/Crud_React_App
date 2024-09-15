import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
  //uncontroled acess to elements using ref not fetching data during runtime
// const usernameRef = useRef("");
// const emailRef = useRef("");
// const passwordRef = useRef("");

//useState HOOks 
// const [username,setUserName] = useState("hehehe");

// const [email,setEmail] = useState("hahaha");

// const [password,setPassword] = useState("haaahahaha");

//insted of above hooks we can make it simpler

// const header = { "Access-Control-Allow-Origin": "*"};
const navigate = useNavigate();
const [formInputs,setFormInputs] = useState({
  title:'',
  body:'',
  
})

   const handelSubmit = (event) =>{
        event.preventDefault();
        axios
        .post("http://jsonplaceholder.typicode.com/posts", 
            {
                title: formInputs.title,
                body:formInputs.body,
               
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
  },
            })
            .then((
               alert("Post Created Successfully🫡🫡"),
              navigate("/posts")
            ));
          };

    const handelChange = (event) =>{
      // console.log(event.target.value)
      setFormInputs({...formInputs,[event.target.name]:event.target.value})
    };


  return (
    <form onSubmit={handelSubmit} > 
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
    <Button fullWidth variant="contained" type="submit" endIcon={<AddIcon />}>Create New Post</Button>
    
    </form>
   
   
  )
}

export default CreatePost