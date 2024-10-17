import React, { useState, useContext, useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import * as tus from 'tus-js-client';
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CompanyApi } from "../../../services";
import useForm from "../../../hooks/useform";
import { CompanyFormContext } from "../../../context";
import StepFormActionButton from '@/components/stepform/stepformactionbutton';
import Validators from '../validators';

const CompanyOfferingsFormSchema = {
  "offerings": []
};

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const CompanyOfferingsForm = ({ activeStep, setActiveStep }) => {

  
  

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log({file})
      /* const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file) */
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
    })

  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({onDrop, accept: {'image/*': []}});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState({});
  const { companyRegisterFormInfo, setCompanyRegisterForm, errors, setErrorsInContext } = useContext(CompanyFormContext);
  // console.log({ companyRegisterFormInfo, errors })
  const { handleChange, handleSubmit } = useForm(companyRegisterFormInfo, setCompanyRegisterForm, errors, setErrorsInContext, CompanyOfferingsFormSchema, Validators);

  

  const setSelectedValues = (value: any) => {
    console.log({ value });
    const tempContext = JSON.parse(JSON.stringify(companyRegisterFormInfo));
    if (!tempContext["offerings"]) {
      tempContext["offerings"] = value;
    } else {
      tempContext["offerings"] = [...value];
    }
    setCompanyRegisterForm(tempContext);
    handleChange("offerings", tempContext["offerings"]);
    // if (value) setValue(value);
  }

  const handleNext = () => {
    handleSubmit(activeStep, 2, setActiveStep, CompanyApi.create);
    // setActiveStep(activeStep + 1);
  }

  const handlePrevious = () => {
    // handleSubmit(activeStep, 0, setActiveStep);
    if (activeStep >= 0) {
      setActiveStep(activeStep - 1);
    }

  }



  return (
    <div className="sm:container sm:mx-auto">
      <Card className="sm:mx-auto w-1/2">
        <CardHeader>
          <CardTitle>Register Your Company</CardTitle>
          {/* <CardDescription>
          What area are you having problems with?
        </CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="offerings">Select atleast one offering</Label>
            <ToggleGroup type="multiple" variant="outline" onValueChange={setSelectedValues}>
              <ToggleGroupItem value="treks" aria-label="Treks">
                <div>Treks</div>
              </ToggleGroupItem>
              <ToggleGroupItem value="homestays" aria-label="Homestays">
                <div>Homestays</div>
              </ToggleGroupItem>
              <ToggleGroupItem value="expedition" aria-label="Expedition">
                <div>Expedition</div>
              </ToggleGroupItem>
              <ToggleGroupItem value="camping" aria-label="Camping">
                <div>Camping</div>
              </ToggleGroupItem>
              <ToggleGroupItem value="star_gazing" aria-label="Star Gazing">
                <div>Star Gazing</div>
              </ToggleGroupItem>
            </ToggleGroup>
            {errors && errors.offerings ? <p className="text-red-700">{errors.offerings}</p> : ""}
          </div>
          <div {...getRootProps({style})}>
            <input {...getInputProps()} />
            <p>Upload a unique logo or image of your company.</p>
          </div>
        </CardContent>


        <CardFooter className="justify-between space-x-2">
          <StepFormActionButton previous={handlePrevious} next={handleNext} />
        </CardFooter>
      </Card>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>


    </div>
  )
}

export default CompanyOfferingsForm;