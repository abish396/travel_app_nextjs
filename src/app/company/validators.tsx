const Validators = {
    name:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["name"] = 'Please Provide Name';
            hasError = true;
        } else {
            delete errors["name"];
        }
        setErrors({...errors});
        return hasError;
    },
    email:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["email"] = 'Please Provide Name';
            hasError = true;
        } else if(!value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            errors["email"] = 'Invalid Email';
            hasError = true;
        } else {
            delete errors["email"];
        }
        setErrors({...errors});
        return hasError;
    },
    owner_name:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["owner_name"] = 'Please Provide Owner Name';
            hasError = true;
        } else {
            delete errors["owner_name"];
        }
        setErrors({...errors});
        return hasError;
    },
    gst_number:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["gst_number"] = 'Please Provide GST Number';
            hasError = true;
        } else {
            delete errors["gst_number"];
        }
        setErrors({...errors});
        return hasError;
    },
    contact:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["contact"] = 'Please Provide Owner Contact';
            hasError = true;
        } else {
            delete errors["contact"];
        }
        setErrors({...errors});
        return hasError;
    },
    address:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["address"] = 'Please Provide Address';
            hasError = true;
        } else {
            delete errors["address"];
        }
        setErrors({...errors});
        return hasError;
    },
    offerings:(value, errors, setErrors) => {
        let hasError= false;
        console.log(!value);
        if(!value) {
            errors["offerings"] = 'Select atleast one offering';
            hasError = true;
        } else {
            delete errors["offerings"];
        }
        setErrors({...errors});
        return hasError;
    }
}

export default Validators;