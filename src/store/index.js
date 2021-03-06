import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    member : {
      email : null,
      name : null,
      mainAddress : null,
      subAddress : null,
      password : null,
      passwordCheck : null,
      phoneNumber : null,
      cardNumber : null
    }
  },
  getters:{
    getName : state => state.member.name,
    getAddress : state => state.member.mainAddress + " " + state.member.subAddress,
    getEmail : state => state.member.email,
    getPhoneNumber : state => state.member.phoneNumber,
    getMainAddress : state => state.member.mainAddress,
    getSubAddress : state => state.member.subAddress,
    getPasswordCheck : state => state.member.passwordCheck,
    getPassword : state => state.member.password
  },
  mutations: {
    setName (state, name) {
      state.member.name = name
    },
    setEmail (state, email) {
      state.member.email = email
    },
    setMainAddress (state, mainAddress) {
      state.member.mainAddress = mainAddress
    },
    setSubAddress (state, subAddress) {
      state.member.subAddress = subAddress
    },
    setPassword (state, password) {
      state.member.password = password
    },
    setPasswordCheck (state, passwordCheck) {
      state.member.passwordCheck = passwordCheck
    },
    setPhoneNumber (state, phoneNumber) {
      state.member.phoneNumber = phoneNumber
    },
    setCardNumber (state, cardNumber) {
      state.member.cardNumber = cardNumber
    }
  },
  actions: {
  },
  modules: {
  }
})
