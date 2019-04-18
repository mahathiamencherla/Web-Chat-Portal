

var http = require('http');
var urlencode = require('urlencode');


function generateOTP() { 
          
    var digits = '0123456789'; 
    let OTP = ''; 
    for (let i = 0; i < 6; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    } 
    return OTP; 
} 

var otp= generateOTP(); 



var msg = urlencode('Enter this OTP: ' + otp);
var toNumber = '919743039381';
var username = 'mahathiamencherla15@gmail.com';
var hash = 'a491ba09a067e4186d490b1c5bd0adb130ac413a0c08f4aac3b8772775c7bdd1'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
var sender = 'txtlcl';
var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + msg;
var options = {
  host: 'api.textlocal.in', path: '/send?' + data
};
callback = function (response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log(str);
  });
}
http.request(options, callback).end();