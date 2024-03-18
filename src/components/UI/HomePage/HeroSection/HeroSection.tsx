import { Box, Button, Container, Typography } from "@mui/material"
import Image from "next/image";
import assets from "@/assets";

function HeroSection() {
  return (
    <Container sx={{
        display: "flex",
        direction: "row",
        my: 16,
    }}>
        <Box sx={{
            flex: 1,
            position: "relative"
        }}>
            <Box sx={{
                position: "absolute",
                width: "700px",
                top: "-90px",
                left: "-120px",
                
            }}>
                <Image src={assets.svgs.grid} alt="grid"/>
            </Box>
            <Typography variant="h3" component="h1" fontWeight={600}>Healthier Hearts</Typography>
            <Typography variant="h3" component="h1" fontWeight={600}>Comes From</Typography>
            <Typography color="primary.main" variant="h3" component="h1" fontWeight={600}>Preventive Care</Typography>
            <Typography color="primary.main" variant="h6" component="p" fontWeight={400} sx={{
                width:"50%",
                py: "15px",
            }}>
                development is being shaped by technological developments, artificial intelligence (AI), and the growth of no-code/low-code platforms. AI is not expected to replace frontend developers
            </Typography>
            <Button >Make Appoinment </Button>
            <Button sx={{
                marginLeft: "10px"
            }} variant="outlined">Contact Us </Button>
        </Box>
        <Box>Right</Box>
    </Container>
  )
}

export default HeroSection