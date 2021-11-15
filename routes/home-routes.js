const express = require ('express')

const {indexView} = require('../controllers/homeController')
const router = express.Router()

router.get('/',indexView)

module.exports = {
    routes: router
}