"use client"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
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

const TrekDataForm = () => {
  const form = useForm();
  console.log({form})
  useEffect(() => {
    console.log("appp")
  }, [])

  const handleNext = () => {

  }

  const handlePrevious = () => {

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
          <Input id="trekname" placeholder="Ex KedarKantha Trek" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="area">Duration</Label>
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
            <Label htmlFor="area">Difficulty</Label>
            <Select defaultValue="billing">
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
          <Input id="trekdistance" type="number" min="0" placeholder="Ex. 12km" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="I need help with..." />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Please include all information relevant to your issue."
          />
        </div>
        <StepFormActionButton previous={handlePrevious} next={handleNext}/>
      </CardContent>
      {/* <CardFooter className="justify-between space-x-2">
        <Button variant="ghost">Cancel</Button>
        <Button>Submit</Button>
      </CardFooter> */}
    </Card>
  )
}

export default TrekDataForm;