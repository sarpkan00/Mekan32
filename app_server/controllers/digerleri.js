
/* GET home page. */

const hakkinda=function(req, res, next) {
  res.render('hakkinda', { title: 'Hakkında','footer': 'Sarpkan Savaşkan 2020', });
}
module.exports={
	hakkinda
}
