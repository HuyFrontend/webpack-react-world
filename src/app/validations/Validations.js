const validateType = {
    email: 'email',
    required: 'required',
    number: 'number'
}
const emailValidator = (value) => {
    if (!value || value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,8})+$/i)) {
        return null;
    } else {
        return { invalidEmail: true };
    }
}
const requiredValidator = (value) => {
    if (value) {
        return null;
    } else {
        return { required: true };
    }
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