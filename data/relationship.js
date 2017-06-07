
export const groupRelationship = () => {
    return {
        async members(group){
            return group.members;
        }
    }
}