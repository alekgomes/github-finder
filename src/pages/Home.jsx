import { useState } from "react"
import { Link } from "react-router-dom"
import fetchUser from "../services/fetchUser"

const Home = () => {
  const [user, setUser] = useState("")
  const [userRepos, setUserRepos] = useState([])

  const onChange = (e) => {
    setUser(e.target.value)
  }

  const handleFetch = async () => {
    const repos = await fetchUser(user)
    setUserRepos(repos)
  }

  console.log(userRepos)

  return (
    <>
      <div>Home</div>
      <input
        type="text"
        value={user}
        name="user"
        id="user"
        onChange={onChange}
      />
      <button onClick={handleFetch}>Pesquisar</button>

      <Link to="/alekgomes/adopt-me">Detalhes</Link>
    </>
  )
}

export default Home
