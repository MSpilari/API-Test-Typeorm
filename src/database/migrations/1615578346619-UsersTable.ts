import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class UsersTable1615578346619 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Users',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'email',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'password',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'createdAt',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('Users')
	}
}
