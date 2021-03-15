import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const auth = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('authToken')

	if (!token)
		return res.status(403).json({ err: 'You don´t have access to this route' })

	const isValidToken = jwt.verify(token, 'secret')

	if (!isValidToken)
		return res.status(403).json({ err: 'Your token is no longer valid' })

	return next()
}

export { auth }
