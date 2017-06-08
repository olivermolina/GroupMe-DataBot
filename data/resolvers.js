import { resolver_query } from './resolver_query';
import { resolver_mutations } from './resolver_mutation';
import { groupRelationship, messagesRelationship} from './relationship';
const resolvers = {
    Query: resolver_query(),
    Mutation: resolver_mutations(),
    Group: groupRelationship(),
    MessageSummary: messagesRelationship()
};

export default resolvers;