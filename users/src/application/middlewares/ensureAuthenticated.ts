import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import auth from "../../config/auth"

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  if(!authToken) return response.status(401).json("Invalid token")
  const [ , token ] = authToken.split(" ")
  try {
    const sub = verify(token, auth.secret)
    return next()
  } catch (error) {
    return response.status(401).json("Invalid token")
  }
}