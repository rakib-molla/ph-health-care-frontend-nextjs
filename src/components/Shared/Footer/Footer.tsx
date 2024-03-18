
import { Box, Container, Stack, Typography,Button } from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

function Footer() {
  return (
    <Box bgcolor="rgb(17 26 34)" py={5}>
        <Container >
            <Stack direction="row" gap={4} justifyContent="center" >
                <Typography color="#fff" component={Link} href="/consultation">Consultation</Typography>
                <Typography color="#fff" component={Link} href="">Health Plans</Typography>
                <Typography color="#fff" component={Link} href="">Medicine</Typography>
                <Typography color="#fff" component={Link} href="">Diagnostics</Typography>
                <Typography color="#fff" component={Link} href="">NGOS</Typography>
            </Stack>
            <Stack direction="row" gap={2} justifyContent="center" py={3}>
                <Image width={30} height={30} src={facebookIcon} alt="facebook"/>
                <Image width={30} height={30} src={instagramIcon} alt="facebook"/>
                <Image width={30} height={30} src={twitterIcon} alt="facebook"/>
                <Image width={30} height={30} src={linkedinIcon} alt="facebook"/>
            </Stack>
            <div className="border-b-[1px] border-dashed"></div>
            <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" py={2}>
                <Typography color="#fff" component="p" >&copy; 2024 PH HealthCare. All Rights Reserved.</Typography>
                <Typography variant="h4" color="#fff" component={Link} href="/" fontWeight={600}>
            P<Box component="span" color="primary.main">H</Box> Health Care
            </Typography> 
                <Typography color="#fff" component="p" >Privacy Policy ! Terms & Conditions</Typography>

            </Stack>
        </Container>
    </Box>
  )
}

export default Footer