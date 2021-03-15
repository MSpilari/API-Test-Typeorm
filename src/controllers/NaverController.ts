import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { NaverRepository } from '../repositories/NaverRepository'
import jwt from 'jsonwebtoken'

class NaverController {
	async createNaver(req: Request, res: Response) {
		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const { name, birthdate, admissionDate, jobRole, projectsId } = req.body

		const naverRepository = getCustomRepository(NaverRepository)

		const naverAlreadyExists = await naverRepository.findOne({
			where: { name, birthdate, admissionDate, jobRole, projectsId, userId }
		})

		if (naverAlreadyExists)
			return res.status(400).json({ err: 'This naver already exists !' })

		const createdNaver = naverRepository.create({
			name,
			birthdate,
			admissionDate,
			jobRole,
			projectsId,
			userId
		})

		await naverRepository.save(createdNaver)

		return res.status(201).json(createdNaver)
	}

	async allNavers(req: Request, res: Response) {
		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const query = req.query

		const filters = Object.assign(query, { userId })

		const naverRepository = getCustomRepository(NaverRepository)

		const navers = await naverRepository.find({ where: filters })

		return res.status(200).json(navers)
	}

	async updateNaver(req: Request, res: Response) {
		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const naverRepository = getCustomRepository(NaverRepository)

		const { id, name, birthdate, admissionDate, jobRole, projectsId } = req.body

		const oldNaver = await naverRepository.findOne({
			where: { userId, id }
		})

		if (!oldNaver)
			return res.status(400).json({ err: 'This naver don´t exist !' })

		const newNaver = {
			name: name || oldNaver.name,
			birthdate: birthdate || oldNaver.birthdate,
			admissionDate: admissionDate || oldNaver.admissionDate,
			jobRole: jobRole || oldNaver.jobRole,
			projectsId: projectsId || oldNaver.projectsId
		}

		await naverRepository.update({ id, userId }, newNaver)

		const updatedNaver = await naverRepository.findOne({
			where: { userId, id }
		})

		return res.status(200).json(updatedNaver)
	}

	async deleteNaver(req: Request, res: Response) {
		const id = Number(req.params.id)

		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const naverRepository = getCustomRepository(NaverRepository)

		const naverExists = await naverRepository.findOne({ where: { id, userId } })

		if (!naverExists)
			return res.status(400).json({ err: 'This naver don´t exists' })

		await naverRepository.delete({ id, userId })

		return res.status(200).json({ message: 'Naver deleted succesfully !' })
	}

	async singleNaver(req: Request, res: Response) {
		const id = Number(req.params.id)

		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const naverRepository = getCustomRepository(NaverRepository)

		const singleNaver = await naverRepository.findOne({
			where: { id, userId },
			relations: ['projects']
		})

		if (!singleNaver)
			return res.status(400).json({ err: 'This naver don´t exists' })

		return res.status(200).json(singleNaver)
	}
}

export { NaverController }
