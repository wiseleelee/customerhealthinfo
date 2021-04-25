<template>
  <div class="w-screen h-screen">
      <div class="w-full h-full flex">
          <div class="flex w-1/6  bg-green-200">
            <side-menu>
                <template v-slot:sideMenuItems>
                    <!-- Home -->
                    <side-menu-item path="/" pathName="Home">
                        <template v-slot:pathIcon>
                            <i class="fas fa-home"></i>
                        </template>
                    </side-menu-item>
                    <!-- Profile -->
                    <side-menu-item path="/profile" pathName="Profile">
                        <template v-slot:pathIcon>
                            <i class="fas fa-seedling"></i>
                        </template>
                    </side-menu-item>
                    <!-- Doctor Profile -->
                    <side-menu-item path="/profile/doctorprofile" pathName="Doctor Profile">
                        <template v-slot:pathIcon>
                            <i class="fas fa-seedling"></i>
                        </template>
                    </side-menu-item>
                    <!-- Purchase History -->
                     <side-menu-item path="/profile/purchase" pathName="Purchase History">
                        <template v-slot:pathIcon>
                            <i class="fas fa-seedling"></i>
                        </template>
                    </side-menu-item>
                </template>
            </side-menu>
          </div>
          <div class="flex w-full bg-blue-500">
              <Nuxt />
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>