import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name')
      table.text('description')
      /**
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects_id').onDelete('cascade')
       */
      table.integer('project_id').unsigned()
      table
        .foreign('project_id')
        .references('projects.id')
        .onDelete('cascade')
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

//challenge
/**
 * column for due date-project
 * task due date
 * project manager/assign to a customer
 * add column to existing table
 * associate project mamanger with customer/project
 */
