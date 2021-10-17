const nodemailer=require('nodemailer');
// https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHBobWxCZmk5NWRwRVZoQWJRRTFRZ2xMWXcwQXxBQ3Jtc0ttb0tDbkZTRHpmSkpFVHc4d2Q3QmdQa29ZVDF6LWJOWHBqUGpSSkstTzYyUU9QV1hpd3IwMUg4bjQzVGlDOS1iTnRvYXN2NFN2SWFSaFZtc2JzYnJ3SzFaaWhNS3B5aXd3TlZQYjktWjk4NVN6OXBlTQ&q=https%3A%2F%2Fmyaccount.google.com%2Flesssecureapps
// upsid link abour nodemiller on our server and then msg.
require('dotenv').config()
const transpoter=nodemailer.createTransport({
    host:process.env.host,
    posrt:process.env.posrt,
    secure:false,
    requireTLS:true,
    auth:{
        user:process.env.user,
        pass:process.env.pass
    }
});

module.exports=transpoter;