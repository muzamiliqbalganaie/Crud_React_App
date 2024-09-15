import axios from "axios";
//  const header = {
//      'Content-type': 'application/json; charset=UTF-8',}

 class PostsModule{

   
getAllPosts = (callback) => {
    axios
    .get("http://jsonplaceholder.typicode.com/posts/")
    .then((response) => {
        console.log(response.data);
        callback({ status:"success", data: response.data});
    })
    .catch((error) => {
        console.log(error);
        callback({status: "error"});
    });
};

getPostsById = (id,callback) => {
    axios
    .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
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
    axios.delete(`http://jsonplaceholder.typicode.com/posts/${id}`)
};
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new PostsModule();
