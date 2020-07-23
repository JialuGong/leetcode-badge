const Koa = require('koa')
const badge=require('./badge')

const app = new Koa();

app.use(async (ctx, next) => {
    let url = ctx.path
    let [u,username, type] = url.split("/")
    let leetcodeBadge = await badge(type,username)
    ctx.body = leetcodeBadge

})

console.log(`run on http://localhost:3000`)
app.listen(3000)
