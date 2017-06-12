
import * as helpers from './helpers'

export const resolver_query = function () {
    return {
        group: helpers.getGroupDetails(),
        bots: helpers.getBots(),
        messages: helpers.getMessages(),
        wordCount: helpers.getWordCount(),
        lastSeen: helpers.getUserLastSeen(),
        heartCount: helpers.getHeartCount(),
    }
}