const Router = require('koa-router')
const register = require('./routes/register')
const login = require('./routes/login')
const upload = require('./routes/upload')
const test = require('./routes/test')
const user = require('./routes/user')

const v1 = new Router({
    prefix: '/v1'
})

v1.use(register.routes(), register.allowedMethods())
v1.use(login.routes(), login.allowedMethods()) 
v1.use(upload.routes(), upload.allowedMethods())
v1.use(test.routes(), test.allowedMethods())
v1.use(user.routes(), user.allowedMethods())

module.exports = v1