const Admin_services = require('./Admin');
const Article_services = require('./Article');

Admin_services.add({
    Admin_name : 'Admin_one',
    Admin_pass : 'Admin_one',
    Admin_info : {
        name : '小徐不秃头',
        sex : 1,
        birthday : '2001-01-06',
        qq : 1427742566,
        e_mail : '1427742566@qq.com',
        address : '江西南昌',
    },
}).then(data => {
     console.log(data);
});
