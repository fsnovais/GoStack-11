import {Request, Response } from 'express';
import createUser from './services/CreateUser';

export default function UserData(request:Request, response:Response) {
  const user = createUser({
    name: 'Felipe',
    email: "fellipesn17@gmail.com",
    password: "12343",
    techs: ["Js", "React", 
    {name: "Python" , experience: 100
    }]
  });

  return response.json(user);
}