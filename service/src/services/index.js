const Admin_services = require('./Admin');
const Article_services = require('./Article');

// Article_services.add({
//     Admin_id : 1, 
//     Article_title : "hello world",
//     Article_url : 'http://www.xxx.xxx.com',
//     Article_brief : '这是我的第一篇文章',
//     Article_labels : [
//         {name : 'javascript'},
//         {name : 'mysql'}
//     ]
// }).then(data=>{
//     console.log(data);
// })
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

// Admin_services.get(9).then( data=>{
//     console.log(data);
// } )