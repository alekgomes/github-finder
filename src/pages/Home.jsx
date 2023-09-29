import { useState } from "react"
import { fetchUserRepos, fetchUserInfo } from "@services"
import { useUserContext, emptyUser } from "@contexts/userContext"
import {
  UserDetails,
  RepositoryList,
  RepositoryItem,
  ListHeader,
  SearchUser,
  Loader,
} from "@components"

const Home = () => {
  const { user, setUser } = useUserContext()
  const [error, setError] = useState({ hasError: false, message: "" })
  const [loading, setLoading] = useState(false)

  const handleFetch = async (e) => {
    e.preventDefault()
    setUser(emptyUser)
    setLoading(true)
    try {
      const [repos, info] = await Promise.all([
        fetchUserRepos(user.name),
        fetchUserInfo(user.name),
      ])

      setUser({ ...user, repos, info })
      setError({ hasError: false })
    } catch (error) {
      setError({ hasError: true, message: error.message })
      setUser(emptyUser)
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <>
      <h1>Github finder</h1>
      <SearchUser handleFetch={handleFetch} />

      {loading && <Loader />}

      {error.hasError && (
        <>
          <br />
          <p>{error.message}</p>
        </>
      )}

      {Object.keys(user.info).length > 0 && <UserDetails info={user.info} />}

      {user.repos.length > 0 && (
        <>
          <ListHeader />
          <RepositoryList>
            {user.repos.map((repo) => (
              <RepositoryItem key={repo.id} user={user} repo={repo} />
            ))}
          </RepositoryList>
        </>
      )}
    </>
  )
}

export default Home
