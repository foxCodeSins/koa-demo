const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const { v1 } = require("../services");
const mongoose = require("mongoose");
const KoaBody = require('koa-body')
const session = require('koa-session')
const KoaSwagger = require('koa2-swagger-ui')

mongoose.set('debug', true);

mongoose.connect('mongodb://test:123456@localhost:27017/koa?authSource=admin', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", error => {
  console.log("mongo db connect error =>", error);
});

db.on("open", (error) => {
  console.log('db open on')
})

db.on("connected", () => {
  console.log("mongo db connected");
});

db.on("disconnected", () => {
  console.log("Mongo disconnected");
});

db.on("error", (error) => {
  console.log("mongo error ", error)
})

const app = new Koa(); 


/************session***************/
app.keys = ['some secret hurr']
const CONFIG = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 100000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
  // secure: true, /** (boolean) secure cookie*/
  // sameSite: null, /** (string) session cookie sameSite options (default null, don't set it) */
};


app.use(session(CONFIG, app))

app.use(async (ctx, next) => {
  console.log('ctx ===========>', ctx)
  console.log('ctx ===========>', ctx.session._sessCtx.valid(ctx.session))                    
  if (!/login/.test(ctx.url)) {
    if (!ctx.session.username) {
      ctx.throw(JSON.stringify({
        code: 'C401',
        message: '未登录',
        data: {}
      }), 401)
      return
    }
  }

  await next()
});


/**************************** */

// app.use(bodyParser());
app.use(KoaBody({
  multipart: true,
}))

app.use(v1.routes());

app.use(KoaSwagger({
  routePrefix: '/swagger',
  // swaggerOptions: {
  //   url: 'http://petstore.swagger.io/v2/swagger.json', // example path to json
  // },
}))

app.listen(3001);
