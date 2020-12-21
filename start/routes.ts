/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})
*/

import Route from '@ioc:Adonis/Core/Route'
/**
 * 
 * 
 * //import PostFactory
import { PostFactory } from 'Database/factories'

Route.get('create-post', async () => {
      await PostFactory.createMany(3)
})

Route.get('posts', 'PostsController.index')
Route.post('posts', 'PostsController.store')
 */
Route.on('/').render('welcome')

Route
      .resource('posts', 'PostsController')
      .apiOnly()
Route.resource('customers', 'CustomersController')
//.apiOnly()


