'use client'
import { Box, Container, Stack, Typography,Button } from "@mui/material"
import Link from 'next/link'
import dynamic from 'next/dynamic'

function Navbar() {
  const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false })

  return (
    <Container>
        <Stack 
        py={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        
        > 
            <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            P<Box component="span" color="primary.main">H</Box> Health Care
            </Typography> 

            <Stack direction="row" gap={4} justifyContent="space-between">
                <Typography component={Link} href="/consultation">Consultation</Typography>
                <Typography component={Link} href="">Health Plans</Typography>
                <Typography component={Link} href="">Medicine</Typography>
                <Typography component={Link} href="">Diagnostics</Typography>
                <Typography component={Link} href="">NGOS</Typography>
            </Stack>
            
            <AuthButton/>
        </Stack>
    </Container>
  )
}

export default Navbar