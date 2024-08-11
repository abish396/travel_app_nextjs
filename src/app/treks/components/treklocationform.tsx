"use client"
import { useEffect, useContext } from "react";
import { Button } from "@/components/ui/button"
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
import { TrekFormContext } from '../create/context';
import useForm from "../create/hooks/useform";
import { TreksApi } from "../../../services";

const TrekLocationFormSchema = {
  addressLine1:"",
  addressLine2:"",
  state:"",
  pincode:"",
}

const TrekLocationForm = ({activeStep, setActiveStep}) => {
  const { trekFormInfo, setTrekFormInfo, errors, setErrorsInContext } = useContext(TrekFormContext);
  const { handleChange, handleSubmit } = useForm(trekFormInfo, setTrekFormInfo, errors, setErrorsInContext, TrekLocationFormSchema);
  console.log("TrekLocationForm", {trekFormInfo})
  
  const handleNext = () => {
    handleSubmit(activeStep, 2, setActiveStep, TreksApi.create);
    // setActiveStep(activeStep + 1);
  }

  const handlePrevious = () => {
    // handleSubmit(activeStep, 0, setActiveStep);
    if(activeStep >= 0) {
      setErrorsInContext({})
      setActiveStep(activeStep - 1);
    }
    
  }

  const handleInputChange = (e) => {
    // console.log({e});
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // console.log({name, value})
    handleChange(name, value);
  }

  const handleSelectChange = (name:string,value:any) => {
    // console.log({name, value});
    /* trekFormInfo[name] = value;
    // console.log({trekFormInfo})
    setTrekFormInfo(trekFormInfo); */
    handleChange(name, value);
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>Trek Location</CardTitle>
        {/* <CardDescription>
          What area are you having problems with?
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="address1">Address Line 1</Label>
          <Input id="addressLine1" name="addressLine1" value={trekFormInfo.addressLine1 || ""} onChange={handleInputChange} type="text"/>
          { errors && errors.addressLine1 ? <p className="text-red-700">{errors.addressLine1}</p> : ""}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address2">Address Line 2</Label>
          <Input id="addressLine2" name="addressLine2" value={trekFormInfo.addressLine2 || ""} onChange={handleInputChange} type="text"/>
          { errors && errors.addressLine2 ? <p className="text-red-700">{errors.addressLine2}</p> : ""}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="state">State</Label>
            <Select name="state" value={trekFormInfo.state} onValueChange={(value) => handleSelectChange("state", value)}>
              <SelectTrigger id="state">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="Uttrakhand">Uttrakhand</SelectItem>
                <SelectItem value="Sikkim">Sikkim</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
              </SelectContent>
            </Select>
            { errors && errors.state ? <p className="text-red-700">{errors.state}</p> : ""}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pincode">Pin Code</Label>
            <Input id="pincode" name="pincode" value={trekFormInfo.pincode || ""} onChange={handleInputChange} type="text"/>
            { errors && errors.pincode ? <p className="text-red-700">{errors.pincode}</p> : ""}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <StepFormActionButton previous={handlePrevious} next={handleNext}/>
      </CardFooter>
    </Card>
  )
}

export default TrekLocationForm;