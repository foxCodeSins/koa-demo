const KoaRouter = require('koa-router')
const User = require('../model/user')
const Response = require('../common/response')

const router = new KoaRouter({
    prefix: '/user'
})

router.get('/', async (ctx) => {

    try {
        const res = await User.find().exec()
        if(res) {
            ctx.body = Response.success({ data: res })
        } else {
            ctx.body = Response.success({ data: [] })
        }
        
    } catch (error) {
        ctx.body = Response.error()
    }

})

module.exports = router