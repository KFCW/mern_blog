import {Link,useNavigate} from "react-router-dom"
import {Alert, Button, Label, Spinner, TextInput} from "flowbite-react"
import { useState} from "react"
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice"
import {useDispatch, useSelector} from "react-redux"


const SignIn = () => {  
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    if(!formData.email || !formData.password){
      return dispatch(signInFailure("Veuillez remplir tous les champs"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
          dispatch(signInFailure(data.message));
      }
      if(res.ok) {
        dispatch(signInSuccess(data))
        navigate("/")
      }
    } catch (error) {
          dispatch(signInFailure(error.message))
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
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="email" value="email"/>
                  <TextInput type="email" placeholder="nom@compagny.com" id="email" onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="password" value="password"/>
                  <TextInput type="password" placeholder="***********" id="password" onChange={handleChange} />
                </div>
                <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
                    {
                      loading ? (
                        <>
                          <Spinner size="sm"/>
                          <span className="pl-3">Chargement en cours...</span>
                        </>
                      ): "Se connecter"
                    }
                </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Pas encore un compte?</span>
              <Link to="/sign-up" className="text-blue-500">
                Inscription
              </Link>
            </div>
            {
              errorMessage && (
                <Alert className="mt-5" color="failure">{errorMessage}</Alert>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default SignIn
