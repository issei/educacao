import Cookies from 'js-cookie'

export const state = () => ({
    optIn: true    
  })
  
export const mutations = {
  accept(state) {
    state.optIn = false;
    Cookies.set('optIn', false, { expires: 30 });
  },
  get(state){
    state.optIn = Cookies.get('optIn')?false:true;
  }
}