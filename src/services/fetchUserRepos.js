const fetchUserRepos = (query) => {
  return fetch(`https://api.github.com/users/${query}/repos`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
}
export default fetchUserRepos
