"use client"
import React, { useEffect } from 'react';
import {
  Card,
} from "@/components/ui/card";
import StepForm from '@/components/stepform/stepform';
import UploadTrekImageForm from '@/components/uploadtrekimageform/uploadtrekimageform';
import TrekDataForm from '@/components/trekdataform/trekdataform';
import TrekLocationForm from '@/components/treklocationform/treklocationform';

const CreateTrek = () => {
  return (
    <div className="grid grid-cols-6">
      <Card className='col-start-3 col-span-2 p-10'>
        <StepForm>
          <TrekDataForm />
          <TrekLocationForm />
          <UploadTrekImageForm />
        </StepForm>
      </Card>
    </div>
  )
}

export default CreateTrek