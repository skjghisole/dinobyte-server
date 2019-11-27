import { GraphQLString, GraphQLID } from 'graphql'

import {
	InputImageType,
	PostType
} from '../Types'

import {
	Post
} from '../../models'

const PostMutation = {
	addPost: {
		type: PostType,
		args: {
			content: {
				type: GraphQLString
			},
			contentCreatorId: {
				type: GraphQLID
			},
			images: {
				type: InputImageType
			}
		},
		async resolve(parent, args) {
			try {
				const newPost = new Post(args)
				const savedPost = await newPost.save()
				return savedPost;
			} catch (e) {
				return e
			}
		}
	}
}

export default PostMutation