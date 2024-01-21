import {Navbar, TextInput, Button, Dropdown, Avatar} from "flowbite-react"
import {Link, useLocation} from "react-router-dom"
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux"
import { toggleTheme } from "../../redux/theme/themeSlice";


const Header = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.user)
    const {theme} = useSelector(state => state.theme)
  return (
    <Navbar className="border-b-2">
      <Link to ="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
       <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"> Kadjo</span>
       Blog
      </Link>
      <form>
        <TextInput
            type="text"
            placeholder="Recherche..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch/>
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" onClick={() => dispatch(toggleTheme())}>
            {theme === 'light' ? <FaSun/> : <FaMoon />}
        </Button>
        {
          currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label = {
                <Avatar
                   alt="user"
                   img={currentUser.rest.profilePicture}
                   rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.rest.username}</span>
                <span className="block text-sm font-medium truncate">{currentUser.rest.email}</span>
              </Dropdown.Header>
              <Link to={"/dashbord?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>  
              </Link>
              <Dropdown.Divider/>
              <Dropdown.Item>Déconnexion</Dropdown.Item> 
            </Dropdown>
          ): (
            <Link to="/sign-in">
                <Button gradientDuoTone="purpleToBlue" outline>
                    Se connecter
                </Button>
            </Link>
          )
        }
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
            <Navbar.Link as={"div"}>
                <Link to="/" active={path === "/"}>Acceuil</Link>
            </Navbar.Link>
            <Navbar.Link as={"div"}>
                <Link to="/about" active={path === "/about"}>A propos</Link>
            </Navbar.Link>
            <Navbar.Link as={"div"}>
                <Link to="/projects" active={path === "/projects"}>Projets</Link>
            </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
