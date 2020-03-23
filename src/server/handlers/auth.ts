import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const thirtyDayCookie = {
  maxAge: 60 * 60 * 1000 * 24 * 30,
  secure: false,
  httpOnly: true,
  sameSite: true,
}

const auth = (req: Request, res: Response) => {
  const { code } = req.query;

  const userForToken = {
    code: code,
  };
  const accessToken = jwt.sign(userForToken, 'SECRET');
  res.cookie('accessToken',accessToken, thirtyDayCookie);
  return res.status(200).send({message: "Successfully authorization"})
}

const unauth = (_req: Request, res: Response) => {
  res.clearCookie('accessToken');
  res.status(200).send({message: 'Successfully unauthorization'})
}

const dashboard = (_req: Request, res: Response, _next: NextFunction) => {
  const {accessToken} = res.locals;
  const decodedToken: Token = jwt.verify(accessToken,'SECRET') as Token;
  res.status(200).send({message: "Successfully dashboard " + decodedToken.code})
}

interface Token {
  code: string
}
export default {
  auth,
  unauth,
  dashboard
}