'use strict'

const { RouteGroup } = require('@adonisjs/framework/src/Route/Manager')



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.post('users/register', 'UserController.store')
  Route.post('users/login', 'UserController.login')
  Route.get('proyectos','ProyectoController.index').middleware('auth')
  Route.post('proyectos','ProyectoController.create').middleware('auth')
  Route.delete('proyectos/:id','ProyectoController.destroy').middleware('auth')
  Route.patch('proyectos/:id','ProyectoController.update').middleware('auth')
  //tareas 
  Route.post('proyectos/:id/tareas','TareaController.store').middleware('auth')
  Route.get('proyectos/:id/tareas','TareaController.index').middleware('auth')

  Route.delete('tareas/:id','TareaController.destroy').middleware('auth')
  Route.patch('tareas/:id','TareaController.update').middleware('auth')
}).prefix('api/v1')

