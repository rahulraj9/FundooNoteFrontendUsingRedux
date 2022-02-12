import {SignInAction} from '../constants/loginConstant'

export const signIn = (response) =>{
    return {
        type:SignInAction.LOGIN,
        payload:response
    }
}