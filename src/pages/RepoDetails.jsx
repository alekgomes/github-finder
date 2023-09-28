import { Link, useParams } from "react-router-dom"
import { useUserContext } from "../contexts/userContext"
import RepositoryDetails from "../components/RepositoryDetails"
import { useEffect, useState } from "react"
import fetchRepoDetails from "../services/fetchRepoDetails"
import fetchUserInfo from "../services/fetchUserInfo"
import fetchUserRepos from "../services/fetchUserRepos"

const RepoDetails = () => {
  const params = useParams()
  const { user, setUser } = useUserContext()
  const [detailedRepo, setDetailedRepo] = useState(() =>
    user.repos.find((r) => r.name === params.repo)
  )

  // Only fetches data if the data is (ie. user refreshes the page)
  // Keep seamless experience troghout refreshes and page changes
  useEffect(() => {
    if (!detailedRepo) {
      const fetchData = async () => {
        const [repos, info, detailed] = await Promise.all([
          fetchUserRepos(params.user),
          fetchUserInfo(params.user),
          fetchRepoDetails(params.user, params.repo),
        ])

        setDetailedRepo(detailed)
        setUser({ ...user, repos, info, name: params.user })
      }
      fetchData()
    }
  }, [detailedRepo, params.user, params.repo, setUser, user])

  return (
    <>
      <h1>Detalhes do repositório</h1>
      <Link to="/">Home</Link>
      <RepositoryDetails repo={detailedRepo} />
    </>
  )
}

export default RepoDetails
