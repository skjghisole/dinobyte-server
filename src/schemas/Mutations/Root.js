import {
	GraphQLObjectType,
} from 'graphql'

import {
	UserMutations,
	PostMutations
} from './'

const fields = {
	...UserMutations,
	...PostMutations
}

const MutationType = new GraphQLObjectType({
	name: 'MutationType',
	fields
})

export default MutationType