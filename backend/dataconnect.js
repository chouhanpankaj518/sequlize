import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('coustomer', 'root', 'Pankaj@123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()


export default sequelize;
