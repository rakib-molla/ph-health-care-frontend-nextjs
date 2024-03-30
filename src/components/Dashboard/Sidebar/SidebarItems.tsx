import Link from "next/link";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DrawerItem } from "@/types";
import {usePathname} from "next/navigation";
type IProps ={
    item: DrawerItem;
    index: number;
}

function SidebarItems({item}: IProps) {
    const linkPath = `/dashboard/${item.path}`;
    const pathName = usePathname();
    console.log(pathName);

  return (
    <Link href={linkPath}>
        <ListItem disablePadding sx={{
            ...(pathName === linkPath ? {borderRight: '3px solid #1586FD',
            "& svg":{
                color: "#1586FD",
            }
        }:{})
        }}>
            <ListItemButton>
              <ListItemIcon>
                { item.icon && <item.icon/> }
              </ListItemIcon>
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
    </Link>
  )
}

export default SidebarItems