"use client"
import { useEffect, useContext } from "react";
// import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea"
import StepFormActionButton from '@/components/stepform/stepformactionbutton';
import { TrekFormContext } from '../context';
import useForm from "../hooks/useform";
import { Exo_2 } from "next/font/google";

const TrekDataForm = ({activeStep, setActiveStep}) => {
  const { trekFormInfo, setTrekFormInfo } = useContext(TrekFormContext);
  const { handleChange, values, errors, handleSubmit } = useForm(trekFormInfo, setTrekFormInfo);
  // console.log({form})
  
  console.log({trekFormInfo})
  useEffect(() => {
    // console.log(trekFormInfo, setTrekFormInfo)
  }, [])

  const handleNext = () => {
    handleSubmit(activeStep, 2, setActiveStep);
    // setActiveStep(activeStep + 1);
  }

  const handlePrevious = () => {
    // handleSubmit(activeStep, 0, setActiveStep);
    if(activeStep >= 0) {
      setActiveStep(activeStep - 1);
    }
    
  }

  const handleInputChange = (e) => {
    // console.log({e});
    const name = e.target.name;
    const value = e.target.value;
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
        <CardTitle>Create a new trek</CardTitle>
        {/* <CardDescription>
          What area are you having problems with?
        </CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="subject">Name of The Trek</Label>
          <Input id="trekname" name="name" placeholder="Ex KedarKantha Trek" onChange={handleInputChange}/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">Duration</Label>
            <Select name="duration" defaultValue="billing" onValueChange={(value) => handleSelectChange("duration", value)}>
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2 days">1-2 days</SelectItem>
                <SelectItem value="2-3 days">2-3 days</SelectItem>
                <SelectItem value="3-4 days">3-4 days</SelectItem>
                <SelectItem value="4-5 days">4-5 days</SelectItem>
                <SelectItem value="5-6 days">5-6 days</SelectItem>
                <SelectItem value="6-7 days">6-7 days</SelectItem>
                <SelectItem value="7-8 days">7-8 days</SelectItem>
                <SelectItem value="8-9 days">8-9 days</SelectItem>
                <SelectItem value="9-10 days">9-10 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="area">Difficulty</Label>
            <Select name="difficulty" defaultValue="beginner" onValueChange={(value) => handleSelectChange("difficulty", value)}>
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subject">Distance</Label>
          <Input id="distance" name="distance" type="number" min="0" placeholder="Ex. 12km" onChange={handleInputChange}/>
        </div>
        {/* <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="I need help with..." />
        </div> */}
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            id="description"
            placeholder="Please include all information relevant to your issue."
            onChange={handleInputChange}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between space-x-2">
        <StepFormActionButton previous={handlePrevious} next={handleNext}/>
      </CardFooter>
    </Card>
  )
}

export default TrekDataForm;