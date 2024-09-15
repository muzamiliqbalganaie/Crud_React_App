import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PostsModule from '../../modules/PostsModule';
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

  const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        getPostsData();  
       
    },[]);

    const getPostsData = () => {
        PostsModule.getAllPosts((response) => {
            if (response.status === "success") {
                console.log(response.data);
                setPosts(response.data);
            } else {
                console.log("somethimg went wrong");
                setPosts([]);
            }
        });
    };
    
    const header = {
      'Content-type': 'application/json; charset=UTF-8',}
  
      function handleDelete(id) { 
      axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`, header)
      .then(() => {
        getPostsData();
        alert("successfully deleted🫡");
        console.log("successfully deleted🫡");   
      })
      .catch((error) => {
        console.log("Error Deleting post:", error);
      })
    }

   const setToLocalStorage = (id,title,body,userId) => {
      localStorage.setItem('id', id);
      localStorage.setItem('title', title);
      localStorage.setItem('body', body);
      localStorage.setItem('userId', userId);

    }

  

    return (
        <>      
 
           <div>
                <Link to={`/createpost`}>
                   <Button sx={{width:'100%',height:'5rem', marginTop:'1rem'}} variant="contained" startIcon={<AddIcon />}>Add Post</Button>
                </Link>

                   <TableContainer
                   component={Paper}
                   variant="elevation"
                 >
                   <Table aria-label="demo table" >
                     <TableHead>
                       <TableRow>
                         <TableCell>PostId</TableCell>
                         <TableCell>Title</TableCell>
                         <TableCell>View</TableCell>
                         <TableCell>Edit</TableCell>
                         <TableCell>Delete</TableCell>
                       </TableRow>
                     </TableHead>
                     {posts.map((post) => {
                        return (
                     <TableBody key={post.id}>
                       <TableRow>
                         <TableCell>{post.id}</TableCell>
                            <TableCell >
                            <Link  to ={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
                               {post.title}
                            </Link>
                            </TableCell>
                         <TableCell>
                         <Link to ={`/post/${post.id}`}>
                           <Button  variant="contained" startIcon={<VisibilityIcon/>}/>
                         </Link>
                         </TableCell>
                         <TableCell>
                           <Link to ={`/updatepost`}>
                            <Button  
                               variant="contained" 
                               startIcon={<EditIcon/>} 
                               onClick={() =>
                                 setToLocalStorage(
                                  post.id,
                                  post.title,
                                  post.body,
                                  post.userId,
                                )}/>
                           </Link>
                          </TableCell>
                         <TableCell>
                           <Button 
                              variant="contained"
                              onClick={() => handleDelete(post.id)} 
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

export default Posts;