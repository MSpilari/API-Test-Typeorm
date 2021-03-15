import express from 'express'
import { auth } from '../utils/auth'
import { NaverController } from './controllers/NaverController'
import { ProjectController } from './controllers/ProjectController'
import { UserController } from './controllers/UserController'

const router = express.Router()

const userController = new UserController()
const naverController = new NaverController()
const projectController = new ProjectController()

// Public Routes
router.post('/signup', userController.signup)
router.post('/login', userController.login)
router.get('/allusers', userController.showAll)

// Private Routes

// Navers Routes
router.post('/naver', auth, naverController.createNaver)

// This route accept query params to filter your search
router.get('/naver', auth, naverController.allNavers)

// This route returns a join of projects that belongs to the naver
router.get('/naver/:id', auth, naverController.singleNaver)

router.patch('/naver', auth, naverController.updateNaver)
router.delete('/naver/:id', auth, naverController.deleteNaver)

// Project Routes
router.post('/project', auth, projectController.createProject)

// This route accept query params to filter your search
router.get('/project', auth, projectController.allProjects)

// This route returns a join of navers that belongs to the project
router.get('/project/:id', auth, projectController.singleProject)

router.patch('/project', auth, projectController.updateProject)
router.delete('/project/:id', auth, projectController.deleteProject)

export { router }
