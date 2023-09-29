import PropTypes from "prop-types"
import styles from "./RepositoryDetails.module.scss"
import { Fork, Stars, Watchers } from "@icons"

const RepositoryDetails = ({ repo }) => {
  const { repositoryDetails, projectName, projectData, projectDescription } =
    styles

  if (!repo) {
    return <h1>Sem repositório</h1>
  }

  return (
    <div className={repositoryDetails}>
      <p className={projectName}>{repo.name}</p>
      <p className={projectData}>
        <span>
          <Stars /> {repo.stargazers_count}
        </span>
        <span>
          <Watchers /> {repo.watchers_count}
        </span>
        <span>
          <Fork /> {repo.forks_count}
        </span>
      </p>
      <p>{repo.language}</p>

      <p className={projectDescription}>{repo.description}</p>
      <a href={repo.html_url}>Visitar projeto</a>
    </div>
  )
}

export default RepositoryDetails

RepositoryDetails.propTypes = {
  repo: PropTypes.object,
}
