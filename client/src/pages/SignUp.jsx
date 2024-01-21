import {Link} from "react-router-dom"
import {Button, Label, TextInput} from "flowbite-react"

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
            <Link to ="/" className=" font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"> Kadjo</span>
            Blog
            </Link>
            <p className="text-sm mt-5">
              Lorem ipsum dolor sit amet.
              Quisquam unde animi quo iusto.
              Eius impedit blanditiis accusantium voluptates?
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4">
                <div>
                  <Label value=" Votre pseudo"/>
                  <TextInput type="text" placeholder="Pseudo" id="pseudo"/>
                </div>
                <div>
                  <Label value=" Votre email"/>
                  <TextInput type="text" placeholder="nom@compagny.com" id="email"/>
                </div>
                <div>
                  <Label value=" Votre mot de passe"/>
                  <TextInput type="text" placeholder="mot de passe" id="password"/>
                </div>
                <Button gradientDuoTone="purpleToPink" type="submit">
                    Inscription
                </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Avez-vosu un compte?</span>
              <Link to="/sign-in" className="text-blue-500">
                Se connecter
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp
