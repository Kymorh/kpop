import { NavLink } from "react-router-dom";
import "./nav.css"
export const Nav = () => {
  return (
    <div className="nav">
       <img src="https://seeklogo.com/images/S/stray-kids-logo-EFE4020196-seeklogo.com.png" alt="" />
<div className="ma"> 
    <NavLink to="/m" > Members </NavLink>
    <NavLink to="/a" > About </NavLink>
    </div>
   
    </div>
  )

}
