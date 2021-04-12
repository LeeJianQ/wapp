export default {
  state: () => ({
    user: {
      id: 0,
      token: ''
    }
  }) ,
  mutations: {
    setAccountInfo (state: any, user: any) {
      state.user = user
    }
  }
}