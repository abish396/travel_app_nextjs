"use client"
 
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface StepFormProps {
    activeStep:string,
    children:Array<React.JSX.Element> | React.JSX.Element
}

export default function StepForm(props:any) {
  const [ nextIndex, setNextIndex ] = useState(0);

  const next = () => {
    setNextIndex(nextIndex + 1);
  }

  const previous = () => {
    setNextIndex(nextIndex - 1);
  }

  // const activeStep = props.activeStep;
  const child = props.children[nextIndex];

  return (
    <div>
        {child}
    </div>
  )
}