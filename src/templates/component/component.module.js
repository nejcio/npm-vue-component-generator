const state = {
  {{snakeCase name}}: [],
};

const actions = {
  SET_{{constantCase name}} (observer, obj) {
    observer.commit('SET_{{constantCase name}}', obj);
  },
};

const mutations = {
  SET_{{constantCase name}}(observer, obj) {
    state.{{snakeCase name}} = obj;
  },
};
const getters = {
  {{snakeCase name}}: (state) => {
    return state.{{snakeCase name}}
  },
};

const module = {
  state,
  actions,
  mutations,
  getters,
};

export default module;
