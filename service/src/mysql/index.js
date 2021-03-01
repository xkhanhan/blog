const sequelize = require('./db'); // 导入连接
require('./model/Admin'); // 建立表关系
require('./model/Article');
require('./model/User');

sequelize.sync({ force: true });


