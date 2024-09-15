import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostsModule from '../../modules/PostsModule.js';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const PostsDetails = () => {
  const param =useParams()
  const [postsDetails,setPostsDetails] = useState(null) //jsx state
  console.log(param.id,"hello")
 
 useEffect(() => {
  getPostById();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);

 const getPostById = () => {
  PostsModule.getPostsById(param.id,(response) => {
    if (response.status === "success") {
      console.log(response.data);
      setPostsDetails(response.data)
    } else {
      console.log("sorry something went wrong");
      setPostsDetails(null)
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
          <TableCell>Post Details Are :
               <Link to= {'/updatepost'}>
                  <Button  sx={{display:'inline-block',left:'200px'}} variant="outlined" >Edit Post</Button>
               </Link>
             </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>PostId :</TableCell>
          <TableCell>{postsDetails!==null && postsDetails.id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Title:</TableCell>
          <TableCell>{postsDetails!==null && postsDetails.title}</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Body :</TableCell>
        <TableCell>{postsDetails!==null && postsDetails.body}</TableCell>
      </TableRow>
      <TableRow>
      <TableCell> UserId:</TableCell>
      <TableCell>{postsDetails!==null && postsDetails.userId}</TableCell>
    </TableRow>
      </TableBody>
    </Table>
  </TableContainer>

   
   
    </>

  );
};

export default PostsDetails;