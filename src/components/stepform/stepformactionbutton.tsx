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
    <>
      <div className="w-full">
        <Button type="button" className="w-full" onClick={previous}>Previous</Button>
      </div>
      <div className="w-full">
        <Button type="button" className="w-full" onClick={next}>Next</Button>
      </div>
    </>
  )
}