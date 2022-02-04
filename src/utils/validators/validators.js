export const required = value => {
    if (value) return undefined
    return "Field is required"
}

export const phoneNumber = value =>
value && !/^(0|[1-9][0-9]{9})$/i.test(value)
  ? 'Invalid phone number, must be 10 digits'
  : undefined
