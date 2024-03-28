'use client'
import { Box, Button, Container, Typography,Stack,Grid, TextField } from "@mui/material"
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from 'sonner'
import {useRouter} from 'next/navigation'
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/actions/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

export const patientValidationSchema = z.object({
  name: z.string().min(1, 'Please Enter Your Name'),
  email: z.string().email("Please Provide Valid Email Address"),
  contactNumber: z.string().regex(/^\d{11}$/, "Please Provide a Valid Phone Nubmer"),
  address: z.string().min(3, "Please Enter Your Address"),
})

export const validationSchema = z.object({
  password: z.string().min(6,"Password Must be 6 Character"),
  patient: patientValidationSchema,
})

export const defaultValues = {
  password: '',
  patient:{
    name: '',
    email: '',
    contactNumebr:'',
    address: ''
  }
}

function RegisterPage() {
  const router = useRouter();
   
  const handleRegister = async(values: FieldValues) => {
    // console.log(values)
    const data = modifyPayload(values);
    try{
      const res = await registerPatient(data)
      if(res?.data?.id){
        toast.success(res?.message,{duration: 2000});
        
        const result = await loginPatient({
          password: values?.password,
          email: values?.patient?.email,
        });
        if(result?.data?.accessToken){
          storeUserInfo({accessToken: result?.data?.accessToken})
          router.push('/')
        }


      }else{
        toast.error(res?.message ,{duration: 2000});
      }
    }catch(err: any){
      // console.log(err.message)
    }
  }

  return (
    <Container>
      <Stack sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
        <Box sx={{
          maxWidth: 600,
          width: '100%',
          boxShadow: 1,
          borderRadius: 1,
          padding: 4,
          textAlign:"center",
        }}>
          
            <Stack sx={{
            justifyContent:"center",
            alignItems: "center"
          }}> 
            <Box>
              <Image src={assets.svgs.logo} height={50} width={50} alt="logo"/>
            </Box>
            <Box>
              <Typography component="h6" fontWeight={600}>Patient Register</Typography>
            </Box>
          </Stack>
          <PHForm onSubmit={handleRegister}
          resolver={zodResolver(validationSchema)}
          defaultValues={defaultValues}
          >
          <Box>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}> 
                  <PHInput 
                  name="patient.name"
                  label="Name"
                  type="text"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}> 
                  <PHInput 
                  name="patient.email"
                  label="Email"
                  type="email"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}> 
                  <PHInput 
                  name="password"
                  label="Password"
                  type="password"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}> 
                  <PHInput 
                  name="patient.contactNumber"
                  label="Contact Number"
                  type="tel"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}> 
                  <PHInput 
                  name="patient.address"
                  label="Address"
                  type="text"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth={true} sx={{
                margin: "10px 0px"
              }}>Register </Button>
              <Typography component="p" fontWeight={300} >Do you already have an account? <Link href="/login" color="blue"> Login</Link> </Typography>
          </Box>
          </PHForm>
        </Box>
        
      </Stack>
    </Container>

  )
}

export default RegisterPage