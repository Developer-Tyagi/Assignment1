<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <Sidebar />
      </v-col>
      <v-col>
        <div>Wellcome to Task page</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Sidebar from "../components/SideBar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
</style>