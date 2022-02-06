import * as axios from 'axios'

export const validAPI = {
    validNumber(number) {
        return axios.get(
            `http://apilayer.net/api/validate?access_key=8b36cd410fb2e5c25db4252ae6bb265f&number=${number}&country_code=RU&format=1`
          )
    }
}

export const submitAPI = {
    submit(number) {
        let status = {}
        return status.code = 200
    }
}