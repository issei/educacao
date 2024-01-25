import Cookies from 'js-cookie'

export const state = () => ({
    cadastrado: false
  })
  
export const mutations = {
  accept(state) {
    state.cadastrado = true;
    Cookies.set('cadastrado', true, { expires: 30 });
  },
  get(state){
    state.cadastrado = Cookies.get('cadastrado')?true:false;
  }
}