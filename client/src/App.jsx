import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashbord from "./pages/Dashbord"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/dashbord" element={<Dashbord/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  )
}
