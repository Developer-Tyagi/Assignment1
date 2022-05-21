<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="4">
        <Sidebar />
      </v-col>
      <v-col class="d-flex">
        <v-card
          @click="$router.push('/OrderDetails')"
          class="mx-auto OrderDetails"
          width="200"
        >
          <v-card-text class="SubText"> Order Details </v-card-text>
        </v-card>
        <v-card
          @click="$router.push('/Route')"
          class="mx-auto RouteDetails"
          width="200"
        >
          <v-card-text class="SubText"> Route </v-card-text>
        </v-card>
        <v-card
          @click="$router.push('/Payments')"
          class="mx-auto PaymentDetails"
          width="200"
        >
          <v-card-text class="SubText"> Payment </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Sidebar from "./SideBar.vue";
export default {
  name: "HomePage",
  components: {
    Sidebar,
  },
  methods: {
    OrderDetails() {
      this.$router.push("/OrderDetails");
    },
    Payments() {
      this.$router.push("/Payments");
    },
    Route() {
      this.$router.push("/OrderDetails");
    },
  },
};
</script>
<style scoped>
.OrderDetails {
  background-image: linear-gradient(
    0deg,
    rgb(164, 126, 182),
    rgb(143, 140, 189)
  );
  text-align: center;
}
.RouteDetails {
  background-image: linear-gradient(0deg, #963e7b, rgb(143, 140, 189));
  text-align: center;
}
.PaymentDetails {
  background-image: linear-gradient(0deg, #963e7b, rgb(116, 185, 102));
  text-align: center;
}
.SubText {
  font: 800;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 40px;
}
</style>