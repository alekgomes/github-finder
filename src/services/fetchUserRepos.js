const sortByStars = (repos) =>
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count)

const fetchUserRepos = (query) => {
  return fetch(`https://api.github.com/users/${query}/repos`)
    .then((response) => response.json())
    .then((repos) => sortByStars(repos))
    .catch((error) => console.error("Error:", error))
}
export default fetchUserRepos
