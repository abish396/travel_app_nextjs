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
import { TrekFormContext } from '../context';

const TrekLocationForm = ({activeStep, setActiveStep}) => {
  const { trekFormInfo, setTrekFormInfo } = useContext(TrekFormContext);
  console.log("TrekLocationForm", {trekFormInfo})
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  }

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
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
          <Input id="address1" type="text"/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address2">Address Line 2</Label>
          <Input id="address2" type="text"/>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">State</Label>
            <Select defaultValue="billing">
              <SelectTrigger id="area">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team">1-2 days</SelectItem>
                <SelectItem value="billing">2-3 days</SelectItem>
                <SelectItem value="account">3-4 days</SelectItem>
                <SelectItem value="deployments">4-5 days</SelectItem>
                <SelectItem value="support">5-6 days</SelectItem>
                <SelectItem value="support">6-7 days</SelectItem>
                <SelectItem value="support">7-8 days</SelectItem>
                <SelectItem value="support">8-9 days</SelectItem>
                <SelectItem value="support">9-10 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pincode">Pin Code</Label>
            <Input id="pincode" type="text"/>
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