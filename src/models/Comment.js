import mongoose from 'mongoose'

const { Schema, model, Types: { ObjectId } } = mongoose

const CommentSchema = new Schema({
	commentorId:{
		type: ObjectId,
	},
	content: {
		type: String,
		required: true,
		default: ''
	},
	email: {
		type: String,
	},
	subject: {
		type: String
	}
}, {
	strict: true,
	timestamps: {
		createdAt: 'createdAt',
		updatedAt: 'updatedAt'
	}
})

export default model('Comment', CommentSchema)