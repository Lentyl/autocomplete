import axios from "axios";

export const  GET_DATA = 'AUTOCOMPLETE';

export const getAutoData = () => {

    return async dispatch =>{

       await axios
        .get(`https://jsonplaceholder.typicode.com/users`, {})
        .then((res) => {

        const usersname =  res.data.map(user=>user.username)
           
        dispatch({
            type: GET_DATA,
            payload: usersname
        }
        )
    
        })
        .catch((err) => console.log(err));
    }
  

}