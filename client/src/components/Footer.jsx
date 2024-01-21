import {Footer} from "flowbite-react"
import { Link } from "react-router-dom"
import {BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs"

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
          <Link to ="/" className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"> Kadjo</span>
          Blog
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6 ">
            <div className="">
              <Footer.Title title="A propos"/>
              <Footer.LinkGroup col>
                  <Footer.Link 
                    href="https://www.linkedin.com/in/foussou-claude-wilfried-kadjo-047553267/"
                    target="_bank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </Footer.Link>
                  <Footer.Link 
                    href="/"
                    target="_bank"
                    rel="noopener noreferrer"
                  >
                    Kadjo Blog
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Suivez-nous"/>
              <Footer.LinkGroup col>
                  <Footer.Link 
                    href="https://github.com/KFCW"
                    target="_bank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link 
                    href="#"
                  
                  >
                   Discord
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="">
              <Footer.Title title="Légale"/>
              <Footer.LinkGroup col>
                  <Footer.Link 
                    href="#"
                  >
                    politique de confidentialité
                  </Footer.Link>
                  <Footer.Link 
                    href="#"
                  
                  >
                   Termes &amp; Conditions
                  </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Kadjo blog" year={new Date().getFullYear()}/>
           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook}/>
              <Footer.Icon href="#" icon={BsInstagram}/>
              <Footer.Icon href="#" icon={BsTwitter}/>
              <Footer.Icon href="https://github.com/KFCW" icon={BsGithub}/>
              <Footer.Icon href="#" icon={BsDribbble}/>
           </div>
          </div>
      </div>
    </Footer>
  )
}

export default FooterComp
