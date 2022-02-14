import { validAPI, submitAPI} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_VALID_USER_DATA = 'SET_VALID_USER_DATA'

let initialState = {
    phoneNumber: null,
    numberIsValid: false,
    messageError: ''
}

const phoneNumberReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                phoneNumber: action.number,
            }
        case SET_VALID_USER_DATA: 
            return {
                ...state,
                numberIsValid: action.validation,
                messageError: action.messageError
            }
        default:
            return state
    }
    
}

export const setPhoneNumber = (number) => ({
    type: SET_USER_DATA,
    number
})

export const setValidPhoneNumber = (validation, messageError) => ({
    type: SET_VALID_USER_DATA,
    validation,
    messageError
})



export const submitData = (phoneNumber) => (dispatch) => {
    if(phoneNumber){
        submitAPI.submit(phoneNumber)
    }
}
export default phoneNumberReducer