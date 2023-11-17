"use client"
import React, { useEffect } from 'react'
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
import * as tus from 'tus-js-client'


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const CreateTrek = () => {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  useEffect(() => {
    const url = new URL(window.location.href.replace(/#/g,"?"))
    const searchParams = new URLSearchParams(url.search)
    console.log(url, searchParams.get('access_token')); 
  },[])


  // 2. Define a submit handler.
  async function onSubmit(values: any) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    try {
      const loginResult = await AuthApi.login(values);
      if(loginResult.status === 200) {
        redirect('/');
      }
    } catch(err) {
      
    }

  }

  const handleGoogleLogin = async () => {
    try {
      const loginResult = await AuthApi.loginWithGoogle();
      if(loginResult.status === 200) {
        console.log({loginResult})
        window.location.href = loginResult.request.responseURL;
      }
    } catch(err) {
        
    }
  };

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
        console.log('Download %s from %s', upload.file.name, upload.url)
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


  return (
    <div className="grid grid-cols-6">
      <Card className='col-start-3 col-span-2 p-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Trek Photos</FormLabel>
                  <FormControl>
                    <Input id="picture" type="file" onChange={handleFile}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full'>Submit</Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default CreateTrek