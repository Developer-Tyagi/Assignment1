<template>
  <v-card class="" flat>
    <v-card elevation="12" width="256">
      <v-navigation-drawer floating permanent>
        <v-list dense rounded>
          <v-list-item
            class="sidebarContent"
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title @click="RouteToPage(item.route)">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Parceel Delivery", route: "ParcelDeliverPage" },
        { title: "Fool Delivery", route: "FoodDeliverPage" },
        { title: "Ecommerce", route: "EcomercePage" },
        { title: "Haulage", route: "HaulagePage" },
        { title: "Transport", route: "TransPortPage" },
        { title: "Tasks", route: "TaskPage" },
      ],
    };
  },
  methods: {
    RouteToPage(val) {
      console.log(val);
      this.$router.push(val);
    },
  },
};
</script>
<style scoped>
.sidebarContent {
  background-image: linear-gradient(
    0deg,
    rgb(104, 173, 190),
    rgb(176, 173, 221)
  );
  margin: 10px;
}
</style>