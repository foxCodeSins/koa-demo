const KoaRouter = require('koa-router')
const User = require('../model/user') 

const router = new KoaRouter({
    prefix: '/register'
})

router.post('/', async (ctx) => {
    const { username = '', password = '', name = '', age, sex } = ctx.request.body
    try {
        const user = new User({
            username,
            password,
            name,
            age,
            sex
        })
        await user.save()
        ctx.status = 200
        ctx.body = '注册成功'
    } catch (error) {
        ctx.throw(400, error.message)
    }
})

module.exports = router