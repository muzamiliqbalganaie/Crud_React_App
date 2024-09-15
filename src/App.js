import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import StudentsLayout from "./components/StudentsLayout";
import MainLayout from "./components/MainLayout";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser"; 
import Posts from "./pages/Posts/Posts";
import PostsDetails from "./pages/Posts/PostsDetails";
import CreatePost from "./components/Posts/CreatePost";
import UpdatePost from "./components/Posts/UpdatePost"; 


const App = () => {
  
  return(
    <>
    <Routes>
       <Route path="/" element={<MainLayout/>}>
       <Route index element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Profile" element={<Profile/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/users" element={<Users/>}/>
       <Route path="/user/:id" element={<UserDetails/>}/>
       <Route path="/create" element={<CreateUser/>}/>
       <Route path="/update" element={<UpdateUser/>}/>
       <Route path="/createpost" element={<CreatePost/>}/>
       <Route path="/updatepost" element={<UpdatePost/>}/>
       <Route path="/posts" element={<Posts/>}/>
       <Route path="/post/:id" element={<PostsDetails/>}/>
      </Route>   
      
      
      <Route path="/students" element={<StudentsLayout />}>
       <Route index element={<h1>The list of Students will show here</h1>}/>
       <Route path=":id" element={<h2>i am student page</h2>}/>
       <Route path="new" element={<h3>New student will be created on this page</h3>}/>
       </Route>

      <Route path="*" element={<h1>Sorry no Pge Found</h1>}/>
    </Routes>

    <footer style={{ textAlign:"center",fontFamily:"inhert", fontSize:"40px"}}>This website is designed by copywright  &copy;</footer>
  </>
  );
};

export default App;