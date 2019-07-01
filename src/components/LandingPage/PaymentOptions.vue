<template>
  <v-container app>
    <!-- this v-card is the background card for all payment options -->
    <v-card depressed height="100%" class="pa-3 my-3 grey darken-4">
      <!-- v-layout is the grid ability to space out the payment plans -->
      <v-layout row wrap justify-space-around>
        <!-- this v-flex wraps the payment card -->
        <v-flex
          justify-center
          xs10
          md3
          height="400px"
          class="my-2 pa-2 secondary"
          v-for="plan in paymentOptions"
          :key="plan.planName"
        >
          <div class="card">
            <div class="upperCard">
              <!-- the title of the card -->
              <v-card-text>
                <div class="title">PLAN : {{ plan.planName}}</div>
              </v-card-text>
              <!-- the image of the card -->
              <v-img :aspect-ratio="16/7" :src="plan.img"></v-img>
            </div>

            <div class="lowerCard">
              <v-card-text class="text-xs-center">
                <!-- the description of the card -->
                <div class="subheading">{{ plan.description}}</div>
              </v-card-text>
              <!-- the button of the card -->
              <v-card-actions>
                <v-btn id="theButton" height="100" depressed color="grey">Sign Up</v-btn>
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
        description: "Free Tier Plan",
        cost: "$0"
      },
      {
        planName: "START-UP",
        img:
          "https://www.aislelabs.com/wp-content/themes/aislelabs3/images/team.png",
        description: "Plan for teams of 10 or less",
        cost: "$1.50"
      },
      {
        planName: "ENTERPRISE",
        img:
          "https://www.geekdentalmarketing.com/wp-content/uploads/2018/09/team.png",
        description: "Plan for teams greater than 10",
        cost: "$1"
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

.title {
  text-align: center;
  margin-bottom: 10%;

  /* @media (min-width: 1260px) {
    font-size: 2px;
  } */
}

#theButton {
  /* @media (mix-width: 960px) {
    width: 80%;
  } */
}
</style>


