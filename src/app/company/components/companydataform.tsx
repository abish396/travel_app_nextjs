"use client"
import { useEffect, useContext } from "react";
// import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import StepFormActionButton from '@/components/stepform/stepformactionbutton';
import useForm from "../../../hooks/useform";
import { CompanyFormContext } from "../../../context";
import Validators from '../validators';

const CompanyDataFormSchema = {
  name: "",
  owner_name: "",
  gst_number: "",
  contact: "",
  address: "",
}


const CompanyDataForm = ({ activeStep, setActiveStep }) => {
  // console.log({CompanyFormContext})
  const { companyRegisterFormInfo, setCompanyRegisterForm, errors, setErrorsInContext } = useContext(CompanyFormContext);
  // console.log({companyRegisterFormInfo, errors})
  const { handleChange, handleSubmit } = useForm(companyRegisterFormInfo, setCompanyRegisterForm, errors, setErrorsInContext, CompanyDataFormSchema, Validators);
  // console.log({form})

  // console.log({companyFormInfo})
  /* useEffect(() => {
    // console.log(companyFormInfo, setCompanyFormInfo)
  }, []) */

  const handleNext = () => {
    handleSubmit(activeStep, 2, setActiveStep);
    // setActiveStep(activeStep + 1);
  }

  const handlePrevious = () => {
    // handleSubmit(activeStep, 0, setActiveStep);
    if (activeStep >= 0) {
      setActiveStep(activeStep - 1);
    }

  }

  const handleInputChange = (e:any) => {
    // console.log({e});
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log({name, value})
    handleChange(name, value);
  }

  const handleSelectChange = (name: string, value: any) => {
    // console.log({name, value});
    /* companyFormInfo[name] = value;
    // console.log({companyFormInfo})
    setCompanyFormInfo(companyFormInfo); */
    handleChange(name, value);
  }
  
  return (
    <div className="sm:container sm:mx-auto">
      <Card className="sm:mx-auto w-1/2">
        <CardHeader>
          <CardTitle>Register Your Company</CardTitle>
          {/* <CardDescription>
          What area are you having problems with?
        </CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={companyRegisterFormInfo?.name || ""} placeholder="Ex ABC Adventures" onChange={handleInputChange} />
            {errors && errors.name ? <p className="text-red-700">{errors.name}</p> : ""}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Owner Name</Label>
            <Input id="owner_name" name="owner_name" value={companyRegisterFormInfo?.owner_name || ""} onChange={handleInputChange} />
            {errors && errors.owner_name ? <p className="text-red-700">{errors.owner_name}</p> : ""}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Email</Label>
            <Input id="email" name="email" value={companyRegisterFormInfo?.email || ""} onChange={handleInputChange} />
            {errors && errors.email ? <p className="text-red-700">{errors.email}</p> : ""}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gst_number">GST Number</Label>
            <Input id="gst_number" name="gst_number" value={companyRegisterFormInfo?.gst_number || ""} placeholder="GSTIN202010" onChange={handleInputChange} />
            {errors && errors.gst_number ? <p className="text-red-700">{errors.gst_number}</p> : ""}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input id="trekname" type="number" name="contact" value={companyRegisterFormInfo?.contact || ""} placeholder="Ex 1234567890" onChange={handleInputChange} />
            {errors && errors.contact ? <p className="text-red-700">{errors.contact}</p> : ""}
          </div>
          {/* <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="I need help with..." />
        </div> */}
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              name="address"
              value={companyRegisterFormInfo?.address}
              id="address"
              placeholder="Ex Manali, Himachal Pradesh"
              onChange={handleInputChange}
            />
            {errors && errors.address ? <p className="text-red-700">{errors.address}</p> : ""}
          </div>
        </CardContent>
        <CardFooter className="justify-evenly space-x-2">
          <StepFormActionButton previous={handlePrevious} next={handleNext} />
        </CardFooter>
      </Card>
    </div>

  )
}

export default CompanyDataForm;