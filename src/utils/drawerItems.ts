import { UserRole } from "@/types";
import { DrawerItem,  } from './../types/common';
import { USER_ROLE } from "@/constans/role";

// icons 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import TryIcon from '@mui/icons-material/Try';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const drawerItems = (role: UserRole): DrawerItem[]=>{
   const roleMenus: DrawerItem[] = [];

    switch(role){
        case USER_ROLE.SUPER_ADMIN:
            roleMenus.push({
                title:'Dashboard',
                path:`${role}`,
                icon:DashboardIcon,
            },
            {
                title:'Manage Users',
                path:`${role}/manage-users`,
                icon:GroupIcon,
            }
            );
            break;

        case USER_ROLE.ADMIN:
            roleMenus.push({
                title:'Dashboard',
                path:`${role}`,
                icon:DashboardIcon,
            },
            {
                title:'Specialties',
                path:`${role}/specialties`,
                icon:TryIcon,
            },
            {
                title:'Doctors',
                path:`${role}/doctors`,
                icon:MedicalInformationIcon,
            },
            {
                title:'Schedules',
                path:`${role}/schedules`,
                icon:CalendarMonthIcon,
            },
            {
                title:'Appointments',
                path:`${role}/appointments`,
                icon:CalendarMonthIcon,
            },
            {
                title:'Reviews',
                path:`${role}/reviews`,
                icon:CalendarMonthIcon,
            }
            );
            break;


            case USER_ROLE.DOCTOR:
            roleMenus.push({
                title:'Dashboard',
                path:`${role}`,
                icon:DashboardIcon,
            },
            {
                title:'Schedules',
                path:`${role}/schedules`,
                icon:GroupIcon,
            },
            {
                title:'Appointments',
                path:`${role}/appointments`,
                icon:CalendarMonthIcon,
            },
            );
            break;


            case USER_ROLE.PATIENT:
            roleMenus.push({
                title:'Dashboard',
                path:`${role}`,
                icon:DashboardIcon,
            },
            {
                title:'Prescriptions',
                path:`${role}/prescriptions`,
                icon:GroupIcon,
            },
            {
                title:'Payment History',
                path:`${role}/payment-history`,
                icon:GroupIcon,
            },
            );
            break;

    default:
        break;
    }

    return[...roleMenus];
}