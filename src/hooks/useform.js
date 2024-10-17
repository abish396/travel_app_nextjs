import { useState } from "react";
import { object } from "zod";



/* const validators = {
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
    duration:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["duration"] = 'Please Provide Duration';
            hasError = true;
        } else {
            delete errors["duration"];
        }
        setErrors({...errors});
        return hasError;
    },
    difficulty:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["difficulty"] = 'Please Provide Difficulty';
            hasError = true;
        } else {
            delete errors["difficulty"];
        }
        setErrors({...errors});
        return hasError;
    },
    distance:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["distance"] = 'Please Provide Distance';
            hasError = true;
        } else {
            delete errors["distance"];
        }
        setErrors({...errors});
        return hasError;
    },
    description:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["description"] = 'Please Provide Description';
            hasError = true;
        } else {
            delete errors["description"];
        }
        setErrors({...errors});
        return hasError;
    },
    addressLine1:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["addressLine1"] = 'Please Provide addressLine1';
            hasError = true;
        } else {
            delete errors["addressLine1"];
        }
        setErrors({...errors});
        return hasError;
    },
    addressLine2:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["addressLine2"] = 'Please Provide addressLine2';
            hasError = true;
        } else {
            delete errors["addressLine2"];
        }
        setErrors({...errors});
        return hasError;
    },
    state:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["state"] = 'Please Provide state';
            hasError = true;
        } else {
            delete errors["state"];
        }
        setErrors({...errors});
        return hasError;
    },
    pincode:(value, errors, setErrors) => {
        let hasError= false;
        if(!value) {
            errors["pincode"] = 'Please Provide pincode';
            hasError = true;
        } else {
            delete errors["pincode"];
        }
        setErrors({...errors});
        return hasError;
    }
} */

const useForm = (context, setContext, errors, setErrorsInContext, formSchema, validators) => {
    //Form values
    // console.log({formSchema})

    // const [formValues, setValues] = useState({});
    //Errors
    // const [errors, setErrors] = useState({});
    // const formValues = {}
    const handleChange = (name, value) => {
        
        const hasError = validators[name](value, errors, setErrorsInContext);
        console.log({hasError});
        /* if(hasError) {
            return;
        } */
        // formValues[name] = value;
        //Let's set these values in state
        /* console.log(context, name, value);
        
        console.log(context); */
        formSchema[name] = value;
        context[name] = value;
        setContext(context);
        /* console.log({formValues});
        setValues({
            ...formValues,   //spread operator to store old values
            [name]:value,
        }) */
    
    }


    const handleSubmit = (activeStep, lastStep, next, submitFrom = '') => {
        for(let key in formSchema) {
            // console.log("formSchema[key]", context, key);
            // if(formSchema[key])
                validators[key](context[key], errors, setErrorsInContext);
        }
        // console.log({errors});
        if(Object.keys(errors).length) {
            return;
        }
        // setContext({...context, ...formValues});
        // console.log({activeStep, lastStep})
        if(activeStep < (lastStep - 1)) {
            next(activeStep + 1);
        } else {
            submitFrom(context)
        }
    }

    return {
        handleChange,
        handleSubmit
    }
};

export default useForm;