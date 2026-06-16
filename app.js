const express = require("express");
const userRoutes = require('./src/router/user.route');
const productRoutes = require('./src/router/product.route');

const app = express();
app.use(express.json());
app.use((err, req, res, next) => {
	if (err && err.type === 'entity.parse.failed') {
		return res.status(400).json({ success: false, error: 'Invalid JSON' });
	}
	next(err);
});
app.use('/api', userRoutes);
app.use('/api', productRoutes);

module.exports = app;
