import "./featuredInfo.css"

import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
export default function FeaturedInfo() {
  return (
  <div className="featured">
<div className="featureditem">
    <span className="featuredTitle">
        TODAYS MONEY
    </span>
    <div className="flex">
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">$ 24,000</span>
        <span className="featuredMoneyRate">+4%</span>
    </div>
    <span className="featuredSub">
    <MonetizationOnOutlinedIcon style={{position:"relative", left:"8px", top:"8px"}}/>
    </span>
    </div>
</div>

<div className="featureditem">
    <span className="featuredTitle">
       NEW PROJECTS
    </span>
    <div className="flex">
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">12</span>
        <span className="featuredMoneyRate" style={{color:"red"}}>-10%</span>
    </div>
    <span className="featuredSub">
    <FolderOpenOutlinedIcon style={{position:"relative", left:"8px", top:"8px"}}/>
    </span>
    </div>
</div>

<div className="featureditem">
    <span className="featuredTitle">
     SYSTEM HEALTH
    </span>
    <div className="flex">
    <div className="featuredMoneyContainer" style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between"}}>
        <span className="featuredMoney"style={{marginRight:"5px"}}>97%</span>
        <div className="progress">
  <div classname="color"></div>
</div>
    </div>
    
    </div>
</div>
<div className="featureditem">
    <span className="featuredTitle">
      ROI PER CUSTOMER
    </span>
    <div className="flex">
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">$ 25.50</span>
        
    </div>
    <span className="featuredSub">
    <MonetizationOnOutlinedIcon style={{position:"relative", left:"8px", top:"8px"}}/>
    </span>
    </div>
</div>
  </div>
  )
}
