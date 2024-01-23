import {Sidebar} from "flowbite-react"
import {HiUser, HiArrowSmRight} from "react-icons/hi"
import {Link, useLocation} from "react-router-dom"
import {useState, useEffect} from 'react'

const DashSidebar = () => {
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
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to="/dashbord?tab=profile">
                <Sidebar.Item active={tab ==='profile'} icon={HiUser} label={"User"} labelColor={"dark"}>
                    Profil
                </Sidebar.Item>
            </Link>
            <Sidebar.Item  icon={HiArrowSmRight}className="cursor-pointer">
                Déconnexion
            </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
