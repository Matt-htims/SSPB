const Prop = require('../models/Prop');

const getAllProps = async (req, res) => {
	try {
		const props = await Prop.find({});

		res.json(props);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
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
	getPropById,
};
