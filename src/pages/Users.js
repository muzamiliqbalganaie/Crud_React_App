import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UsersModule from '../modules/UsersModule';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

  const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        getUsersData();  
       
    },[]);

    const getUsersData = () => {
        UsersModule.getAllUsers((response) => {
            if (response.status === "success") {
                console.log(response.data);
                setUsers(response.data);
            } else {
                console.log("somethimg went wrong");
                setUsers([]);
            }
        });
    };
    
    const header = {
      'Content-type': 'application/json; charset=UTF-8',}
  
      function handleDelete(id) { 
      axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`, header)
      .then(() => {
        getUsersData();
        alert("successfully deleted🫡");
        console.log("successfully deleted🫡");   
      })
      .catch((error) => {
        console.log("Error Deleting User:", error);
      })
    }

    const setToLocalStorage = (id,username,email,phone,website) => {
      localStorage.setItem('id', id);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('phone', phone);
      localStorage.setItem('website', website);

    }


  

    return (
        <>      
 
           <div>
                <Link to={`/create`}>
                   <Button sx={{width:'100%',height:'5rem', marginTop:'1rem'}} variant="contained" startIcon={<AddIcon />}>Add User</Button>
                </Link>

                   <TableContainer
                   component={Paper}
                   variant="elevation"
                 >
                   <Table aria-label="demo table" >
                     <TableHead>
                       <TableRow>
                         <TableCell>UserId</TableCell>
                         <TableCell>UserName</TableCell>
                         <TableCell>View</TableCell>
                         <TableCell>Edit</TableCell>
                         <TableCell>Delete</TableCell>
                       </TableRow>
                     </TableHead>
                     {users.map((user) => {
                        return (
                     <TableBody key={user.id}>
                       <TableRow>
                         <TableCell>{user.id}</TableCell>
                            <TableCell >
                            <Link  to ={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
                               {user.name.slice(0, Math.ceil(user.name.length / 2))}
                            </Link>
                            </TableCell>
                         <TableCell>
                         <Link to ={`/user/${user.id}`}>
                           <Button  variant="contained" startIcon={<VisibilityIcon/>}/>
                         </Link>
                         </TableCell>
                         <TableCell>
                           <Link to ={`/update`}>
                            <Button  
                               variant="contained" 
                               startIcon={<EditIcon/>} 
                               onClick={() =>
                                 setToLocalStorage(
                                  user.id,
                                  user.username,
                                  user.email,
                                  user.phone,
                                  user.website
                                )}/>
                           </Link>
                          </TableCell>
                         <TableCell>
                           <Button 
                              variant="contained"
                              onClick={() => handleDelete(user.id)} 
                              startIcon={<DeleteIcon/>}/>
                         </TableCell>
                       </TableRow>
                     </TableBody>

                    );
                })}
                   </Table>
                 </TableContainer>
                   

                   </div>
           
        </>
  );
};

export default Users;