import { resolver_query } from './resolver_query';
import { groupRelationship } from './relationship';

const resolvers = {
    Query: resolver_query(),
    Group: groupRelationship()
};

export default resolvers;