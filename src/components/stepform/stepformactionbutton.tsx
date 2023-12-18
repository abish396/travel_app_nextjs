"use client"
 
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface StepFormActionButton {
    activeStep:string,
    children:Array<React.JSX.Element> | React.JSX.Element
}

export default function StepFormActionButton({previous, next}) {

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