const Prop = require('../models/Prop');

const getAllProps = async (req, res) => {
	Prop.paginate({}, { page: req.query.p, limit: 30 }, (err, result) => {
		if (err) {
			console.error(err);
			res.status(500).json({ message: 'Server Error' });
		} else {
			res.json(result);
		}
	});

	// try {
	// 	const props = await Prop.find({});

	// 	res.json(props);
	// } catch (error) {
	// 	console.error(error);
	// 	res.status(500).json({ message: 'Server Error' });
	// }
};

const getPropsByCat = async (req, res) => {
	Prop.paginate(
		{ type: req.query.q },
		{ page: req.query.p, limit: 30 },
		(err, result) => {
			if (err) {
				console.error(err);
				res.status(500).json({ message: 'Server Error' });
			} else {
				res.json(result);
			}
		}
	);

	// try {
	// 	const props = await Prop.find({ type: req.query.q });

	// 	res.json(props);
	// } catch (error) {
	// 	res.status(500).json({ message: 'Server Error' });
	// }
};

const getPropById = async (req, res) => {
	try {
		const prop = await Prop.findById(req.params.id);

		res.json(prop);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

module.exports = {
	getAllProps,
	getPropsByCat,
	getPropById,
};
