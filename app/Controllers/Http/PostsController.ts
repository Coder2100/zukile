import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({ }: HttpContextContract) {
    const posts = await Post.all()
    return posts;
  }

  public async create ({}: HttpContextContract) {
  }

  public async store({ request}: HttpContextContract) {
    const data = request.only(['title', 'body'])
    const post = await Post.create(data)
    return post
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
