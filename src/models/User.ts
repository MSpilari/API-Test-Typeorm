import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity('Users')
class User {
	@PrimaryGeneratedColumn('increment')
	readonly id: number

	@Column()
	email: string

	@Column()
	password: string

	@CreateDateColumn()
	createdAt: Date
}

export { User }
