import  {SignInAction} from '../constants/loginConstant'
const initialState = {
    userDetails : ''
}

export const loginReducer = (state=initialState,action) =>{
    switch (action.type) {
        case SignInAction.USERLOGINDETAILS:
            return{
                ...state,
                userDetails:action.payload
            }
        default:
            return state;
    }

}