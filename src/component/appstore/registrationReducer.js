import { ActionType } from '../constants/Constant'

const initialState = {
    regUserDetails: ''
}
export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.USERSIGNINDETAILS:
            console.log('Registartion Store Data',action.payload);
            return {
                ...state,
                regUserDetails: action.payload
            }
        default:
            return state;
    }
}