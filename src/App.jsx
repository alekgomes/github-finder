
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RepoDetails from "./pages/RepoDetails"
import { UserContextProvider } from "./contexts/userContext"

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user/:repo" element={<RepoDetails />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
