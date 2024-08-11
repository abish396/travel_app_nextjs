"use client"
import React, { useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { redirect } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import * as z from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import StepFormActionButton from '@/components/stepform/stepformactionbutton';
import * as tus from 'tus-js-client';
import { TrekFormContext } from '../create/context';


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const UploadTrekImageForm = ({activeStep, setActiveStep}) => {
  // 1. Define your form.
  const { trekFormInfo, setTrekFormInfo } = useContext(TrekFormContext);
  console.log("TrekLocationForm", {trekFormInfo})
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  /* useEffect(() => {
    const url = new URL(window.location.href.replace(/#/g,"?"))
    const searchParams = new URLSearchParams(url.search)
    console.log(url, searchParams.get('access_token')); 
  },[]) */

  const responseMessage = (response: any) => {
    console.log(response);
  };

  const errorMessage = (error: any) => {
      console.log(error);
  };

  const handleFile = (e:any) => {
    console.log({e});
    let file = e.target.files[0];
    let upload = new tus.Upload(file, {
      endpoint: 'http://localhost:9000/api/upload/',
      retryDelays: [0, 3000, 5000, 10000, 20000],
      metadata: {
        filename: file.name,
        filetype: file.type,
      },
      onError: function (error) {
        console.log('Failed because: ' + error)
      },
      onProgress: function (bytesUploaded, bytesTotal) {
        let percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2)
        console.log(bytesUploaded, bytesTotal, percentage + '%')
      },
      onSuccess: function () {
        console.log('Download %s from %s', upload.file, upload.url)
      },
    })
  
    // Check if there are any previous uploads to continue.
    upload.findPreviousUploads().then(function (previousUploads) {
      // Found previous uploads so we select the first one.
      if (previousUploads.length) {
        upload.resumeFromPreviousUpload(previousUploads[0])
      }
  
      // Start the upload
      upload.start()
    })
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrevious = () => {
    setActiveStep(activeStep - 1)
  }


  return (
    <div>
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Trek Photos</FormLabel>
                  <FormControl>
                    <Input id="picture" type="file" multiple onChange={handleFile}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <StepFormActionButton previous={handlePrevious} next={handleNext}/>
            {/* <Button type="submit" className='w-full'>Submit</Button> */}
          </form>
        </Form>
    </div>
  )
}

export default UploadTrekImageForm;   