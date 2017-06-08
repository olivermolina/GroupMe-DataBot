
export const groupRelationship = () => {
    return {
        async members(data){
            return data.members;
        }
    }
}

export const messagesRelationship = () => {
    return {
        async messages(data){
            return data.messages;
        }
    }
}