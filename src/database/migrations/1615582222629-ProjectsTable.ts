import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class ProjectsTable1615582222629 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'Projects',
				columns: [
					{
						name: 'id',
						type: 'integer',
						isPrimary: true,
						isGenerated: true,
						generationStrategy: 'increment'
					},
					{
						name: 'name',
						type: 'varchar',
						isNullable: false
					},
					{
						name: 'naversId',
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
					},
					{
						name: 'FKNaver',
						referencedTableName: 'Navers',
						referencedColumnNames: ['id'],
						columnNames: ['naversId'],
						onDelete: 'CASCADE',
						onUpdate: 'CASCADE'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {}
}
