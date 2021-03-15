import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { Project } from './Project'

@Entity('Navers')
class Naver {
	@PrimaryGeneratedColumn('increment')
	readonly id: number

	@Column()
	name: string

	@Column()
	birthdate: string

	@Column()
	admissionDate: string

	@Column()
	jobRole: string

	@Column()
	projectsId: number

	@Column()
	userId: number

	@CreateDateColumn()
	createdAt: Date

	@OneToMany(() => Project, project => project.navers)
	@JoinColumn({ name: 'id', referencedColumnName: 'projectsId' })
	projects: Project[]
}

export { Naver }
