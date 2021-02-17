import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'

import User from '../models/Users'

import AppError from '../errors/AppError'

interface UserIterface {
  name: string,
  email: string,
  password: string
}

class CreateUserService {
  public async execute({name, email, password} : UserIterface): Promise<User>{
    const usersRepository = getRepository(User);


    const checkDouplicatedEmail = await usersRepository.findOne({
      where: {email}
    });
    if (checkDouplicatedEmail){
      throw new AppError('This email is already taken')
    }
    const hashedPassword = await hash(password, 8);
    const user = usersRepository.create( {
      name,
      email,
      password: hashedPassword
    })

    await usersRepository.save(user)

    return user;
  }
}

export default CreateUserService;
