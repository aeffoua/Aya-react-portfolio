import React from "react"
import "./header.css"
import Navigation from "../sub/navigation"
const Header=()=> {
    return(
        <div className="navbar">
            <div>Logo</div>

            <Navigation/>
        </div>
    )

}
export default Header