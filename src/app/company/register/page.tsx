"use client"
import { useState, useEffect, useContext } from "react";
import StepForm from '@/components/stepform/stepform';
import CompanyDataForm from "../components/companydataform";
import CompanyOfferingsForm from "../components/companyofferings";
import { CompanyFormContext } from '../../../context';

const CompanyRegisterForm = () => {
  const [companyRegisterFormInfo, setCompanyRegisterForm] = useState({});

  const [errors, setErrorsInContext] = useState({});
  return (
    <CompanyFormContext.Provider value={{ companyRegisterFormInfo, setCompanyRegisterForm, errors, setErrorsInContext }}>
      <StepForm>
      <CompanyOfferingsForm />
        <CompanyDataForm />
        
        
      </StepForm>
    </CompanyFormContext.Provider>

  )
}

export default CompanyRegisterForm;