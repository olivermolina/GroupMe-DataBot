const resolvers = {
    Query: {
        author(_, args){
            return {id: 1, firstName: "John", lastName: "Doe"}
        },
    },

    Author: {
        posts(author) {
            return [
                {id: 1111, title: "123", text: "Good"},
                {id: 1112, title: "456", text: "Great"}
            ]
        }
    }

};

export default resolvers;