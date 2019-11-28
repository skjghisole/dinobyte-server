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
			contentCreatorId: {
				type: GraphQLID
			},
			images: {
				type: new GraphQLList(InputImageType)
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
		async resolve(parent, args) {
			const { id, ...rest } = args; 
			return await Post.findByIdAndUpdate({ _id: id }, rest)
		}
	}
}

export default PostMutation