const { to, ReE, ReS } = require('../services/util.service');

const Dashboard = function(req, res){
	let user = req.user.id;
	return res.json({success:true, message:'it worked', data:'user name is :'});
}

module.exports.Dashboard = Dashboard

const config = function (req, res) {
	return ReS(res, {
		password: '123456',
		apps: [
			"com.android.camer2", 
			"com.android.chrome", 
			"com.android.contacts", 
			"com.android.settings", 
			"com.google.android.apps.docs", 
			"com.google.android.apps.maps", 
			"com.google.android.apps.messaging", 
			"com.google.android.apps.photos", 
			"com.google.android.calendar", 
			"com.google.android.deskclock", 
			"com.google.android.dialer", 
			"com.google.android.gm", 
			"com.google.android.music", 
			"com.google.android.videos", 
			"com.google.android.youtube", 
			"com.android.calculator2", 
			"com.android.documentsui", 
			"com.google.android.apps.wallpaper", 
			"com.google.android.googlequicksearchbox", 
			"com.google.android.googlequicksearchbox", 
			"org.chromium.webview_shell"
		]
	})	
}
module.exports.config = config