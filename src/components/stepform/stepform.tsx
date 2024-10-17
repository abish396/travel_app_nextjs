"use client"
 
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface StepFormProps {
    activeStep:string,
    children:Array<React.JSX.Element> | React.JSX.Element
}

export default function StepForm(props:any) {
  const [ activeStep, setActiveStep ] = useState(0);
  const child = props.children[activeStep];
  console.log(activeStep, props.children, React.isValidElement(child))
  let childrenWithProps;
  const additionalProps = {
    activeStep,
    setActiveStep
  };
  if (React.isValidElement(child)) {
    // Clone the child element with additional props
    childrenWithProps = React.cloneElement(child, additionalProps);
  }
  return (
    <div>
        {childrenWithProps}
    </div>
  )
}