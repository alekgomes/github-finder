import errorHandling from "./errorHandling"

const sortByStars = (repos) =>
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count)

const fetchUserRepos = (query) => {
  return fetch(`https://api.github.com/users/${query}/repos`)
    .then((response) => {
      if (!response.ok) {
        errorHandling(response)
      }
      return response.json()
    })
    .then((repos) => sortByStars(repos))
    .catch((error) => {
      throw new Error(error)
    })
}
export default fetchUserRepos
