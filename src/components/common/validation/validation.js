import { validAPI} from "../../../api/api.js"

export const validNumber = (phoneNumber) => {
    if(phoneNumber){
        validAPI.validNumber(phoneNumber).then(response => { 
            let answer = {
                valid: false,
                message: ''
            }
            if(response.data.valid) {
                answer.valid = true
                return answer
            }else {
                switch (response.data.error?.code) {
                    case 104 : 
                            message = "Достигнут месячный лимит к API по бесплатной подписке";
                            break;
                    case 106 : 
                            message = "Подождите, слишком много запросов к API по бесплатной подписке";
                            break;
                    default:
                        return answer = {valid: false,  message: "Неверно введён номер"}
                }
                return answer = {valid: true, message: message}
            }
        })
    
    }
    
}