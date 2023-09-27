import { Link, useParams } from "react-router-dom"

const RepoDetails = () => {
  const { user, repo } = useParams()
  console.log(user, repo)
  return (
    <>
      <div>RepoDetails</div>
      <Link to="/">Home</Link>
    </>
  )
}

export default RepoDetails
