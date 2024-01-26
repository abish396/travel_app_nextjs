import { useState } from "react";
import { object } from "zod";



const validators = {
    name:(value, errors, setErrors) => {
        const nextErrors = { ...errors };
        let hasError= false;
        if(!value) {
            nextErrors["name"] = 'Please Provide Name';
            hasError = true;
        } else {
            delete nextErrors["name"];
        }
        setErrors(nextErrors);
        return hasError;
    },
    duration:(value) => {
        const nextErrors = { ...errors };
        let hasError= false;
        if(!value) {
            nextErrors["duration"] = 'Please Provide Duration';
            hasError = true;
        } else {
            delete nextErrors["duration"];
        }
        setErrors(nextErrors);
        return hasError;
    },
    difficulty:(value) => {
        const nextErrors = { ...errors };
        let hasError= false;
        if(!value) {
            nextErrors["difficulty"] = 'Please Provide Difficulty';
            hasError = true;
        } else {
            delete nextErrors["difficulty"];
        }
        setErrors(nextErrors);
        return hasError;
    },
    distance:(value) => {
        const nextErrors = { ...errors };
        let hasError= false;
        if(!value) {
            nextErrors["distance"] = 'Please Provide Distance';
            hasError = true;
        } else {
            delete nextErrors["distance"];
        }
        setErrors(nextErrors);
        return hasError;
    },
    description:(value) => {
        const nextErrors = { ...errors };
        let hasError= false;
        if(!value) {
            nextErrors["description"] = 'Please Provide Description';
            hasError = true;
        } else {
            nextErrors["description"] = ''
        }
        setErrors(nextErrors);
        return hasError;
    }
}

const useForm = (context, setContext) => {
    //Form values
    

    const [formValues, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});

    const handleChange = (name, value) => {
    
        const hasError = validators[name](value, errors, setErrors);
        if(hasError) {
            return;
        }
        // formValues[name] = value;
        //Let's set these values in state
        /* console.log(context, name, value);
        context[name] = value;
        setContext(context);
        console.log(context); */
        setValues({
            ...values,   //spread operator to store old values
            [name]:value,
        })
    
    }


    const handleSubmit = (activeStep, lastStep, next) => {
        if(Object.keys(errors).length === 0) {
            return;
        }
        setContext({...context, ...values});
        
    }

    return {
        formValues,
        errors,
        handleChange,
        handleSubmit
    }
};

export default useForm;