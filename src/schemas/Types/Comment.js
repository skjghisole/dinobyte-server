import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'

const CommentType = new GraphQLObjectType({
	name: 'Comment',
	fields: () => ({
		id: { type: GraphQLID },
		content: {
			type: GraphQLString
		},
		subject: {
			type: GraphQLString
		},
		commentorId: {
			type: GraphQLID
		},
		email: {
			type: GraphQLString
		}
	})
})

export default CommentType;