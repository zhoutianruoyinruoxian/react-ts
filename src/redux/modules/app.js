export default {
  state: {
    title: 'demo',
  },
  mutations: {
    changeTitle(setState, getState, title) {
      setState({ title });
    },
  },
};
