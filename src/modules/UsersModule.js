import axios from "axios";
//  const header = {
//      'Content-type': 'application/json; charset=UTF-8',}

class UsersModule{

   
getAllUsers = (callback) => {
    axios
    .get("http://jsonplaceholder.typicode.com/users/")
    .then((response) => {
        console.log(response.data);
        callback({ status:"success", data: response.data});
    })
    .catch((error) => {
        console.log(error);
        callback({status: "error"});
    });
};

getUserById = (id,callback) => {
    axios
    .get(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
        console.log(response.data);
        callback({ status:"success", data: response.data});
    })
    
    .catch((error) => {
        console.log(error);
        callback({status: "error"});
    });
};

createUser = () => {
    
};

deleteUserById = (id) => {
    axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
};
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UsersModule();