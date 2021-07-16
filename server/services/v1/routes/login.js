const KoaRouter = require('koa-router')
const User = require('../model/user')
const Response = require('../common/response')

const router = new KoaRouter({
    prefix: '/login'
})

router.post('/', async (ctx) => {
    try {
        console.log('login 0')
        const { username, password } = ctx.request.body
        console.log('login 1')
        const res = await User.findOne({username})
        console.log('login 2')
        if(res) {
            if(res.password === password) {
                ctx.body = Response.success({ msg: '登录成功' })
                ctx.session.username = res.username
            }else {
                ctx.body = Response.success({ msg: '密码错误' })
            }
        } else {
            ctx.body = Response.error({ msg: '用户名不存在' })
        }
    } catch (error) {
        ctx.throw(401)
    }
})

module.exports = router