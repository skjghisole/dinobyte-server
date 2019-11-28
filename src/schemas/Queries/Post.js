import { GraphQLID } from 'graphql';
import { PostType } from '../Types'

import { Post } from '../../models'

const PostMutation = {
	posts: {
		type: PostType,
		async resolve() {
			return await Post.find({})
		}
	},
	post: {
		type: PostType,
		args: {
			id: {
				type: GraphQLID
			}
		},
		async resolve(parent, { id }) {
			return await Post.findById(id);
		}
	}
}

export default PostMutation