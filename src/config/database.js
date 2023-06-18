import sequelize from './connection.js';
import SellNow from "../model/sellnow-model.js";
import User from "../model/user-model.js";

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await SellNow.sync({alter:true})
    await User.sync({})
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase();