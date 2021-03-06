require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
	return mongoose.connect(
		process.env.DB_URL_LOCAL,
		{
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true
		},
		(e, conn) => {
			if (e) console.log(e);
			console.log('connected to DB');
		}
	);
};
