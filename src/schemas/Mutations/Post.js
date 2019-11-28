import { GraphQLString, GraphQLID, GraphQLList } from 'graphql'

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
			images: {
				type: new GraphQLList(InputImageType)
			}
		},
		async resolve(parent, args, { req: { user, authError } }) {
			try {
				if (authError) {
					throw new Error(authError)
				} else {
					const newPost = new Post({ ...args, contentCreatorId: user.id })
					const savedPost = await newPost.save()
					return savedPost;
				}

			} catch (e) {
				return e
			}
		}
	},
	updatePost: {
		type: PostType,
		args: {
			content: {
				type: GraphQLString
			},
			images: {
				type: new GraphQLList(InputImageType)
			},
			id: {
				type: GraphQLID
			}
		},
		async resolve(parent, args, { req: { user, authError } }) {
			try {
				const { id, ...rest } = args; 
				if (authError) {
					throw new Error(authError)
				} else {
					return await Post.findByIdAndUpdate({ _id: id }, rest)
				}
			} catch (e) {
				return e
			}
		}
	}
}

export default PostMutation