import { Box, Button, Container, Typography,Stack,Grid, TextField } from "@mui/material"
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets'

function LoginPage() {
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
          <form>
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
          </form>
          <Box>
              <Grid container spacing={2} my={1}>
                
                <Grid item md={6}> 
                  <TextField 
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}> 
                  <TextField 
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
              </Grid>
                <Typography textAlign='end' component="p" fontWeight={300} mt={1}> Forgot Password  </Typography>
              <Button fullWidth={true} sx={{
                margin: "10px 0px"
              }}>Login </Button>
              <Typography component="p" fontWeight={300} >Don't have an account? <Link href="/register" color="blue"> Create an account</Link> </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>

  )
}

export default LoginPage