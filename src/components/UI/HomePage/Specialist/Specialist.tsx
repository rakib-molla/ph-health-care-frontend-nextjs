import { Box, Button, Container, Typography,Stack } from "@mui/material"
import Image from "next/image";

const Specialist = async() =>{
    const res = await fetch('http://localhost:5000/api/v1/specialties',{
        next:{
            revalidate: 30,
        }
    });
    const {data:specialties} = await res.json();
    console.log(specialties);

  return (
    <Container sx={{
        margin: "40px 0px",
        textAlign: "start",
    }}>.
        <Box>
            <Typography variant="h4" fontWeight={600}>Explore Treatments Across Specialties</Typography>
            <Typography component="p" fontWeight={300} fontSize={18}>Experienced Doctors Across All Specialties</Typography>
            <Stack direction="row" gap={4} mt={5}>
                {specialties.map((specialty:any)=>(
                    <Box key={specialty.id} sx={{
                        flex:1,
                        width:"150px",
                        backgroundColor: "rgba(245,245,245,1)",
                        border:"1px solid rgba(250,250,250,1)",
                        borderRadius:"10px",
                        textAlign:"center",
                        padding:"40px 10px",
                        "& img":{
                            width:"50px",
                            height:"50px",
                            margin:"0 auto"
                        },
                        "&:hover":{
                            border:"1px solid blue",
                            cursor:"pointer",
                        }
                    }}>
                        <Image src={specialty.icon} width={100} height={100} alt="specialty icon"/>
                        <Typography component="p" fontWeight={600} fontSize={18} mt={2}>{specialty.title}</Typography>

                    </Box>
                ))}
            </Stack>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Button variant="outlined" sx={{
                marginTop: "20px",
            }}>View All</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default Specialist