import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  //fetch total customers
  public async index({ response }: HttpContextContract) {

    const customerList = await Customer.all()
    response.status(200).json({
      message: "Below is the list of your customers.",
      data: customerList

    })
  }
//for form input data
  public async create ({}: HttpContextContract) {
  }

  public async store({ request, response, params: {} }: HttpContextContract) {
    const { name, description } = request.post()
   
    const customer = new Customer()
   // debugger
    customer.name = name
    customer.description = description
    await customer.save()
  
    response.status(201).json({
      message: "successfully created new customer",
      data: customer
      //data: customer.toJSON()
     
    })//handle validation here if using fullstack
     return response

  }

  public async show({response, params:{id} }: HttpContextContract) {
    //to fetch the single customer
    const customer = await Customer.find(id)
    if (customer) {
       response.json({
      message: 'Your individual customer',
      data: customer,
      id
    })
    } else {
      response.status(404).json({
        message: "Customer not found"
      })
    }
    

   
  }

  public async edit({ }: HttpContextContract) {
    //form submission for frontend
  }

  public async update({ request, response, params: { id } }: HttpContextContract) {
   
    const customer = await Customer.find(id)
    if (customer) {
      const { name, description } = request.post()
      
      customer.name = name
      customer.description = description

      await customer.save()
      response.status(200).json({
        message: 'successfully updated this customer',
        data:  customer
      })
    } else {
      response.status(404).json({
        message: 'customer not found',
        id
      })
    }
  }

  public async destroy({ response, params: { id } }: HttpContextContract) {
    const customer = await Customer.find(id)

    if (customer) {
      await customer.delete()

      response.status(200).json({
        message: 'customer deleted',
        id
      })
    } else {
      response.status(404).json({
        message: 'customer not found',
        id
      })
    }
  }
}
