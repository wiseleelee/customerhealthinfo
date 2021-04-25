<template>
  <div class="h-screen w-full flex">
    <div class="my-auto mx-auto w-full px-10">
      <div class="">
        <input-element 
          labelName="CUSTOMERNAME" 
          labelId="customerName" 
          inputType="text"
          :model="customerName" 
          @input="customerName($event)" 
        />
        <input-element 
          labelName="AGE" 
          labelId="age" 
          inputType="number"
          :model="age" 
          @input="setage($event)" 
          class="my-2"
        />
        <input-element 
          labelName="GENDER" 
          labelId="gender" 
          inputType="text"
          :model="category" 
          @input="setgender($event)"
          class="my-2" 
        />
        <input-element 
          labelName="WEIGHT" 
          labelId="weight" 
          inputType="number"
          :model="weight" 
          @input="setweight($event)" 
          class="my-2"
        />
        <input-element 
          labelName="HEIGHT" 
          labelId="height" 
          inputType="number"
          :model="height" 
          @input="setheight($event)" 
          class="my-2"
        />
        <input-element 
          labelName="BMI" 
          labelId="BMI" 
          inputType="number"
          :model="BMI" 
          @input="setBMI($event)" 
          class="my-2"
        />
        <button type="button" class="bg-yellow-500 text-gray500 py-2 px-4 hover:bg-yellow-400 hover:-text-gray-800 transition-all ease-in-out duration-300" @click="createProduct">Create</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    layout: "dashboard",
    data() {
      return {
      }
    },
    computed:{
      ...mapState({
        customerName: state => state.profile.customerName,
        age: state => state.profile.age,
        gender: state => state.profile.gender,
        weight: state => state.profile.weight,
        height: state => state.profile.height,
        BMI: state => state.profile.BMI,
      })
    },
    methods: {
      ...mapMutations({
        setcustomerName : 'profile/setcustomerName',
        setage: 'profile/setage',
        setgender: 'profile/setgender',
        setweight: 'profile/setweight',
        setheight: 'profile/setheight',
        setBMI : 'profile/setBMI'
      }),
      ...mapActions({
        createProfile : "profile/createProfile"
      })
    }
}
</script>

<style>

</style>