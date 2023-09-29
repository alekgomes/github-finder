const fetchRepoDetails = (user, repo) => {
  return fetch(`https://api.github.com/repos/${user}/${repo}`)
    .then((response) => response.json())
    .catch((error) => {
      throw new Error(error)
    })
}
export default fetchRepoDetails
