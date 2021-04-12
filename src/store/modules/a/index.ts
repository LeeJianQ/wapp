export default {
  state: () => ({
    count: 0
  }) ,
  mutations: {
    increment (state: any) {
      state.count++
    }
  }
}