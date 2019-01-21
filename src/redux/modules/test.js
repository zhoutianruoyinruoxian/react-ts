export default {
  state: {
    name: 'name',
  },
  mutations: {
    changeName(dispatch, name) {
      dispatch({ name });
    },
  },
};
