import React from 'react'
import { Link } from 'react-router-dom'


   export function CreateUser() {
        return(
           <Link
             href="../components/CreateUser.js" >
             <span>Create User</span>
           </Link>
        );
    }

   export function UpdateUser({ id }) {
        return(
            <Link
            href="../components/UpdateUser.js" >
            <span>Create User</span>
          </Link>
        )
    }
  