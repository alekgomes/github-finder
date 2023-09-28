import PropTypes from "prop-types"
import styles from "./RepositoryList.module.scss"

const RepositoryList = ({ children }) => {
  const { repositoryList } = styles
  return <div className={repositoryList}>{children}</div>
}

export default RepositoryList

RepositoryList.propTypes = {
  children: PropTypes.node,
}
