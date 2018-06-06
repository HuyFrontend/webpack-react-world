const validateType = {
    email: 'email',
    required: 'required',
    number: 'number'
}
const emailValidator = (value) => {
    if (!value || value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,8})+$/i)) {
        return null;
    } else {
        return { invalid: true, type: 'email' };
    }
}
const requiredValidator = (value) => {
    if (value) {
        return null;
    } else {
        return { invalid: true, type: 'required' };
    }
}
const messageInvalid = (invalidType) => {
    const message = {
        required: `This field is required`,
        email: `Email is wrong format`
    };
    return message[invalidType];
}
const valid = (type, value) => {
    switch(type) {
        case validateType.email:
            return emailValidator(value);
            break;
        case validateType.required:
            return requiredValidator(value);
            break;
        default:
            return null;
    }
}
const Validations = {
    valid
}
export default Validations;