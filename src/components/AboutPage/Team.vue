<template>
  <v-container app>
    <!-- the background card for all the team members -->
    <v-card depressed class="pa-3 my-3 grey darken-4">
      <!-- the layout for the grid of the team members -->
      <v-layout row wrap justify-space-around>
        <!-- this wraps the team member card -->
        <v-flex
          justify-center
          xs8
          md3
          height="400px"
          class="my-2 pa-2 secondary"
          v-for="member in teamMembers"
          :key="member.name"
        ></v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import Gannon from "../../assets/Gannon.png";
import Nick from "../../assets/Nick.png";
import Adam from "../../assets/Adam.png";
import AJ from "../../assets/AJ.png";
import Ryan from "../../assets/ryan.png";
import Tom from "../../assets/Tom.png";

export default {
  data() {
    return {
      teamMembers: [
        {
          name: "Gannon Darcy",
          img: Gannon,
          github: "https://github.com/GannonDetroit",
          linkedIn: "https://www.linkedin.com/in/gannon-darcy-b8345073/",
          portfolio: "https://www.gannon.dev/",
          position: "Full Stack Developer"
        },
        {
          name: "AJ Brush",
          img: AJ,
          github: "https://github.com/ajb85",
          linkedIn: "https://www.linkedin.com/in/andrew-brush-58205b122/",
          portfolio: "https://ajbrush.com/",
          position: "Full Stack Developer"
        },
        {
          name: "Ryan Boris",
          img: Ryan,
          github: "https://github.com/ryanboris",
          linkedIn: "https://www.linkedin.com/in/ryanboris",
          portfolio: "https://github.com/ryanboris",
          position: "Full Stack Developer"
        },
        {
          name: "Nick Cannariato",
          img: Nick,
          github: "https://github.com/ajb85",
          linkedIn: "https://www.linkedin.com/in/nickcannariato/",
          portfolio: "https://github.com/nickcannariato",
          position: "Full Stack Developer"
        },
        {
          name: "Adam McKenney",
          img: Adam,
          github: "https://github.com/DaftBeowulf",
          linkedIn: "https://www.linkedin.com/in/adam-mckenney-04827a35/",
          portfolio: "https://adammckenney.dev/",
          position: "Full Stack Developer"
        },
        {
          name: "Thomas Hessburg",
          img: Tom,
          github: "https://github.com/TomHessburg",
          linkedIn: "https://www.linkedin.com/in/thomas-hessburg-596948180/",
          portfolio: "https://thomashessburg.com/",
          position: "Full Stack Developer"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>