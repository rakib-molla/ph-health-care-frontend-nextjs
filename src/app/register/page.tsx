'use client'
import { Box, Button, Container, Typography,Stack,Grid, TextField } from "@mui/material"
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets'
import { useForm, SubmitHandler } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from 'sonner'
import {useRouter} from 'next/navigation'
interface IPatientData{
  name: string;
  email: string;
  contactNumber: string;
  address: string;
}

interface IPatientRegisterFormData{
  password: string;
  patient: IPatientData;
}

function RegisterPage() {
  const router = useRouter();
   const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>();

  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async(values) => {
    
    const data = modifyPayload(values);
    try{
      const res = await registerPatient(data)
      
      if(res?.data?.id){
        toast.success(res.message,{duration: 2000});
        router.push('/login');
      }else{
        toast.error(res.message);
      }
    }catch(err: any){
      console.log(err.message,{duration: 2000})
    }
    reset()
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
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}> 
                  <TextField 
                  label="Name"
                  type="text"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register('patient.name')}
                  />
                </Grid>
                <Grid item md={6}> 
                  <TextField 
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  fullWidth={true}
                  {...register('patient.email')}
                  />
                </Grid>
                <Grid item md={6}> 
                  <TextField 
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register('password')}
                  />
                </Grid>
                <Grid item md={6}> 
                  <TextField 
                  label="Contact Number"
                  variant="outlined"
                  type="tel"
                  size="small"
                  fullWidth={true}
                  {...register('patient.contactNumber')}
                  />
                </Grid>
                <Grid item md={6}> 
                  <TextField 
                  label="Address"
                  type="text"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  {...register('patient.address')}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth={true} sx={{
                margin: "10px 0px"
              }}>Register </Button>
              <Typography component="p" fontWeight={300} >Do you already have an account? <Link href="/login" color="blue"> Login</Link> </Typography>
          </Box>
          </form>
        </Box>
        
      </Stack>
    </Container>

  )
}

export default RegisterPage