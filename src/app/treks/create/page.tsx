"use client"
import React, { useEffect, useState, createContext } from 'react';
import {
  Card,
} from "@/components/ui/card";
import StepForm from '@/components/stepform/stepform';
import UploadTrekImageForm from './components/uploadtrekimageform';
import TrekDataForm from '@/app/treks/create/components/trekdataform';
import TrekLocationForm from './components/treklocationform';
import { TrekFormContext } from './context';



const CreateTrek = () => {
  const [trekFormInfo, setTrekFormInfo] = useState({});
  return (
    <div className="grid grid-cols-6">
      <Card className='col-start-3 col-span-2 p-10'>
      <TrekFormContext.Provider value={{trekFormInfo, setTrekFormInfo}}>
        <StepForm>
          <TrekDataForm />
          <TrekLocationForm />
          <UploadTrekImageForm />
        </StepForm>
      </TrekFormContext.Provider>
      </Card>
    </div>
  )
}

export default CreateTrek