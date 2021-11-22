'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProyectoSchema extends Schema {
  up () {
    this.create('proyectos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('proyectos')
  }
}

module.exports = ProyectoSchema
