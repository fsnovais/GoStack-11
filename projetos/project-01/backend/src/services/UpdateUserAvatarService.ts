import { getRepository } from 'typeorm'
import path from 'path';
import fs from 'fs';

import User from '../models/Users'
import uploadConfig from '../config/upload'


interface Request {
  user_id: string,
  avatarFilename: string
}

export default class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const userReposiory = getRepository(User)

    const user = await userReposiory.findOne(user_id);

    if (!user) {
      throw new Error('Only autenticated users can change avatar.')
    }
    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)
      const userAvatarFileExists = fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFilename;

    await userReposiory.save(user);

    return user;
  }
}
