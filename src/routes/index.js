const express = require('express')

const categoriesRouter = require('./categories.router')
const productsRouter = require('./products.router')
const customerRouter = require('./customers.router')
const orderRouter = require('./orders.router')
const sellerRouter = require('./sellers.route')

function routerAPI (app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/customers', customerRouter)
  router.use('/orders', orderRouter)
  router.use('/sellers', sellerRouter)
}

module.exports = routerAPI
