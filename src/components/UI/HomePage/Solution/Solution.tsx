import { Box,  Container, Typography,Grid, Card,  CardContent,  } from "@mui/material"
import doctorSolutionImg from "@/assets/how-it-works-img.png"
import Image from "next/image";
import assets from "@/assets"
function Solution() {
  return (
    <Container >
        <Box my={10}>
            <Typography variant="h6" color="primary" fontWeight={300}>
                how it works
            </Typography>
            <Typography variant="h4"  fontWeight={600} my={1}>
                4 Easy Steps to Get Your Solution
            </Typography>
            <Typography variant="body2" fontWeight={300}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorum sint delectus <br /> tenetur labore minus illum perspiciatis sapiente aliquid  
            </Typography>
        </Box>
        <Grid container  spacing={4} my={8}>
            <Grid item md={6}> <Image src={doctorSolutionImg} width={500}  alt="doctor solution image"/> </Grid>
            <Grid item md={6}>
                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Card sx={{ maxWidth: 345,border:"1px solid #808080",
                                borderRadius:"5px",
                                cursor:"pointer",
                            }}>
            
                            <CardContent>
                                <Image src={assets.svgs.doctorSearch} width={30} alt="doctor search"/>
                                <Typography mt={1} gutterBottom variant="h6" component="div">
                                Search Doctor
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card sx={{ maxWidth: 345,border:"1px solid #808080",
                                borderRadius:"5px",
                                cursor:"pointer",

                            }}>
            
                            <CardContent>
                                <Image src={assets.svgs.profile} width={30} alt="doctor search"/>
                                <Typography mt={1} gutterBottom variant="h6" component="div">
                                Check Doctor Profile
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card sx={{ maxWidth: 345,border:"1px solid #808080",
                                borderRadius:"5px",
                                cursor:"pointer",

                            }}>
            
                            <CardContent>
                                <Image src={assets.svgs.schedule} width={30} alt="doctor search"/>
                                <Typography mt={1} gutterBottom variant="h6" component="div">
                                    Schedule Appointment
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={6}>
                        <Card sx={{ maxWidth: 345,border:"1px solid #808080",
                                borderRadius:"5px",
                                cursor:"pointer",
                            }}>
            
                            <CardContent>
                                <Image src={assets.svgs.solution} width={30} alt="doctor search"/>
                                <Typography mt={1} gutterBottom variant="h6" component="div">
                                    Get Your Solution
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Box my={15}>
            <Grid container spacing={5} sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                background: "linear-gradient(to right, #004BF7 , #1BC1E5)",
                borderRadius:"10px",
                paddingBottom:"40px",
                
            }}> 
                <Grid item md={3} sx={{
                    color:"#fff",
                }}>
                    <Typography variant="h5" textAlign="center" fontWeight={600}>
                        180+
                    </Typography>
                    <Typography textAlign="center"  variant="body2">
                        Expert Doctors
                    </Typography>

                </Grid>
                <Grid item md={3} sx={{
                    color:"#fff",
                }}>
                    <Typography variant="h5" textAlign="center" fontWeight={600}>
                        26+
                    </Typography>
                    <Typography textAlign="center"  variant="body2">
                        Expert Services
                    </Typography>

                </Grid>
                <Grid item md={3} sx={{
                    color:"#fff",
                }}>
                    <Typography variant="h5" textAlign="center" fontWeight={600}>
                       10k+
                    </Typography>
                    <Typography textAlign="center"  variant="body2">
                        Happy Patients
                    </Typography>

                </Grid>
                <Grid item md={3} sx={{
                    color:"#fff",
                }}>
                    <Typography variant="h5" textAlign="center" fontWeight={600}>
                        150+
                    </Typography>
                    <Typography textAlign="center"  variant="body2">
                        Best Award Winings
                    </Typography>

                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}

export default Solution