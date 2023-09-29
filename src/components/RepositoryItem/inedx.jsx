import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./RepositoryItem.module.scss"
import { Stars } from "@icons"

const RepositoryItem = ({ user, repo }) => {
  const { repositoryItem } = styles
  return (
    <Link to={`/${user.name}/${repo.name}`} className={repositoryItem}>
      <p>
        <span>{repo.name}</span>
        <span>
          <Stars /> {repo.stargazers_count}
        </span>
      </p>
      <p>
        <i>{repo.description}</i>
      </p>
    </Link>
  )
}

export default RepositoryItem

RepositoryItem.propTypes = {
  user: PropTypes.object,
  repo: PropTypes.object,
}
