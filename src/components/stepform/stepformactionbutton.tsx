"use client"
 
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface StepFormActionButton {
    activeStep:string,
    children:Array<React.JSX.Element> | React.JSX.Element
}

export default function StepFormActionButton(props:any) {
  const [ nextIndex, setNextIndex ] = useState(0);

  const next = () => {
    setNextIndex(nextIndex + 1);
  }

  const previous = () => {
    setNextIndex(nextIndex - 1);
  }

  return (
    <div className="grid grid-flow-col justify-stretch">
      <div>
        <Button type="button" className="w-1/2" onClick={previous}>Previous</Button>
      </div>
      <div>
        <Button type="button" className="w-1/2" onClick={next}>Next</Button>
      </div>
    </div>
  )
}