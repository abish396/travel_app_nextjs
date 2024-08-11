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
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

import {AuthApi} from '../../services';


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Auth = () => {
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
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Eg. traveljunkie" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type='password' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full'>Submit</Button>
            {/* <a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=973399729505-lcncpvha8i7tsaoc137jequm1tl2qqq7.apps.googleusercontent.com&redirect_uri=http:%2F%2Flocalhost:3000%2Fauth&response_type=token&include_granted_scopes=true&scope=https:%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https:%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile">
              <Button type="button" className='w-full'>Login With Google</Button>
            </a> */}
            
            <GoogleOAuthProvider clientId="973399729505-lcncpvha8i7tsaoc137jequm1tl2qqq7.apps.googleusercontent.com">
                <React.StrictMode>
                  <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                </React.StrictMode>
            </GoogleOAuthProvider>
          </form>
        </Form>
      </Card>
    </div>
  )
}

export default Auth