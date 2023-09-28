const fetchRepoDetails = (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
}
export default fetchRepoDetails
