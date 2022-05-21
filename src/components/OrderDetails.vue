<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout class="bg-color">
          <v-flex xs12 sm8 md4 class="d-flex">
            <v-card class="mx-auto" max-width="400" max-height="300">
              <div>
                <v-card-text>
                  <v-form>
                    <v-btn
                      color="grey--text"
                      class="ma-2 white--text"
                      width="300"
                      @click="ShowDatePickerModel"
                    >
                      <v-icon left dark> mdi-clock </v-icon>
                      Schedule | now
                    </v-btn>
                    <template v-if="ShowDatePicker">
                      <v-row justify="center">
                        <v-date-picker v-model="picker"></v-date-picker>
                      </v-row> </template></v-form
                ></v-card-text>

                <v-text-field
                  class="ml-10 mr-10"
                  v-model="ShipmentId"
                  :counter="max"
                  :rules="rules"
                  label="Shipment ID"
                ></v-text-field>
                <v-btn
                  color="grey--text"
                  class="ml-5 mr-5 white--text"
                  width="300"
                >
                  <v-icon left dark> mdi-camera </v-icon>
                  <input
                    type="file"
                    id="uploadBannerImage"
                    onchange="readURL(this);"
                    v-on:change="(event) => readURL(this)"
                  />
                </v-btn>

                <v-card-actions>
                  <v-btn color="primary mt-10" width="350" to="/">Submit</v-btn>
                </v-card-actions>
              </div>
            </v-card>

            <v-card class="mx-auto" max-width="400" max-height="300">
              <v-img
                class="white--text align-end"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-card-title>Uploaded Image</v-card-title>
              </v-img>

              <v-card-text class="text--primary">
                <div>Schedeule Time : {{ picker }}</div>

                <div>Shipment ID : {{ ShipmentId }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "OrderDetails",
  data() {
    return {
      ShowDatePicker: false,
      ShipmentId: null,
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
  props: {
    source: String,
  },
  watch: {
    picker(val) {
      console.log(val);
      if (val) {
        this.ShowDatePicker = false;
      }
    },
    readurl(val) {
      console.log(val);
    },
  },
  methods: {
    readURL(event) {
      let value = event;
      console.log(value);
    },
    ShowDatePickerModel() {
      this.ShowDatePicker = true;
    },
    myTestFunction() {
      // var data = document.getElementById("my_file");
      var data = document.createElement("INPUT");
      data.setAttribute("type", "file");
      document.body.appendChild(data);
    },
    //  readURL(input) {
    //    document.getElementById("bannerImg").style.display = "block";
    //    let bannerImage = document.getElementById("bannerImg");
    //    let imgData = getBase64Image(bannerImage);
    //    function getBase64Image(img) {
    //      var canvas = document.createElement("canvas");
    //      canvas.width = img.width;
    //      canvas.height = img.height;

    //      var ctx = canvas.getContext("2d");
    //      ctx.drawImage(img, 0, 0);

    //      var dataURL = canvas.toDataURL("image/png");

    //      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    //    }
    //    localStorage.setItem("imgData", imgData);
    //    console.log(input.files && input.files[0]);
    //    var dataImage = localStorage.getItem("imgData");
    //    var bannerImg = document.getElementById("tableBanner");
    //    bannerImg.src = "data:image/png;base64," + dataImage;
    //    console.log(bannerImg, dataImage);
    //    if (input.files && input.files[0]) {
    //      var reader = new FileReader();

    //      reader.onload = function (e) {
    //        document.getElementById("bannerImg").src = e.target.result;
    //      };

    //      reader.readAsDataURL(input.files[0]);
    //    }
    //  },
  },
};
</script>

<style>
.bg-color {
  background-color: rgb(241, 235, 235);
}
</style>
