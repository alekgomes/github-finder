export default function (error) {
  console.log(error)
  switch (error.status) {
    case 404: {
      throw `Usuário não encontrado`
    }
    case 403: {
      throw `Limite de requisição excedido`
    }
    default: {
      throw new Error(`GitHub API Request Failed: ${error.status}`)
    }
  }
}
