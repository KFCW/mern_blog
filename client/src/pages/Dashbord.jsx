import {useLocation} from "react-router-dom"
import {useState, useEffect} from 'react'
import DashProfile from "./DashProfile";
import DashSidebar from "./DashSidebar";

const Dashbord = () => {
  const location = useLocation();
  const [tab, setTab]= useState('')  
  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    console.log(urlParams)
    const tabFromUrl = urlParams.get("tab");
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
    console.log(tabFromUrl)
  },[location.search])
    return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="md:w-56 ">
        {/* Sibar */}
        <DashSidebar/>
      </div>
        {/* Main */}
       {tab === "profile" && <DashProfile/>}
    </div>
  )
}

export default Dashbord
