import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UsersModule from '../modules/UsersModule.js';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const UserDetails = () => {
  const param =useParams()
  const [userDetails,setUserDetails] = useState(null) //jsx state
  console.log(param.id,"hello")
 
 useEffect(() => {
  getUserById();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

 const getUserById = () => {
  UsersModule.getUserById(param.id,(response) => {
    if (response.status === "success") {
      console.log(response.data);
      setUserDetails(response.data)
    } else {
      console.log("sorry something went wrong");
      setUserDetails(null)
    }
  });
 };



  return (
    <>
    <TableContainer
    component={Paper}
    variant="outlined"
  >
    <Table aria-label="demo table">
      <TableHead>
        <TableRow>
          <TableCell>THE DETAILS OF USER {userDetails!==null && userDetails.name.toUpperCase()} ARE :
            <Link to= {'/update'}>
                <Button  sx={{display:'inline-block',left:'300px'}} variant="outlined" >Edit</Button>
             </Link>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>UserId :</TableCell>
          <TableCell>{userDetails!==null && userDetails.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Name :</TableCell>
          <TableCell>{userDetails!==null && userDetails.name}</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Email :</TableCell>
        <TableCell>{userDetails!==null && userDetails.email}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell>Phone :</TableCell>
      <TableCell>{userDetails!==null && userDetails.phone}</TableCell>
    </TableRow>
    <TableRow>
    <TableCell>Website :</TableCell>
    <TableCell>{userDetails!==null && userDetails.website}</TableCell>
  </TableRow>
      </TableBody>
    </Table>
  </TableContainer>

   
   
    </>

  );
};

export default UserDetails;