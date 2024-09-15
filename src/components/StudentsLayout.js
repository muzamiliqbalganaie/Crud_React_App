import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const StudentsLayout = () => {
  return (
    <>
    <nav>
    <ul style={{ display:"flex",justifyContent:"center",gap:"30px"}}>
    <li>
       <Link to="/student/1">student 1</Link>
    </li>
    <li>
    <Link to="/student/2">Student 2</Link>
       </li>
    <li>
       <Link to="/student/3">Student 3</Link>
    </li>
    <li>
       <Link to="/student/4">Student 4</Link>
    </li>
    <li>
       <Link to="/student/5">Student 5</Link>
    </li>
  </ul>
  </nav>

  <Outlet />

    </>
  )
}

export default StudentsLayout