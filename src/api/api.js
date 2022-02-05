import * as axios from 'axios'

export const validAPI = {
    validNumber(number) {
        console.log('umbrella')
        return axios.get(
            `http://apilayer.net/api/validate? access_key=b4df3ac00139f8619e0c01a27b10c0e0&number=${number}&country_code=RU&format=1`
          )
    }
}