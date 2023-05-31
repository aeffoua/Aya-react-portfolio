import{BrowserRouter as Browser,Route,Routes} from "react-router-dom"
import AboutMe from "../components/about"
import Contact from "../components/contact"
import Portfolio from "../components/portfolio"
import Resume from "../components/resume"
import Header from "../components/layout/header"

const Router= ()=>{
    return(
        <Browser>
            <Header/>
            <Routes>
                <Route path= "/about" element={<AboutMe/>}/>
                <Route path= "/contact" element={<Contact/>}/>
                <Route path= "/portfolio" element={<Portfolio/>}/>
                <Route path= "/resume" element={<Resume/>}/>

            </Routes>
        </Browser>
    )
}
export default Router