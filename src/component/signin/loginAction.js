import axios from 'axios'
import {ActionType} from '../constants/Constant'


export const setLoginInfo  = (response) =>{
    return {
        type:ActionType.USERLOGINDETAILS,
        payload:response
    }
}
export const signIn = (userName,password,dispatch)=>{
    const loginCred = {
        password:password,
        email : userName
    }
    
    return axios.post('http://localhost:8000/user/login',loginCred).then(response=>{
        setLoginInfo(response)
        localStorage.setItem("fundooUsertoken", response.data.data.token)
        localStorage.setItem("fundooUserFName", response.data.data.firstName)
        localStorage.setItem("fundooUserLName", response.data.data.lastName)
        localStorage.setItem("fundooUserEmail", response.data.data.email)
        dispatch(setLoginInfo(response))
        return response        
    }).catch(error=>{
        return error
    })
} 

