'use client'
import { Box, Button, Container, Typography,Stack,Grid, TextField } from "@mui/material"
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets'
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import { loginPatient } from "@/services/actions/loginPatient";
import { toast } from 'sonner';
import { storeUserInfo } from "@/services/actions/auth.services";
import {useRouter} from 'next/navigation'
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
export type TFormValues = {
  email: string;
  password: string;
  exampleRequired?: string
}

function LoginPage() {
const router = useRouter();
  
  const handleLogin = async(data: FieldValues) => {
    // console.log(data);
    try{
      const res = await loginPatient(data);
      if(res?.data?.accessToken){
        toast.success(res?.message, {duration: 2000});
        router.push('/')
        storeUserInfo({accessToken: res?.data?.accessToken})
      }else{
        toast.error(res?.message, {duration: 2000})
      }
    }
    catch(err: any){
      // console.log(err?.message)
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
              <Typography component="h6" fontWeight={600}>Login PH HealthCare</Typography>
            </Box>
          </Stack>
          <PHForm onSubmit={handleLogin}>
          <Box>
              <Grid container spacing={2} my={1}>
                
                <Grid item md={6}> 
                  <PHInput 
                  name="email"
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
              </Grid>
                <Typography textAlign='end' component="p" fontWeight={300} mt={1}> Forgot Password  </Typography>
              <Button type="submit" fullWidth={true} sx={{
                margin: "10px 0px"
              }}>Login </Button>
              <Typography component="p" fontWeight={300} >Don't have an account? <Link href="/register" color="blue"> Create an account</Link> </Typography>
          </Box>
          </PHForm>
        </Box>
      </Stack>
    </Container>

  )
}

export default LoginPage