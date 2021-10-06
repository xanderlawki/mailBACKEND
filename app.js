
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv")
const app = express();

dotenv.config()
const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Listening on port ${port}...`));
mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
		useCreateIndex: true, 
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.error('Could not connect to MongoDB...'));
