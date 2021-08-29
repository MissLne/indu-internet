import { GetterTree } from 'vuex';

const getters: GetterTree<any, any> = {
  homesearch(state: any): any {
    return state.homeSearch;
  }
};

export default getters;