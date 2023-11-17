"use client"
 
import * as React from "react"

interface StepFormProps {
    activeStep:number,
    children:Array<React.ReactNode>
}

export default function StepForm(props:StepFormProps) {
    const activeStep = props.activeStep;
    const child = props.children[activeStep];
  // const [date, setDate] = React.useState<Date>()
  return (
    <div className="grid place-items-center">
        {child}
    </div>
  )
}