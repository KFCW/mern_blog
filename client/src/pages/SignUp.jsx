import {Link,useNavigate} from "react-router-dom"
import {Alert, Button, Label, Spinner, TextInput} from "flowbite-react"
import { useState} from "react"


const SignUp = () => {  
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessages("Veuillez remplir tous les champs");
    }
    try {
      setLoading(true)
      setErrorMessages(null)
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessages(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate("/sign-in")
      }
    } catch (error) {
         setErrorMessages(error.errorMessages); 
         setLoading(false);
    }
  }

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
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="username" value="username"/>
                  <TextInput type="text" placeholder="Pseudo" id="username" onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="email" value="email"/>
                  <TextInput type="email" placeholder="nom@compagny.com" id="email" onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="password" value="password"/>
                  <TextInput type="password" placeholder="mot de passe" id="password" onChange={handleChange} />
                </div>
                <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                    {
                      loading ? (
                        <>
                          <Spinner size="sm"/>
                          <span className="pl-3">Chargement en cours...</span>
                        </>
                      ): "S'inscrire"
                    }
                </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Avez-vous un compte?</span>
              <Link to="/sign-in" className="text-blue-500">
                Se connecter
              </Link>
            </div>
            {
              errorMessages && (
                <Alert className="mt-5" color="failure">{errorMessages}</Alert>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default SignUp
