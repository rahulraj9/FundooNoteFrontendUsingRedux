import axios from 'axios'
import {SignInAction,} from '../constants/loginConstant'

export const setLoginInfo  = (response) =>{
    return {
        type:SignInAction.USERLOGINDETAILS,
        payload:response
    }
}
export const signIn =async (userName,password)=>{
    const loginCred = {
        password:password,
        email : userName
    }
    console.log('login cred',loginCred);
    return axios.post('http://localhost:8000/user/login',loginCred).then(response=>{
        return response        
    }).catch(error=>{
        return error
    })
} 

