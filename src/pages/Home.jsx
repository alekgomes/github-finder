import { Link } from "react-router-dom"
import fetchUserRepos from "../services/fetchUserRepos"
import fetchUserInfo from "../services/fetchUserInfo"
import { useUserContext } from "../contexts/userContext"
import UserDetails from "../components/UserDetails"

const Home = () => {
  const { user, setUser } = useUserContext()

  const onChange = (e) => {
    setUser({ ...user, name: e.target.value })
  }

  const handleFetch = async () => {
    const [repos, info] = await Promise.all([
      fetchUserRepos(user.name),
      fetchUserInfo(user.name),
    ])

    setUser({ ...user, repos, info })
  }

  return (
    <>
      <input
        type="text"
        value={user.name}
        name="user"
        id="user"
        onChange={onChange}
        placeholder="Pesquisar usuário..."
      />
      <button onClick={handleFetch}>Pesquisar</button>

      {Object.keys(user.info).length > 0 && <UserDetails info={user.info} />}

      {user.repos.length > 0 &&
        user.repos.map((repo) => (
          <Link key={repo.id} to={`/${user.name}/${repo.name}`}>
            Detalhes
          </Link>
        ))}
    </>
  )
}

export default Home
