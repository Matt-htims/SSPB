const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const propSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	number: {
		type: Number,
		required: true,
	},
	code: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	hireCost: {
		type: String,
		required: true,
	},
	_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'prop' },
});

propSchema.plugin(mongoosePaginate);

const Prop = mongoose.model('prop', propSchema);

module.exports = Prop;
