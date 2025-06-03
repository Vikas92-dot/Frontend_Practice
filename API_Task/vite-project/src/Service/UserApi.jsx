import axiosInstance from "../Helper/AxiosInstance";
import apiPath from "./apiPath";


//User List
const list =({page})=>{
    const users = axiosInstance.get(`${apiPath.user.USER_LIST}?pageNumber=${page}&pageSize=10`);
    return users;
}

//User Details
const show =({id})=>{
    const result = axiosInstance.get(`${apiPath.user.USER_DETAILS}/${id}`);
    return result;
}

//Delete User
const Delete =({id})=>{
    const result = axiosInstance.delete(`${apiPath.user.DELETE_USER}/${id}`)
    return result;
}
//Edit User
const update =({id,name,email,password})=>{
    const status = axiosInstance.put(`${apiPath.user.EDIT_USER}/${id}`,{name,email,password})
    return status;
}

const userService ={
    list:list,
    show:show,
    update:update,
    delete:Delete
} 
export default userService;