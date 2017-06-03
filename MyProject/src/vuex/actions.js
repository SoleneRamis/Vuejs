// export const setCounterState = function ({ commit }) {
//   dispatch('INCREMENT')
// }
export const setCounterState = ({ commit, state }) => {
  commit('increment')
}
