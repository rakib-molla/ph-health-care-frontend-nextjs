import { Box, Button, Container, Typography,Stack,Grid, Card, CardMedia, CardContent, CardActions } from "@mui/material"
import assets from "@/assets";
import chooseUsImg from "@/assets/choose-us.png";
import Image from "next/image";

const servicesData = [
    {
        imageSrc: assets.svgs.award,
        title: "Award Wining Service",
        description: "Duas molestias excepturi sint occaeacti cupiditate non provident, similique sunt in culpa qui offic"
    },
    {
        imageSrc: assets.svgs.award,
        title: "Best Quality Pregnancy Care",
        description: "Duas molestias excepturi sint occaeacti cupiditate non provident, similique sunt in culpa qui offici"
    },
    {
        imageSrc: assets.svgs.award,
        title: "Award Wining Service",
        description: "Duas molestias excepturi sint occaeacti cupiditate non provident, similique sunt in culpa qui offici"
    },
    {
        imageSrc: assets.svgs.award,
        title: "Award Wining Service",
        description: "Duas molestias excepturi sint occaeacti cupiditate non provident, similique sunt in culpa qui offici"
    },
]

function WhyUs() {
  return (
    <Container>
        <Box>
            <Box textAlign="center">
                <Typography
                color="primary"
                variant="h6"
                component="h1"
                fontWeight={700}
                >
                    Why Us
                </Typography>
                <Typography
                variant="h4"
                component="h1"
                fontWeight={700}
                >
                    Why Choose Us
                </Typography>
            </Box>
        </Box>

        <Grid container spacing={2} mt={5}>
            <Grid item md={6}>
                <Box sx={{
                    display: "flex",
                    gap:"15px",
                    backgroundColor:"rgba(245,245,245,1)",
                    padding: "20px",
                    alignItems:"center",
                    borderRadius:"10px 10px 100px 10px"
                }}>
                    <Box sx={{
                        backgroundColor:"#fff",
                        padding:"10px",
                        borderRadius:"10px"
                    }}>
                        <Image src={servicesData[0].imageSrc} alt="award" width={50}/>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h6" fontWeight={600}>
                            {servicesData[0].title}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight={300}>
                            {servicesData[0].description}
                        </Typography>
                    </Box>

                </Box>
                
                <Box sx={{
                    display: "flex",
                    gap:"15px",
                    backgroundColor:"rgba(245,245,245,1)",
                    padding: "20px",
                    alignItems:"center",
                    borderRadius:"10px 100px 10px 10px",
                    margin:"20px 0px",
                }}>
                    <Box sx={{
                        backgroundColor:"#fff",
                        padding:"10px",
                        borderRadius:"10px"
                    }}>
                        <Image src={servicesData[1].imageSrc} alt="award" width={50}/>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h6" fontWeight={600}>
                            {servicesData[1].title}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight={300}>
                            {servicesData[1].description}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    gap:"15px",
                    backgroundColor:"rgba(245,245,245,1)",
                    padding: "20px",
                    alignItems:"center",
                    borderRadius:"10px 10px 100px 10px",
                    margin:"20px 0px",
                }}>
                    <Box sx={{
                        backgroundColor:"#fff",
                        padding:"10px",
                        borderRadius:"10px"
                    }}>
                        <Image src={servicesData[2].imageSrc} alt="award" width={50}/>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h6" fontWeight={600}>
                            {servicesData[2].title}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight={300}>
                            {servicesData[2].description}
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    display: "flex",
                    gap:"15px",
                    backgroundColor:"rgba(245,245,245,1)",
                    padding: "20px",
                    alignItems:"center",
                    borderRadius:"10px 100px 10px 10px",
                    margin:"20px 0px",
                }}>
                    <Box sx={{
                        backgroundColor:"#fff",
                        padding:"10px",
                        borderRadius:"10px"
                    }}>
                        <Image src={servicesData[1].imageSrc} alt="award" width={50}/>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h6" fontWeight={600}>
                            {servicesData[1].title}
                        </Typography>
                        <Typography variant="body2" color="primary" fontWeight={300}>
                            {servicesData[1].description}
                        </Typography>
                    </Box>
                </Box>

            </Grid>
            <Grid item md={6}>
                <Box sx={{
                    display:"flex",
                    alignItems: "center",
                    justifyContent:"center",
                }}>
                    <Image src={chooseUsImg} width={400}  alt="choose us image"/>
                </Box>
            </Grid>
        </Grid>
    </Container>

  )
}

export default WhyUs