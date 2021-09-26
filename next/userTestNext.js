// 中间件
module.exports = (data)=> {
	return (req,res,next)=> {
		req.body.data = data;
		next();
	}
}