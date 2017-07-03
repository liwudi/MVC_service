let fun_get = async (ctx,next) => {
    ctx.response.body = "index page!";
}



module.exports = {
    "GET /": fun_get
}