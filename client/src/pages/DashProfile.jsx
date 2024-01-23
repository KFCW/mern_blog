import {useSelector} from "react-redux"
import {Button, TextInput} from "flowbite-react"
const DashProfile = () => {
    const {currentUser} = useSelector((state) => state.user)
    console.log(currentUser)
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profil</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
            <img src={currentUser.rest.profilePicture} alt="user" className="rounded-full w-full object-cover border-8 border-[lightgray]" />
        </div>
        <TextInput
            type="text"
            id="username"
            placeholder="username"
            defaultValue = {currentUser.rest.username}
        />
        <TextInput
            type="email"
            id="email"
            placeholder="email"
            defaultValue = {currentUser.rest.email}
        />
        <TextInput
            type="password"
            id="password"
            placeholder="***********"
        />
        <Button type="submit" outline gradientDuoTone="purpleToBlue">
            Modifiez
        </Button>
        <div className="flex justify-between text-red-500 mt-5">
            <span className="cursor-pointer">Supprimez ce compte</span>
            <span className="cursor-pointer">Se déconnecter</span>
        </div>
      </form>
    </div>
  )
}

export default DashProfile
