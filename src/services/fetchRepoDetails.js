import errorHandling from "./errorHandling"

const fetchRepoDetails = (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then((response) => {
      if (!response.ok) {
        errorHandling(response)
      }
      response.json()
    })
    .catch((error) => {
      throw new Error(error)
    })
}
export default fetchRepoDetails
