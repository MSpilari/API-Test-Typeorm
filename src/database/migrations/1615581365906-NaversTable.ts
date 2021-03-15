import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class NaversTable1615581365906 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Navers',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isPrimary: true,
						generationStrategy: 'increment',
						isGenerated: true
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'birthdate',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'admissionDate',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'jobRole',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'projectsId',
						type: 'integer',
						isNullable: false
					},
					{
						name: 'userId',
						type: 'integer',
						isNullable: false
					},
					{
						name: 'createdAt',
						type: 'timestamp',
						default: 'now()'
					}
				],
				foreignKeys: [
					{
						name: 'FKUser',
						referencedTableName: 'Users',
						referencedColumnNames: ['id'],
						columnNames: ['userId'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('Navers')
	}
}
