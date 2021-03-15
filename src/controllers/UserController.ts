import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UserRepository'
import jwt from 'jsonwebtoken'

class UserController {
	async signup(req: Request, res: Response) {
		const { email, password } = req.body

		const userRepository = getCustomRepository(UserRepository)

		const userAlreadyExists = await userRepository.findOne({ where: { email } })

		if (userAlreadyExists)
			return res.status(400).json({ err: 'This email already exists !' })

		const createdUser = userRepository.create({ email, password })

		await userRepository.save(createdUser)

		return res.status(201).json({ message: 'User created succesfully !' })
	}

	async login(req: Request, res: Response) {
		const { email, password } = req.body

		const userRepository = getCustomRepository(UserRepository)

		const userExists = await userRepository.findOne({
			where: { email, password }
		})

		if (!userExists)
			return res.status(401).json({ err: 'Email/Password don´t exist !' })

		const token = jwt.sign(String(userExists.id), 'secret')

		return res.status(200).header('authToken', token).json({ token })
	}

	async showAll(req: Request, res: Response) {
		const userRepository = getCustomRepository(UserRepository)

		const allUsers = await userRepository.find()

		return res.status(200).json(allUsers)
	}
}

export { UserController }
