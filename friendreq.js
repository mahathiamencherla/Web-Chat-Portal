


var nodemailer=require('nodemailer');


User.findOne({username:"mahathi"},function(err,user){
    if(err){
        console.log(err);
    }
    else{
        emailid=user.email;

		let transporter = nodemailer.createTransport({
			service:'gmail',
			secure: false,
			port:25,
			auth: {
				user: 'acmschatportal@gmail.com',
				pass: 'mahathi'

			},
			tls: {
				rejectUnauthorized: false
			}

		});
		let HelperOptions = {
			from: '"Testing ACMS" <acmschatportal@gmail.com',
			to: emailid,
			subject: 'Friend requests/Connections',
			html: 'mahathi has sent you a friend request! Click here to <a href= "login.html">accept</a> or <a href= "login.html">decline</a>'

		};

		transporter.sendMail(HelperOptions,(err,info)=> {
			if(err){
				console.log(err);
			}
			console.log("Mail sent");
			console.log(info);
		});
	}	
});