import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose

const PostSchema = new Schema({
	contentCreatorId:{
		type: ObjectId,
		required: true
	},
	content: {
		type: String,
		required: true,
		default: ''
	},
	images: [{
		imageSrc: String
	}],
	title: {
		type: String
	}
}, {
	strict: true,
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})

export default model('Post', PostSchema)