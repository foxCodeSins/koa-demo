const KoaRouter = require('koa-router')
const User = require('../model/user') 
const { success, error } = require('../common/response')

const router = new KoaRouter({
    prefix: '/register'
})

router.post('/', async (ctx) => {
    const { username = '', password = '', name = '', age, sex } = ctx.request.body
    try {
        const res = await User.findOne({ username })
        if(res) {
            ctx.body = error({ msg: '用户名已存在' })
        } else {
            const user = new User({
                username,
                password,
                name,
                age,
                sex
            })
            await user.save()
            ctx.body = success({ msg: '注册成功' })
        }
        ctx.status = 200
    } catch (error) {
        console.log('------> register',error)
        // ctx.throw(400, error.message)
        ctx.body = error()
    }
})

module.exports = router