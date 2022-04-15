const fs = require("fs");

fs.copyFile("./Public/production/ptDelivery/earn/earn.html","./res/ptDelivery/earn/earn.html",err=>console.log(err))
fs.copyFile("./Public/production/ptDelivery/earn/earn.js","./res/ptDelivery/earn/earn.js",err=>console.log(err))

fs.copyFile("./Public/production/ptDelivery/order/order.html","./res/ptDelivery/order/order.html",err=>console.log(err))
fs.copyFile("./Public/production/ptDelivery/order/order.js","./res/ptDelivery/order/order.html",err=>console.log(err))

fs.copyFile("./Public/production/ptDelivery/login/login.html","./res/ptDelivery/login/login.html",err=>console.log(err))
fs.copyFile("./Public/production/ptDelivery/login/login.js","./res/ptDelivery/login/login.js",err=>console.log(err))

fs.copyFile("./Public/production/ptDelivery/settings/settings.html","./res/ptDelivery/settings/settings.html",err=>console.log(err))
fs.copyFile("./Public/production/ptDelivery/settings/settings.js","./res/ptDelivery/settings/settings.js",err=>console.log(err))