interface createUserTech {
  name: string,
  experience: number
}

interface createUserData {
  name ?: string,
  email: string,
  password: string,
  techs: Array<string | createUserTech>;
}

export default function createUser({name = '', email, password, techs}: createUserData) {
  const user = {
    name,
    email,
    password,
    techs
  }
  return user
}