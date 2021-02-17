import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import auth from '../config/auth'

interface TokenPayload {
  iat: number,
  exp: number,
  sub: string
}

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("JWT token is missing;")
  }
  const [, token] = authHeader.split(' ')

  const { secret } = auth.jwt
  try {
    const decoded = verify(token, secret)

    const { sub } = decoded as TokenPayload

    request.user = {
      id: sub
    }

    return next();
  } catch (err) {
    throw new Error('Invalid JWT token');
  }
}
