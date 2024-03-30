
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import { Stack, Typography } from '@mui/material';
import assets from '@/assets';
import Image from 'next/image';
import Link from "next/link"
function Sidebar() {
  const drawer = (
    <div>
      
      {/* <Divider /> */}
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
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
      {drawer}
    </Box>
  )
}

export default Sidebar