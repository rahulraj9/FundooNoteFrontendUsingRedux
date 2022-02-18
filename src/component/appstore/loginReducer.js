import  {SignInAction} from '../constants/loginConstant'
const initialState = {
    userDetails : ''
}
const initialAction = {
    type: "",
    payload: {}
}

export const loginReducer = (state=initialState,action=initialAction) =>{
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