const defaultState = () => {
    return {
        customerName: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        BMI: "",
        BP: []
    }
};

export const state = () => defaultState();

export const mutations = {
    resetStore: (state) => {
        Object.assign(state, defaultState());
    },
    setcustomerName: (state, customerName) => {
        state.customerName = customerName
    },
    setage: (state, age) => {
        state.age = age
    },
    setgender: (state, gender) => {
        state.gender = gender
    },
    setweight: (state, weight) => {
        state.weight = weight
    },
    setheight: (state, height) => {
        state.height = height
    },
    setBMI: (state, BMI) => {
        state.BMI = BMI
    },
    setBP: (state, BP) =>{
        state.BP = BP
    }
}

export const actions = {
    async getProfile ({ commit }) {
        const profile = await this.$axios.$get('/profile')
        commit('setProfile', profile["profile"])
      },
    async createProfile ({state}){
        const status = await this.$axios.$post('/profile/new', state)
        console.log(status)
    }
}