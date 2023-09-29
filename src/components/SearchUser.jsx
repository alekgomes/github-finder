import PropTypes from "prop-types"
import { useUserContext } from "../contexts/userContext"
import styles from "./SearchUser.module.scss"

const SearchUser = ({ handleFetch }) => {
  const { searchUser } = styles
  const { user, setUser } = useUserContext()

  const onChange = (e) => {
    setUser({ ...user, name: e.target.value })
  }
  return (
    <div className={searchUser}>
      <input
        type="text"
        value={user.name}
        name="user"
        id="user"
        onChange={onChange}
        placeholder="Pesquisar usuário..."
      />
      <button onClick={handleFetch}>Pesquisar</button>
    </div>
  )
}

export default SearchUser

SearchUser.propTypes = {
  handleFetch: PropTypes.func,
}
