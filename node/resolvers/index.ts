import {
  mutations as schedulerMutations,
} from './scheduler'

export const resolvers = {
  Mutation: {
    ...schedulerMutations,
  },
  Query: {

  }
}
