const fetchUserInfo = (query) => {
  return fetch(`https://api.github.com/users/${query}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
}
export default fetchUserInfo
