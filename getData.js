import axios from "axios";
import fetch from "node-fetch";

const getData = async (user_id) => {
/*     const getUser = await(
        await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    ).json()
    const getPost = await(
        await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    ).json();

    console.log(getUser);
    console.log(getPost); */
        const {data: getUser} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const {data: getPost} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
        console.log(getUser);
        console.log(getPost);
}


export default getData;