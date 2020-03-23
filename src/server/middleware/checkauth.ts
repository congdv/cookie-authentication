import { Request, Response, NextFunction } from 'express';

const checkAuth = async(req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.cookies?.accessToken
  console.log(accessToken);
  if(accessToken) {
    res.locals.accessToken = accessToken;
    next();
  } else {
    res.status(403).send({message: 'Forbidden Resource', status: 403});
  }
}

export default checkAuth;