import  {ActionType} from '../constants/Constant'
const initialState = {
    userDetails : ''
}


export const loginReducer = (state=initialState,action) =>{
    switch (action.type) {
        case ActionType.USERLOGINDETAILS:
            console.log('Login Store Data',action.payload);
            return{
                ...state,
                userDetails:action.payload
            }
        default:
            return state;
    }

}