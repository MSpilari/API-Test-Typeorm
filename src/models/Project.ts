import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from 'typeorm'
import { Naver } from './Naver'

@Entity('Projects')
class Project {
	@PrimaryGeneratedColumn('increment')
	id: number

	@Column()
	name: string

	@Column()
	naversId: number

	@Column()
	userId: number

	@CreateDateColumn()
	createdAt: Date

	@ManyToOne(() => Naver, naver => naver.projects)
	navers: Naver[]
}

export { Project }
