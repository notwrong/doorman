<template>
  <v-container app class="wrapper">
    <!-- this v-card is the background card for all payment options -->
    <v-card depressed class="pa-3 my-3 grey darken-4">
      <!-- v-layout is the grid ability to space out the payment plans -->
      <v-layout row wrap justify-space-around>
        <!-- this v-flex wraps the payment card -->
        <v-flex
          justify-center
          xs8
          md3
          height="400px"
          class="my-2 pa-2 secondary"
          v-for="plan in paymentOptions"
          :key="plan.planName"
          data-aos="flip-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
          data-aos-duration="600"
          style="transform-style: preserve-3d;"
        >
          <div class="card">
            <div class="upperCard">
              <!-- the title of the card -->
              <v-card-text>
                <div class="title font-weight-regular">{{ plan.planName}}</div>
              </v-card-text>
              <!-- the image of the card -->
              <v-img :aspect-ratio="16/7" :src="plan.img"></v-img>
            </div>

            <div class="lowerCard">
              <v-card-text class="text-xs-center">
                <!-- the description of the card -->
                <div class="subheading">
                  {{ plan.description}}
                  <v-icon class="primary--text">check</v-icon>
                </div>
              </v-card-text>
              <!-- the button of the card -->
              <v-card-actions>
                <v-btn
                  v-if="plan.available"
                  class="primary"
                  height="100"
                  depressed
                  color="grey"
                >Sign Up</v-btn>
                <v-btn
                  v-else
                  disabled
                  class="primary"
                  height="100"
                  depressed
                  color="grey"
                >Coming Soon</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    paymentOptions: [
      {
        planName: "BASIC",
        img:
          "https://longfordpc.com/images/growth-clipart-height-measurement-3.png",
        description: "Single User",
        cost: "$0",
        available: true
      },
      {
        planName: "START-UP",
        img:
          "https://www.aislelabs.com/wp-content/themes/aislelabs3/images/team.png",
        description: "Groups < 10",
        cost: "$1.50",
        available: false
      },
      {
        planName: "ENTERPRISE",
        img:
          "https://www.geekdentalmarketing.com/wp-content/uploads/2018/09/team.png",
        description: "Groups > 10",
        cost: "$1",
        available: false
      }
    ]
  }),
  props: {}
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-between;
  padding: inherit;
}

/* [data-aos] {
  visibility: hidden;
};
 [data-aos].animated {
  visibility: visible;
}; */

.title {
  text-align: center;
  margin-bottom: 10%;
}

.v-btn {
  width: 90%;
  height: 45px;
}

.v-card__actions {
  justify-content: center;
}

.upperCard {
  margin-bottom: 4%;
}
</style>


