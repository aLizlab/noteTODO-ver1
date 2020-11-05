import firebase from '@/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
  },
})

export const getters = {
  user: state => {
    return state.user
  }
}

export const actions = {
  login({ dispatch }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log('成功！')
        dispatch('checkLogin')
      }).catch((error) => {
        alert(error)
      })
  },
  checkLogin({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit('getData', { uid: user.uid, email: user.email })
      }
    })
  },
  register ({ dispatch }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(user => {
      console.log(user)
      dispatch('checkLogin')
    }).catch(function (error) {
      console.log({'code':error.code, 'message':error.message})
    })
  },
}

export const mutations = {
  getData (state, user) {
    state.user = user
  }
}