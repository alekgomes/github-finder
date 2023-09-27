import PropTypes from "prop-types"
import { createContext, useContext, useState } from "react"

const UserContext = createContext(null)

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", repos: [], info: {} })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)

  if (!context) {
    throw Error("UserContext error")
  }

  return context
}

UserContextProvider.propTypes = {
  children: PropTypes.node,
}
