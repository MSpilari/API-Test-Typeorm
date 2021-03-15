import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { ProjectRepository } from '../repositories/ProjectRepository'
import jwt from 'jsonwebtoken'

class ProjectController {
	async createProject(req: Request, res: Response) {
		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const { name, naversId } = req.body

		const projectRepository = getCustomRepository(ProjectRepository)

		const projectAlreadyExists = await projectRepository.findOne({
			where: { name, userId, naversId }
		})

		if (projectAlreadyExists)
			return res.status(400).json({ err: 'This project already exists !' })

		const createdProject = projectRepository.create({
			name,
			userId,
			naversId
		})

		await projectRepository.save(createdProject)

		return res.status(201).json(createdProject)
	}

	async allProjects(req: Request, res: Response) {
		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const query = req.query

		const filters = Object.assign(query, { userId })

		const projectRepository = getCustomRepository(ProjectRepository)

		const projects = await projectRepository.find({ where: filters })

		return res.status(200).json(projects)
	}

	async updateProject(req: Request, res: Response) {
		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const projectRepository = getCustomRepository(ProjectRepository)

		const { id, name, naversId } = req.body

		const oldProject = await projectRepository.findOne({
			where: { userId, id }
		})

		if (!oldProject)
			return res.status(400).json({ err: 'This project don´t exist !' })

		const newProject = {
			name: name || oldProject.name,
			naversId: naversId || oldProject.naversId
		}

		await projectRepository.update({ id, userId }, newProject)

		const updatedProject = await projectRepository.findOne({
			where: { userId, id }
		})

		return res.status(200).json(updatedProject)
	}

	async deleteProject(req: Request, res: Response) {
		const id = Number(req.params.id)

		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const projectRepository = getCustomRepository(ProjectRepository)

		const projectExists = await projectRepository.findOne({
			where: { id, userId }
		})

		if (!projectExists)
			return res.status(400).json({ err: 'This project don´t exists' })

		await projectRepository.delete({ id, userId })

		return res.status(200).json({ message: 'Project deleted succesfully !' })
	}

	async singleProject(req: Request, res: Response) {
		const id = Number(req.params.id)

		const token = String(req.header('authToken'))

		const userId = Number(jwt.decode(token))

		const projectRepository = getCustomRepository(ProjectRepository)

		const singleProject = await projectRepository.findOne({
			where: { id, userId },
			relations: ['navers']
		})

		if (!singleProject)
			return res.status(400).json({ err: 'This project don´t exists' })

		return res.status(200).json(singleProject)
	}
}

export { ProjectController }
