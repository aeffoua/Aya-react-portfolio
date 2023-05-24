import{BrowserRouter as Browser,Route,Routes} from "react-router-dom"
import Home from "../components/home"
import AboutMe from "../components/about"
import Contact from "../components/contact"
import Portfolio from "../components/portfolio"
import Resume from "../components/resume"

const Router= ()=>{
    return(
        <Browser>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path= "/aboutme" element={<AboutMe/>}/>
                <Route path= "/contact" element={<Contact/>}/>
                <Route path= "/portfolio" element={<Portfolio/>}/>
                <Route path= "/resume" element={<Resume/>}/>

            </Routes>
        </Browser>
    )
}
export default Router