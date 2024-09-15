import { Button, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateUser = () => {
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
  username:'',
  email:'',
  phone:'',
  website:'',
})

    const handelSubmit = (event) =>{
        event.preventDefault();
        axios
        .post("http://jsonplaceholder.typicode.com/users", 
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
               alert("User Created Successfully🫡🫡"),
              navigate("/users")
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
    <Button fullWidth variant="contained" type="submit" endIcon={<AddIcon />}>Create New User</Button>
    
    </form>
   
   
  )
}

export default CreateUser