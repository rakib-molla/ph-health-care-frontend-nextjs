import { Box, Button, Container, Typography,Stack,Grid, TextField } from "@mui/material"
import Image from 'next/image';
import Link from 'next/link';
import assets from '@/assets'

function RegisterPage() {
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
              <Typography component="h6" fontWeight={600}>Patient Register</Typography>
            </Box>
          </Stack>
          </form>
          <Box>
              <Grid container spacing={2} my={1}>
                <Grid item md={12}> 
                  <TextField 
                  label="Name"
                  type="text"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
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
                <Grid item md={6}> 
                  <TextField 
                  label="Contact Number"
                  variant="outlined"
                  type="tel"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
                <Grid item md={6}> 
                  <TextField 
                  label="Address"
                  type="text"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Button fullWidth={true} sx={{
                margin: "10px 0px"
              }}>Register </Button>
              <Typography component="p" fontWeight={300} >Do you already have an account? <Link href="/login" color="blue"> Login</Link> </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>

  )
}

export default RegisterPage