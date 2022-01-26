import React from 'react';
import "./sidebar.css";
import PieChartIcon from '@mui/icons-material/PieChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import GroupIcon from '@mui/icons-material/Group';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function Sidebar() {
  return(
    <div className='sidebar'>
<div className="sidebarWrapper">
  <div className="profile">
  <AccountCircleIcon style={{width:"50px", height:"50px"}}/>
  <p>demo@devias.io</p>
  <p>Your tier <span>Premium</span></p>
    </div>
 
    <div className="sidebarMenu">
        <h3 className="sidebarTitle">Reports</h3>
 <ul className='sibebarList'>
     <li className="sibebarlistItem">
     <PieChartIcon/>
     <span className='pad'>Dashboard</span> 

     </li>
     <li className="sibebarlistItem">
     <SignalCellularAltIcon/>
     <span className='pad'>Dashboard Alternative</span> 

     </li>
     <h3 className="sidebarTitle">Managment</h3>
     <li className="sibebarlistItem dropdown">
         
     <GroupIcon/>
     <span className='pad'>Customers</span> 

 

     <a href="javascript:void(0)" className="dropbtn"><KeyboardArrowDownIcon/></a>
    <div className="dropdown-content">
      <a href="#">List Customer</a>
      <a href="#">View Customer</a>
      <a href="#">Edit Customer</a>
    </div>
     </li>
     <li className="sibebarlistItem dropdown">
     <LocalGroceryStoreOutlinedIcon/>
    <span className='pad'>Products</span> 
 

     <a href="javascript:void(0)" className="dropbtn"><KeyboardArrowDownIcon/></a>
    <div className="dropdown-content">
      <a href="#">New Arrivel</a>
      
    </div>
     </li>
     <li className="sibebarlistItem dropdown">
     <DriveFileMoveOutlinedIcon/>
     <span className='pad'>Orders</span> 

 

     <a href="javascript:void(0)" className="dropbtn"><KeyboardArrowDownIcon/></a>
    <div className="dropdown-content">
      <a href="#">Shipped</a>
      <a href="#">Transit</a>
      <a href="#">Retured</a>
    </div>
     </li>
     <li className="sibebarlistItem dropdown">
     <ReceiptOutlinedIcon/>
     <span className='pad'>Invoice</span> 

 

     <a href="javascript:void(0)" className="dropbtn"><KeyboardArrowDownIcon/></a>
    <div className="dropdown-content">
      <a href="#">Billing</a>

    </div>
     </li>
<h3 className="sidebarTitle">Application</h3>
<li className="sibebarlistItem dropdown">
     <BusinessCenterOutlinedIcon/>
     <span className='pad'>Product platform</span> 

 

     <a href="javascript:void(0)" className="dropbtn"><KeyboardArrowDownIcon/></a>
    <div className="dropdown-content">
      <a href="#">Mobile App</a>
    
    </div>
     </li>
     <li className="sibebarlistItem dropdown">
     <ShareOutlinedIcon/>
     <span className='pad'>Social Platform</span> 

 
     <a href="javascript:void(0)" className="dropbtn"><KeyboardArrowDownIcon/></a>
    <div className="dropdown-content">
      <a href="#">Facebook</a>
      <a href="#">instagram</a>
      <a href="#">Youtube</a>
    </div>
     </li>
 </ul>
    </div>

</div>

    </div>
  ) 
}

export default Sidebar;
