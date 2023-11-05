import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const MenuData=[
    {
      name:'Dashboard',
      path:'/',
      icon: <DashboardIcon style={{color : "#4BC0C0"}}/> 
    },
    {
      name: 'Sales Report',
      path:'/report',
      icon: <MonetizationOnIcon style={{color : "#FFAD22"}}/>
    },
    {
      name: 'Inventory',
      path:'/inventory',
      icon: <InventoryIcon style={{color: "blueviolet"}}/>
    },
    {
      name: 'Customer',
      path: '/customer',
      icon: <PersonIcon style={{color: "rgb(228,0,124)"}}/>
    }
    
]