import axios from 'axios'
import {ActionType} from '../constants/Constant'

export const setRegistrationInfo = (response) =>{
    return{
        type:ActionType.USERSIGNINDETAILS,
        payload:response
    }
}
export const registartion = async (firstname, lastname, email, password,dispatch)=>{
    const registartionCred = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,

    }
    console.log('regcred',registartionCred);
    return axios.post('http://localhost:8000/user/registration',registartionCred).then(response=>{
        dispatch(setRegistrationInfo(response))
        return response
 
    }).catch(error=>{
        return error
    })
}