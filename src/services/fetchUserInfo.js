import errorHandling from "./errorHandling"

const fetchUserInfo = (query) => {
  return fetch(`https://api.github.com/users/${query}`)
    .then((response) => {
      if (!response.ok) {
        errorHandling(response)
      }
      return response.json()
    })
    .catch((error) => {
      throw new Error(error)
    })
}
export default fetchUserInfo
