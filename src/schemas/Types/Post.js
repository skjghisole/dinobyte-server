import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql'

import { ImageType } from '../'

const PostType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		id: { type: GraphQLID },
		content: {
			type: GraphQLString
		},
		contentCreatorId: {
			type: GraphQLID
		},
		images: {
			type: new GraphQLList(ImageType)
		},
		title: {
			type: GraphQLString
		}
	})
})

export default PostType;