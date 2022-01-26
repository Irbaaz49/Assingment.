import React from 'react';
import "./topbar.css"
import logo from "../topbar/logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft"><span className='logo'><img src={logo} alt="logo" /></span></div>
                <div className="topRight">
                    <div className="topbarIcons"><SearchIcon />
                       
                        </div>
                        <div className="topbarIcons mobile"><GroupIcon />
                       
                        </div>
                        <div className="topbarIcons"><NotificationsIcon />
                        
                        </div>
                        <div className="topbarIcons mobile"><SettingsIcon />
                        <span className="topIconBatch"></span>
                        </div>
                        <div className="topbarIcons"><AccountCircleIcon />
                        <span id='user' className='mobile'>irbaazhussain@gmail.com</span>
                        </div>
                        
                </div>
            </div>

        </div>
    )
}
