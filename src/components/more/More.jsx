import React from 'react';
import "./more.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function More() {
    return (
        <div className='more'>
            <div className="team">
                <h3>Team Tasks</h3>
                <MoreVertIcon style={{position:"relative", top:"17px"}} />
            </div>
            <div className="latestProject">
                <h3>Latest Projects</h3>
                <MoreVertIcon style={{position:"relative", top:"17px"}} />

            </div>
        </div>
    )
}
