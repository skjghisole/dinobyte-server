import {
	GraphQLObjectType,
} from 'graphql'

import {
	UserQueries,
	PostQueries
} from './'

const fields = {
	...UserQueries,
	...PostQueries
}

const QueryType = new GraphQLObjectType({
	name: 'QueryType',
	fields,
})

export default QueryType