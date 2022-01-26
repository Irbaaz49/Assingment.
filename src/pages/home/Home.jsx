import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/charts/Chart"
import More from "../../components/more/More"
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function Home() {
  return (
<div className="home">
  <div className="head">
    <div className="dash">
      Dashboard <ArrowForwardIosOutlinedIcon style={{width:"15px", position:"relative", top:"7px"}}/> Reports
   <h2>Here's what's happening</h2>
    </div>
<div className="dashRight">
<WorkOutlineIcon style={{width:"20px", position:"relative", top:"6px"}}/> LAST 30 Days
</div>
  </div>
<FeaturedInfo/>
<Chart/>
<More/>






</div>
  ) 
}
