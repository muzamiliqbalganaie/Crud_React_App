import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackwardIcon from '@mui/icons-material/ArrowBack';


const MainLayout = () => {

    const navigate = useNavigate();
    let authenticated = true
       
           

           const handleClick = () => {
            console.log("Authenticating user...");

            if (authenticated === true) {
                navigate("/users");
            } else {
                navigate("/");
            }
           };

           const handlePosts = () => {
            console.log("Authenticating user...");

            if (authenticated === true) {
                navigate("/Posts");
            } else {
                navigate("/");
            }
           };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  >
        <Toolbar >
        <Button style={{ textDecoration: 'none',marginRight:10 }}color='inherit' variant="outlined"  onClick={handlePosts} startIcon={<ArrowBackwardIcon/>}>Posts</Button>
      
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link style={{ textDecoration: 'none' }} to="/" >Home</Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link  style={{ textDecoration: 'none' }} to="/about">About</Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link  style={{ textDecoration: 'none' }}to="/profile">Profile</Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link  style={{ textDecoration: 'none' }}to="/contact">Contact</Link>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link style={{ textDecoration: 'none' }}to="/users">Users</Link>
           </Typography>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
               <Link style={{ textDecoration: 'none' }}to="/posts">Posts</Link> 
           </Typography>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link style={{ textDecoration: 'none' }}to="/students">Students</Link>
           </Typography>
           <Button color="inherit" variant="outlined"  onClick={handleClick} endIcon={<ArrowForwardIcon/>}>Users</Button>
        </Toolbar>
      </AppBar>
    </Box>
    {/**<nav>
      <ul sx={{ 
         display:"flex",
         justifyContent:"center",
         gap:"30px",
          m : 0,
          p : 0,
          listStyle:"none",
          backgroundColor: '#333',
          overflow:'Hidden',
         }}>
        <li>
           <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
           </li>
        <li>
           <Link to="/profile">Profile</Link>
        </li>
        <li>
           <Link to="/contact">Contact</Link>
        </li>
        <li>
           <Link to="/users">Users</Link>
        </li>
        <li>
           <Link to="/posts">Posts</Link>
        </li>
        <li>
        <Link to="/students">Students</Link>
        </li>
       
      </ul> 
      <div>
        <Button variant="outlined"  onClick={handleClick} endIcon={<ArrowForwardIcon/>}>Users</Button>
        <Button variant="outlined"  onClick={handlePosts} endIcon={<ArrowForwardIcon/>}>Posts</Button>
      </div>
    </nav>**/ }
    <Outlet/>
    
    </>
  );
};

export default MainLayout;