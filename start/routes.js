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
}).prefix('api/v1')

