import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  SET_SEARCH(state: any, obj: any): void {
    state.homeSearch = obj;
  }
};

export default mutations;