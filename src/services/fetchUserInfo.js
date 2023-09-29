const fetchUserInfo = (query) => {
  return fetch(`https://api.github.com/users/${query}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`GitHub API Request Failed: ${response.status}`)
      }
      return response.json()
    })
    .catch((error) => {
      throw new Error(error)
    })
}
export default fetchUserInfo
