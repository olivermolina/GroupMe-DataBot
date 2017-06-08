
import * as helpers from './helpers'

export const resolver_mutations = function () {
    return {
        sendBotMessage: helpers.sendBotMessage()
    }
}