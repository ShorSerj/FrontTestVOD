import { validAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    phoneNumber: null
}

const phoneNumberReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
        return {
            ...state,
            phoneNumber: action.phoneNumber,
        }
        default:
            return state
    }
    
}

export const setPhoneNumber = (phoneNumber) => ({
    type: SET_USER_DATA,
    phoneNumber
})

export const validNumber = () => {  
    console.log(phoneNumber.value)
    async (dispatch) => {
        console.log('say hello', number, 'asd')
        let response = await validAPI.validNumber(number)
        console.log(response)    
        if (response.data.resultCode === 0) {
            dispatch(setPhoneNumber(number))
        }else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}

// export const submit = (number) => {
//     async (dispatch) => {
//         let response = await validAPI.validNumber(number)
//         console.log(response)
//         if (response.data.resultCode === 0) {
//             dispatch(getUser())
//         }else {
//             let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
//             dispatch(stopSubmit("login", {_error: message}))
//         }
// }
// }

export default phoneNumberReducer