const Router = require('koa-router')

const router = new Router({
    prefix: '/test'
})

router.get('/session', (ctx) => {
    console.log('/session', ctx.session.valid)
    ctx.body = 'session'
    ctx.status = 200
})

module.exports = router
