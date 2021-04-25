<template>
  <div class="w-screen h-screen bg-blue-200 p-20"> <!-- Parent -->
    <div class="text-blue-700 text-2xl">
      Customer Health Information <i class="fas fa-igloo"></i>
    </div>
    <div class="flex w-full bg-blue-500 md:bg-green-200 p-14"> <!-- Child 1 -->
      Please login to see your recent health profile
      </div>
      
    <div class="flex w-full bg-red-500 md:bg-blue-500 p-14"> <!-- Child 2 -->
      
      <login>

      </login>
      </div>
  </div>
</template>

//<script>
import { mapState} from 'vuex';
export default {
computed:{
 ...mapState({
   customerName: state => state.profile.customerName
     })
   }
}
</script>

<style>

</style>
