
import List from '@mui/material/List';

import Box from '@mui/material/Box';

import { Stack, Typography } from '@mui/material';
import assets from '@/assets';
import Image from 'next/image';
import Link from "next/link"
import { drawerItems } from '@/utils/drawerItems';
import { UserRole } from '@/types';
import SidebarItems from './SidebarItems';
import { getUserInfo } from '@/services/actions/auth.services';
import { useState, useEffect } from 'react';


function Sidebar() {
  const [userRole, setUserRole] = useState('');

  useEffect(()=>{
    const {role} = getUserInfo() as any;
    setUserRole(role);
  },[])
  

  return (
    <Box>
      <Stack direction="row"
      alignItems="center"
      justifyContent="center"
      p={1}
      gap={1}
      component={Link}
      href="/"
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40}/>
        <Typography  variant='h6' >
          PH Health Care
        </Typography>
      </Stack>
        <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItems key={index} item={item}/>
        ))}
      </List>
    </Box>
  )
}

export default Sidebar