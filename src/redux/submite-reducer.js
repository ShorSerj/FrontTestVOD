import { validAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false
}

const submiteReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
        return {
            ...state,
            ...action.payload,
        }
        default:
            return state
    }
    
}

export const submit = (number) => {
    async (dispatch) => {
        let response = await validAPI.validNumber(number)
        console.log(response)
        if (response.data.resultCode === 0) {
            dispatch(getUser())
        }else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
}
}

export default submiteReducer