const router = require("koa-router")();

router.get("/",async (ctx,next) => {
    ctx.response.body = "hello index page";
});
router.get("/login",async (ctx,next) => {
    var obj = [{
                    name:"产品评审",
                    description:"新款iPhone上市前评审"
                },{
                    name:"开发计划",
                    description:"与PM确定下一版Android开发计划"
                },{
                    name:"VC会议",
                    description:"敲定C轮5000万美元融资"
                }];
    ctx.response.body = obj; 
});

module.exports = function(){
    return router.routes();
}