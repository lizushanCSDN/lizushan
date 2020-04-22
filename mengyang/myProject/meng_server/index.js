const Koa = require('koa');
const Cors = require('koa2-cors');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const cloud = require('tcb-admin-node');

//初始化koa（nodejs 框架）
const app = new Koa();

//初始化路由
const router = new Router({
  prefix:'/fellow'
})

//小程序初始化
cloud.init({
  secretId:"AKIDtZy97QjIrBEzd4Ig5B0a7OWP0c2H62b1",
  secretKey:"MTN4UdohKn12lFSpzpWt3xaS3NO75mFO",
  env:"mengyang-lwez7"
})

//解决跨域问题cors
app.use(Cors({
  orign:function(ctx){
    return ['http://localhost:9528']
  },
  maxAge:5,
  credentials:true
}))

//格式化请求参数
app.use(KoaBody());


// http://localhost:3000/fellow/user/login
//根据路由请求匹配控制器
let user = require('./controller/user.js');
let student = require('./controller/student.js');
router.use("/user",user.routes());
router.use("/student",student.routes());

//使用路由
app.use(router.routes());

app.listen(3000);