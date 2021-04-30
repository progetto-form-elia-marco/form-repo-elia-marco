const UTILS= {

    emailValidation: (email) => {

        const control = /^[^A-Z0-9._%+-]+@[^A-Z0-9.-]+\.[^A-Z]{2,3}$/;
        return control.test(email)
    }

}

export default UTILS
